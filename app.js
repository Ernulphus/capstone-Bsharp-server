const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is the server for B-sharp!')
})

app.post('/', (req, res) => {
  res.send('Got a POST request');
  console.log(req);
})

app.listen(port, () => {
  console.log(`App listeningon port ${port}`)
})