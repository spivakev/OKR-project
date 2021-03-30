const { KeyResultValue } = require('../models/models')
const ApiError = require('../error/apiError')

class KeyResultValueController {
  async create(req, res) {
    const { value } = req.body // + owner id, key result id 
    if (!value) return res.json(ApiError.badRequest("Key result value 'value' property is required"))

    const keyResultValue = await KeyResultValue.create({ value })
    return res.json(keyResultValue)
  }

  async getAll(req, res) {
    const keyResultValues = await KeyResultValue.findAll()
    res.json(keyResultValues)
  }

  async getOne(req, res) {
    const { id } = req.params
    const keyResultValue = await KeyResultValue.findOne({ where: { id: id } })
    res.json(keyResultValue)
  }

  async update(req, res) {
    const { id, value } = req.body
    if (!id) return res.json(ApiError.badRequest("Key result value 'id' is required"))

    const keyResultValue = await KeyResultValue.update(
      { value },
      { where: { id }, returning: true, plain: true }
    )
    return res.json(keyResultValue[1])
  }

  async delete(req, res) {
    const { id } = req.params

    const keyResultValue = await KeyResultValue.destroy({ where: { id } })
    res.json(!!keyResultValue)
  }
}

module.exports = new KeyResultValueController()