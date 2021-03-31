const { NeighboringRelation } = require('../models/models')
const ApiError = require('../error/apiError')

class NeighboringRelationController {
  async create(req, res) {
    const { goalOneId, goalTwoId, name } = req.body
    if (!goalOneId || !goalTwoId) return res.json(ApiError.badRequest("NeighboringRelation 'goalOneId', 'goalTwoId,' are required"))

    const relation = await NeighboringRelation.create({ goalOneId, goalTwoId, name })
    return res.json(relation)
  }

  async getAll(req, res) {
    const relations = await NeighboringRelation.findAll()
    res.json(relations)
  }

  async getOne(req, res) {
    const { id } = req.params
    const relation = await NeighboringRelation.findOne({ where: { id: id } })
    res.json(relation)
  }

  async update(req, res) {
    const { id, goalOneId, goalTwoId, name  } = req.body
    if (!id || !goalOneId || !goalTwoId) return res.json(ApiError.badRequest("NeighboringRelation 'id', 'goalOneId', 'goalTwoId,' are required"))

    const relation = await NeighboringRelation.update(
      { goalOneId, goalTwoId, name },
      { where: { id }, returning: true, plain: true }
    )
    return res.json(relation[1])
  }

  async delete(req, res) {
    const { id} = req.params
    const relation = await NeighboringRelation.destroy({ where: { id } })
    res.json(!!relation)
  }
}

module.exports = new NeighboringRelationController()