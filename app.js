const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
  res.send('This is the server for B-sharp!')
  console.log('Got a GET request\n');
})

app.post('/', (req, res) => {
  console.log('Got a POST request');
  if (req.body){
    console.log(req.body);
  }
  else {
    console.log("No body knows");
  }

})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})