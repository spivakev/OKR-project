const db = require('../db')

class CompanyController {
  async create(req, res) {
   // const { lastname, firstname, middlename, email, password, phone, position } = req.body
    //const newCompany = await db.query(`INSERT INTO companies (lastname, firstname, middlename, email, password, phone, position) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [lastname, firstname, middlename, email, password, phone, position])
    //res.json(newCompany.rows[0])
  }


  async getAll(req, res) {
    const companies = await db.query(`SELECT * FROM companies`)
    res.json(companies.rows)
  }

  async getOne(req, res) {
    const id = req.params.id
    const company = await db.query(`SELECT * FROM companies WHERE id = $1`, [id])
    res.json(company.rows[0])
  }

  async update(req, res) {
  //  const { id, lastname, firstname, middlename, email, password, phone, position } = req.body
  // const updatedCompany = await db.query(`UPDATE companies SET lastname = $2, firstname = $3, middlename = $4, email = $5, password = $6, phone = $7, position = $8 WHERE id = $1 RETURNING *`, [id, lastname, firstname, middlename, email, password, phone, position])
  //  res.json(updatedCompany.rows[0])
  }

  async delete(req, res) {
    const id = req.params.id
    const company = await db.query(`DELETE FROM companies WHERE id = $1`, [id])
    res.json(company.rows[0])
  }
}

module.exports = new CompanyController()