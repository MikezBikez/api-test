const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')('server:express')
const mongoose = require('mongoose')
const Path = require('path')
const app = express()
const port = 3500
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/se'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

//Get the default connection
var db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//Define a schema
var AgentsSchema = new mongoose.Schema({
  _id: { type: String, unique: true, required: true },
  listing_id: Number,
  agent_first_name: String,
  agent_last_name: String,
  agent_username: String
})

// Compile model from schema
const Agents = mongoose.model('Agents', AgentsSchema)

app.get('/', (req, res) => res.send('hello world'))

app.get('/agents', async (request, response) => {
  const agents = await Agents.find({}, '_id agent_first_name agent_last_name')
  response.status(200).json(agents)
})

app.get('/agents/:_id', async (request, response) => {
  const agents = await Agents.findOne(
    { _id: request.params._id },
    '_id agent_first_name agent_last_name'
  )
  response.status(200).json(agents)
})

app.post('/agents', async (request, response) => {
  try {
    debug(request)
    const agents = await Agents.create(request.body)
    response.status(200).json(agents)
  } catch (e) {
    response.status(500).send(e.message)
  }
})

app.delete('/agents/:_id', async (req, res) => {
  try {
    const result = await Agents.deleteOne({ _id: req.params._id })
    if (result.deletedCount === 1) {
      res.status(200).json({ status: 'ok' })
    } else {
      res.status(404).json({ status: 'error', message: 'record not found' })
    }
  } catch (e) {
    res.status(500).send({ status: 'error', message: e.message })
  }
})

app.put('/agents/:_id', async function(req, res, next) {
  // use our agent model to find the agent we want
  try {
    await Agents.findByIdAndUpdate({ _id: req.params._id }, req.body)
    const agents = await Agents.findOne({ _id: req.params._id })
    if (agents) res.status(200).json(agents)
    else res.status(404).send('record not found')
  } catch (e) {
    response.status(500).send(e.message)
  }
})

app.listen(port, () => console.log(`listening @ http://localhost:${port}`))

// write all routes to swagger file
const filepath = Path.join(__dirname, './docs/swagger.json')
const writeSwaggerFile = require('express-swagger-export')
const template = {
  info: {
    title: 'Pics.io exported',
    description: 'Pics.io app API',
    version: '1.0.0'
  }
}
writeSwaggerFile(app, filepath, { template, includeRoot: false })
