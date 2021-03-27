const db = require('../db')

class ProfileController {
  async createProfile(req, res) {
    const { lastname, firstname, middlename, email, password, phone, position } = req.body
    const newProfile = await db.query(`INSERT INTO profile (lastname, firstname, middlename, email, password, phone, position) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [lastname, firstname, middlename, email, password, phone, position])
    res.json(newProfile.rows[0])
  }

  async getProfiles(req, res) {
    const profiles = await db.query(`SELECT * FROM profile`)
    res.json(profiles.rows)
  }

  async getOneProfile(req, res) {
    const id = req.params.id
    const profile = await db.query(`SELECT * FROM profile WHERE id = $1`, [id])
    res.json(profile.rows[0])
  }

  async updateProfile(req, res) {
    const { id, lastname, firstname, middlename, email, password, phone, position } = req.body
    const updatedProfile = await db.query(`UPDATE profile SET lastname = $2, firstname = $3, middlename = $4, email = $5, password = $6, phone = $7, position = $8 WHERE id = $1 RETURNING *`, [id, lastname, firstname, middlename, email, password, phone, position])
    res.json(updatedProfile.rows[0])
  }

  async deleteProfile(req, res) {
    const id = req.params.id
    const profile = await db.query(`DELETE FROM profile WHERE id = $1`, [id])
    res.json(profile.rows[0])
  }
}

module.exports = new ProfileController()