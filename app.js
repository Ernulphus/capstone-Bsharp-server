const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.text());

app.get('/', (req, res) => {
  res.send(recentimage)
  console.log('Got a GET request\n');
})

app.post('/', (req, res) => {
  console.log('Got a POST request ' + Date.now());
  console.log(JSON.parse(req.body));
  res.send('ok');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})