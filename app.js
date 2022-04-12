const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let lastImage;

// Middleware to parse the req body as text (it's stringified JSON)
app.use(bodyParser.text());


app.get('/', (req, res) => {
  res.send(lastImage)
})*

// When receiving a POST, log its contents to confirm proper receipt
app.post('/', (req, res) => {
  console.log('Got a POST request ' + Date.now());
  pic = JSON.parse(req.body)._data;
  console.log(pic);
  lastImage = pic;
  res.append('guess', 'Beep boop this is an image of something!').end();

  // for (key in pic){
  //   console.log(key);
  //   console.log(pic[key]);
  //   console.log();
  // }
  // const file = new File(
	// 	pic,
	// 	'filename.jpeg',
	// 	{
	// 		type: pic.type,
	// 		lastModified: new Date().getTime()
	// 	}
	// )

})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})