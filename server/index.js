const express = require('express')
const debug = require('debug')('server:express')
const app = express()
const port = 3500

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/customers', (req, res) => res.send('GET /customers'))
app.put('/customers', (req, res) => {
  debug('PUT /customers')
  res.send('PUT /customers')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))