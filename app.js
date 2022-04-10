const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Middleware to parse the req body as text (it's stringified JSON)
app.use(bodyParser.text());

/* Ignore GET requests!
app.get('/', (req, res) => {
  res.send(recentimage)
  console.log('Got a GET request\n');
})*/

// When receiving a POST, log its contents to confirm proper receipt
app.post('/', (req, res) => {
  console.log('Got a POST request ' + Date.now());
  pic = JSON.parse(JSON.parse(req.body));
  console.log(pic);
  res.send('ok');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})