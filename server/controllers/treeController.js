const { Tree } = require('../models/models')
const ApiError = require('../error/apiError')

class TreeController {
  async create(req, res) {
    const { name, description, status, finishDate } = req.body
    if (!name) return res.json(ApiError.badRequest("Tree 'name' is required"))

    const tree = await Tree.create({ name, plan, unit })
    return res.json(tree)
  }

  async getAll(req, res) {
    const trees = await Tree.findAll()
    res.json(trees)
  }

  async getOne(req, res) {
    const { id } = req.params
    const tree = await Tree.findOne({ where: { id: id } })
    res.json(tree)
  }

  async update(req, res) {
    const { id, name, description, status, finishDate } = req.body
    if (!id) return res.json(ApiError.badRequest("Tree 'id' is required"))

    const tree = await Tree.update(
      { name, description, status, finishDate },
      { where: { id }, returning: true, plain: true }
    )
    return res.json(tree[1])
  }

  async delete(req, res) {
    const { id } = req.params

    const tree = await Tree.destroy({ where: { id } })
    res.json(!!tree)
  }
}

module.exports = new TreeController()