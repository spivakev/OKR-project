const db = require('../db')
const ApiError = require('../error/apiError')

class ProfileController {
  async registration(req, res) {
    const { lastname, firstname, middlename, email, password, phone, position } = req.body
    const newProfile = await db.query(`INSERT INTO profiles (lastname, firstname, middlename, email, password, phone, position) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [lastname, firstname, middlename, email, password, phone, position])
    res.json(newProfile.rows[0])
  }

  async login(req, res) {

  }

  async check(req, res, next) {
    const { id } = req.query
    if (!id) {
      return next(ApiError.badRequest('Не указан ID'))
    }
    res.json(id)
  }

  async getAll(req, res) {
    const profiles = await db.query(`SELECT * FROM profiles`)
    res.json(profiles.rows)
  }

  async getOne(req, res) {
    const id = req.params.id
    const profile = await db.query(`SELECT * FROM profiles WHERE id = $1`, [id])
    res.json(profile.rows[0])
  }

  async update(req, res) {
    const { id, lastname, firstname, middlename, email, password, phone, position } = req.body
    const updatedProfile = await db.query(`UPDATE profiles SET lastname = $2, firstname = $3, middlename = $4, email = $5, password = $6, phone = $7, position = $8 WHERE id = $1 RETURNING *`, [id, lastname, firstname, middlename, email, password, phone, position])
    res.json(updatedProfile.rows[0])
  }

  async delete(req, res) {
    const id = req.params.id
    const profile = await db.query(`DELETE FROM profiles WHERE id = $1`, [id])
    res.json(profile.rows[0])
  }
}

module.exports = new ProfileController()