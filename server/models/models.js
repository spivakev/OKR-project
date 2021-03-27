const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Profile = sequelize.define('profile', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, //SERIAL PRIMARY KEY,
  lastname: {type: DataTypes.STRING}, //VARCHAR(255),
  firstname: { type: DataTypes.STRING}, //VARCHAR(255),
  middlename: { type: DataTypes.STRING}, //VARCHAR(255),
  email: { type: DataTypes.STRING, unique: true}, //VARCHAR(255),
  password: { type: DataTypes.STRING}, //VARCHAR(30),
  phone: { type: DataTypes.STRING}, //VARCHAR(20),
  position: { type: DataTypes.STRING} //VARCHAR(255)
})