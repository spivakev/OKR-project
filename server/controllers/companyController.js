const { Company } = require('../models/models')
const ApiError = require('../error/apiError')

class CompanyController {
  async create(req, res) {
    const { name, description, address, email, phone, url } = req.body
    if (!name) return res.json(ApiError.badRequest("Company 'name' is required"))

    const company = await Company.create({ name, description, address, email, phone, url })
    return res.json(company)
  }

  async getAll(req, res) {
    const companies = await Company.findAll()
    res.json(companies)
  }

  async getOne(req, res) {
    const { id } = req.params
    const company = await Company.findOne({ where: { id: id } })
    res.json(company)
  }

  async update(req, res) {
    const { id, name, description, address, email, phone, url } = req.body
    if (!id) return res.json(ApiError.badRequest("Company 'id' is required"))

    const company = await Company.update(
      { name, description, address, email, phone, url },
      { where: { id }, returning: true, plain: true }
    )
    return res.json(company[1])
  }

  async delete(req, res) {
    const { id } = req.params

    const company = await Company.destroy({ where: { id } })
    res.json(!!company)
  }
}

module.exports = new CompanyController()