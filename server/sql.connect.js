const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('se', 'triton', 'password', {
  dialect: 'mysql',
})

module.exports = sequelize
