const Signatures = require('./signatures')
const RatingDetails = require('./rating-details')

const doit = async () => {
  const sig = await Signatures.create({
    user_id: 2,
    user_signature_url: 'some kind of url',
    conveyancer_id: 2,
  })
  console.log(sig.toJSON())
  const sigs = await Signatures.findAll({})
  console.log(`returned ${sigs.length} signatures`)

  const rd = await RatingDetails.findAll({})
  console.log(`returned ${rd.length} rating_details`)
}

doit()
