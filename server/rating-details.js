const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('./sql.connect')

class RatingDetails extends Model {}
RatingDetails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    listing_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: false, sequelize, modelName: 'rating_details' }
)

module.exports = RatingDetails
