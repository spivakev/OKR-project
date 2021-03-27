const sequelize = require('../db')
const { DataTypes } = require('sequelize')

//, allowNull: false
//unique: true

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
  finish_date: { type: DataTypes.DATE },
  created_at: { type: DataTypes.DATE },
  // company_id INTEGER,
  //FOREIGN KEY(company_id) REFERENCES company(id)
})


const Goal = sequelize.define('goal', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.STRING, allowNull: false },
  start_date: { type: DataTypes.DATE },
  finish_date: { type: DataTypes.DATE },
  created_at: { type: DataTypes.DATE },
  updated_at: { type: DataTypes.DATE },
  //department_id INTEGER,
  //owner_id INTEGER,
  //tree_id INTEGER,
  //FOREIGN KEY(department_id) REFERENCES department(id),
  //FOREIGN KEY(owner_id) REFERENCES profile(id),
  //FOREIGN KEY(tree_id) REFERENCES tree(id)
})



const KeyResult = sequelize.define('key_result', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  plan: { type: DataTypes.REAL },
  unit: { type: DataTypes.STRING }, //ед. изм.
  //owner_id INTEGER,
  //goal_id INTEGER,
  //FOREIGN KEY(owner_id) REFERENCES profile(id),
  //FOREIGN KEY(goal_id) REFERENCES goal(id)
})


const KeyResultValue = sequelize.define('key_result_value', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.REAL },
  created_at: { type: DataTypes.DATE },
  //created_by_id INTEGER,
  //result_id INTEGER,
  //FOREIGN KEY(created_by_id) REFERENCES profile(id),
  //FOREIGN KEY(result_id) REFERENCES key_result(id)
})

const NeighboringRelation = sequelize.define('key_result_value', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  //goal_one_id INTEGER,
  //goal_two_id INTEGER,
  //FOREIGN KEY(goal_one_id) REFERENCES goal(id),
  //FOREIGN KEY(goal_two_id) REFERENCES goal(id)
})



Company.hasMany(Department)
Department.belongsTo(Company)


Profile.hasMany(Department)
Department.belongsTo(Profile)


Profile.belongsToMany(Department, { through: ProfileDepartment })
Department.belongsToMany(Profile, { through: ProfileDepartment })

Company.hasMany(Tree)
Tree.belongsTo(Company)

Tree.hasMany(Goal)
Goal.belongsTo(Tree)

Department.hasMany(Goal)
Goal.belongsTo(Department)

Goal.belongsToMany(Goal, { through: NeighboringRelation, as: "goal_one_id", foreignKey: "id" })
Goal.belongsToMany(Goal, { through: NeighboringRelation, as: "goal_two_id", foreignKey: "id" })

Profile.hasMany(Goal)
Goal.belongsTo(Profile)

Goal.hasMany(KeyResult)
KeyResult.belongsTo(Goal)

Profile.hasMany(KeyResult)
KeyResult.belongsTo(Profile)

KeyResult.hasMany(KeyResultValue)
KeyResultValue.belongsTo(KeyResult)

Profile.hasMany(KeyResultValue)
KeyResultValue.belongsTo(Profile)

module.exports = {
  Profile, Company, Department, ProfileDepartment, Tree, Goal, KeyResult, KeyResultValue, NeighboringRelation
}