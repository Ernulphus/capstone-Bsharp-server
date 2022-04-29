const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Middleware to parse the req body as multipart/form-data
const multer  = require('multer')
const submit = multer({ dest: 'submits/' })


// Middleware to parse the req body as text (it's stringified JSON)
// app.use(bodyParser.text());


app.get('/', (req, res) => {
  res.send("<p>Oy! Why are you trying to get me???</p>)
})

// When receiving a POST, log its contents to confirm proper receipt
app.post('/', submit.single('submission'), function (req, res, next) {
  console.log('Got a POST request ' + Date.now());

  pic = req.file;

  console.log(pic, req.body);

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