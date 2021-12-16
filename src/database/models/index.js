/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require('../../config/db')[env]
const { lang } = require('../../lang')

const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize.authenticate().then(() => {
  db.connection = lang.__('db.connect')
}).catch((err) => {
  db.connection = err.toString()
})

if (process.env.NODE_ENV === 'development') {
  sequelize.sync({ alter: true }).then(() => {
    console.info(lang.__('db.sync'))
  }).catch((err) => {
    const manipulate = err.toString().split(':')
    let message
    if (manipulate[0] === 'SequelizeConnectionRefusedError') {
      message = `${manipulate[0]}: ${lang.__('db.dc')}`
    } else {
      message = err.toString()
    }
    console.info(lang.__('db.not_sync'), message)
  })
}

module.exports = db
