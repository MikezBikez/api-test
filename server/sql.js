const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('se', 'triton', 'password', {
  dialect: 'mysql',
})

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

const doit = async () => {
  const sig = await Signatures.create({
    user_id: 2,
    user_signature_url: 'some kind of url',
    conveyancer_id: 2,
  })
  console.log(sig.toJSON())
  const sigs = await Signatures.findAll({})
  console.log(`returned ${sigs.length} signatures`)
}

doit()
// sequelize
//   .sync()
//   .then(() =>
//     Signatures.create({
//       id: 111,
//       user_id: 2,
//       user_signature_url: 'some kind of url',
//       conveyancer_id: 2,
//     })
//   )
//   .then((sig) => {
//     console.log(sig.toJSON())
//   })
