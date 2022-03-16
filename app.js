const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is the server for B-sharp!')
  console.log('Got a GET request\n');
})

app.post('/', (req, res) => {
  console.log('Got a POST request');
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})