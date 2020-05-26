const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('./sql.connect')

class Signatures extends Model {}
Signatures.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    user_id: DataTypes.INTEGER,
    user_signature_url: DataTypes.STRING,
    conveyancer_id: DataTypes.INTEGER,
  },
  { timestamps: false, sequelize, modelName: 'signatures' }
)

module.exports = Signatures
