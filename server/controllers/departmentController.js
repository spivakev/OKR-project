const { Department } = require('../models/models')
const ApiError = require('../error/apiError')

class DepartmentController {
  async create(req, res) {
    const { name, description, email, city }
    if (!name) return res.json(ApiError.badRequest("Department 'name' is required"))

    const department = await Department.create({ name, description, email, city })
    return res.json(department)
  }

  async getAll(req, res) {
    const departments = await Department.findAll()
    res.json(departments)
  }

  async getOne(req, res) {
    const { id } = req.params
    const department = Department.findOne({ where: { id: id } })
    res.json(department)
  }

  async update(req, res) {
    const { id, name, description, email, city } = req.body
    if (!id) return res.json(ApiError.badRequest("Department 'id' is required"))

    const department = await Department.update(
      { name, description, email, city },
      { where: { id }, returning: true, plain: true }
    )
    return res.json(department[1])
  }

  async delete(req, res) {
    const { id } = req.params

    const department = await Department.destroy({ where: { id } })
    res.json(!!department)
  }
}

module.exports = new DepartmentController()