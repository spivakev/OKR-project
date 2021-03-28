const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Profile = sequelize.define('profile', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  lastname: { type: DataTypes.STRING },
  firstname: { type: DataTypes.STRING },
  middlename: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  position: { type: DataTypes.STRING }
})


const Company = sequelize.define('company', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  address: { type: DataTypes.TEXT },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  url: { type: DataTypes.STRING },
})


const Department = sequelize.define('department', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  email: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
})

const ProfileDepartment = sequelize.define('profile_department', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})


const Tree = sequelize.define('tree', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.STRING },
  finishDate: { type: DataTypes.DATE },

})


const Goal = sequelize.define('goal', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.STRING, allowNull: false },
  startDate: { type: DataTypes.DATE },
  finishDate: { type: DataTypes.DATE },
})



const KeyResult = sequelize.define('key_result', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  plan: { type: DataTypes.REAL },
  unit: { type: DataTypes.STRING }, //ед. изм.
})


const KeyResultValue = sequelize.define('key_result_value', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.REAL },
})

const NeighboringRelation = sequelize.define('key_result_value', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
})



Company.hasMany(Department)
Department.belongsTo(Company)


Profile.hasMany(Department, { foreignKey: 'headProfileId' })
Department.belongsTo(Profile, { foreignKey: 'headProfileId' })


Profile.belongsToMany(Department, { through: ProfileDepartment })
Department.belongsToMany(Profile, { through: ProfileDepartment })

Company.hasMany(Tree)
Tree.belongsTo(Company)

Tree.hasMany(Goal)
Goal.belongsTo(Tree)

Department.hasMany(Goal)
Goal.belongsTo(Department)

Goal.belongsToMany(Goal, { through: NeighboringRelation, as: "goalOneId", foreignKey: "id" })
Goal.belongsToMany(Goal, { through: NeighboringRelation, as: "goalTwoId", foreignKey: "id" })

Profile.hasMany(Goal, { foreignKey: 'ownerId' })
Goal.belongsTo(Profile, { foreignKey: 'ownerId' })

Goal.hasMany(KeyResult)
KeyResult.belongsTo(Goal)

Profile.hasMany(KeyResult, { foreignKey: 'ownerId' })
KeyResult.belongsTo(Profile, { foreignKey: 'ownerId' })

KeyResult.hasMany(KeyResultValue)
KeyResultValue.belongsTo(KeyResult)

Profile.hasMany(KeyResultValue, { foreignKey: 'createdById' })
KeyResultValue.belongsTo(Profile, { foreignKey: 'createdById' })

module.exports = {
  Profile, Company, Department, ProfileDepartment, Tree, Goal, KeyResult, KeyResultValue, NeighboringRelation
}