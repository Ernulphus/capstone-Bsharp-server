const express = require('express')
const bodyParser = require('body-parser')
const execSync = require('child_process').execSync; // For calling the model
const app = express()
const port = 3000

// Middleware to parse the req body as multipart/form-data
const multer  = require('multer')
const submit = multer({ dest: '../capstone-Bsharp-AI/usersubmissions/' })


// Middleware to parse the req body as text (it's stringified JSON)
// app.use(bodyParser.text());

// When receiving a POST, log its contents to confirm proper receipt
app.post('/', submit.single('submission'), function (req, res, next) {
  console.log('Got a POST request ' + Date.now());

  pic = req.file;

  console.log(pic, req.body);

  res.append('guess', 'Beep boop this is an image of something!').end();

  try {
  	const output = execSync('ls', { encoding: 'utf-8' });
	console.log('Output was: \n', output);
  }
  catch (error) {
  	console.log(error);
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
