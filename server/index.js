const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')('server:express')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
const port = 3500

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/customers', (req, res) => res.send('GET /customers'))
app.put('/customers', (req, res) => {
  debug('PUT /customers')
  res.send('PUT /customers')
})
app.post('/customers', (req, res) => {
  debug('POST /customers')
  res.send('POST /customers')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
