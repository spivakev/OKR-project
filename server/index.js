require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
//const profileRouter = require('./routes/profile.routes')
const models = require('./models/models')


const PORT = process.env.PORT || 8080

const app = express()

/*
app.use(express.json())
app.use('/api', profileRouter)
*/

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()