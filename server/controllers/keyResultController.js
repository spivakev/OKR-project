const { KeyResult } = require('../models/models')
const ApiError = require('../error/apiError')

class KeyResultController {
  async create(req, res) {
    const { name, plan, unit } = req.body
    if (!name) return res.json(ApiError.badRequest("Key result 'name' is required"))

    const keyResult = await KeyResult.create({ name, plan, unit })
    return res.json(keyResult)
  }

  async getAll(req, res) {
    const keyResults = await KeyResult.findAll()
    res.json(keyResults)
  }

  async getOne(req, res) {
    const { id } = req.params
    const keyResult = await KeyResult.findOne({ where: { id: id } })
    res.json(keyResult)
  }

  async update(req, res) {
    const { id, name, plan, unit } = req.body
    if (!id) return res.json(ApiError.badRequest("KeyResult 'id' is required"))

    const keyResult = await KeyResult.update(
      { name, plan, unit },
      { where: { id }, returning: true, plain: true }
    )
    return res.json(keyResult[1])
  }

  async delete(req, res) {
    const { id } = req.params

    const keyResult = await KeyResult.destroy({ where: { id } })
    res.json(!!keyResult)
  }
}

module.exports = new KeyResultController()