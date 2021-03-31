const { Profile, ProfileDepartment } = require('../models/models')
const ApiError = require('../error/apiError')

class ProfileController {
  async registration(req, res) {
    const { lastname, firstname, middlename, email, password, phone, position } = req.body
    if (!email || !password) return res.json(ApiError.badRequest("Profile 'login', 'password' are required"))
    const profile = await Profile.create({ lastname, firstname, middlename, email, password, phone, position })
    res.json(profile)
  }

  async login(req, res) {

  }

  async check(req, res, next) {
    const { id } = req.query
    // дописать проверку, авторизован ли пользователь
    if (!id) {
      return next(ApiError.badRequest('Не указан ID'))
    }
    res.json(id)
  }

  async getAll(req, res) {
    const profiles = await Profile.findAll()
    res.json(profiles)
  }

  async getOne(req, res) {
    const { id } = req.params
    const profile = await Profile.findOne({ where: { id: id } })
    res.json(profile)
  }

  async update(req, res) {
    const { id, lastname, firstname, middlename, email, password, phone, position } = req.body
    if (!id) return res.json(ApiError.badRequest("Profile 'id' is required"))

    const profile = await Profile(
      { lastname, firstname, middlename, email, password, phone, position },
      { where: { id }, returning: true, plain: true }
    )
    return res.json(profile[1])
  }

  async delete(req, res) { 
    const { id } = req.params
    const profile = await Profile.destroy({ where: { id } })
    return res.json(!!profile)
  }
}

module.exports = new ProfileController()