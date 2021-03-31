const { Goal, NeighboringRelation } = require('../models/models')
const ApiError = require('../error/apiError')

class GoalController {
  async create(req, res) {
    const { name, description, status, startDate, finishDate } = req.body
    if (!name) return res.json(ApiError.badRequest("Goal 'name' is required"))

    const goal = await Goal.create({ name, description, status, startDate, finishDate })
    return res.json(goal)
  }

  async getAll(req, res) {
    const goals = await Goal.findAll()
    res.json(goals)
  }

  async getOne(req, res) {
    const { id } = req.params
    const goal = await Goal.findOne({ where: { id: id } })
    res.json(goal)
  }

  async update(req, res) {
    const { id, name, description, status, startDate, finishDate } = req.body
    if (!id) return res.json(ApiError.badRequest("Goal 'id' is required"))

    const goal = await Goal.update(
      { name, description, status, startDate, finishDate },
      { where: { id }, returning: true, plain: true }
    )
    return res.json(goal[1])
  }

  async delete(req, res) {
    const { id } = req.params

    const goal = await Goal.destroy({ where: { id } })
    res.json(!!goal)
  }
}

module.exports = new GoalController()