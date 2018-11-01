//Here I put my imports, meaning the npm packages I just installed
const express = require('express'); //Express.JS helps you make a server
const app = express(); //This initializes Express
const port = process.env.PORT || 3000;
const upload = require('multer')();

const bodyParser = require('body-parser');
const path = require('path');

const b99 = [
  { name: 'Rosa Diaz', short: 'rosa', func: 'atan' },
  { name: 'Terry Jeffords', short: 'terry', func: 'acos' },
  { name: 'Amy Santiago', short: 'amy', func: 'asin' },
  { name: 'Raymond Holt', short: 'raymond', func: 'acot' },
  { name: 'Jake Peralta', short: 'jake', func: 'acsc' },
  { name: 'Gina Linetti', short: 'gina', func: 'acsc' },
  { name: 'Charles Boyle', short: 'charles', func: 'asec'}
];
const sinusoids = {
  atan: {
    name: "Inverse Tangent",
    description: "You are a somber and serious person. When it comes time to get\
    down to business, you're dependable. You are probably an introvert.",
    short: "atan"
  },
  acot: {
    name: "Inverse Cotangent",
    description: "You are a serious person. Sometimes, you might not get all the\
    hip new trends of this generation, but it doesn't matter because what matters\
    to you is getting the job done. You are probably an extrovert.",
    short: "acot"
  },
  acos: {
    name: "Inverse Cosine",
    description: "You are an energetic leader. You love to be in charge and you\
    empower those around you to do their best. You are probably an introvert.",
    short: "acos"
  },
  asin: {
    name: "Inverse Sine",
    description: "You are an energetic leader. You find yourself in charge and\
    leading the way in your group of friends. You are probably an introvert.",
    short: "asin"
  },
  asec: {
    name: "Inverse Secant",
    description: "You are a fun person. You can be childish at times, but you\
    are definitely the party person among your friends. You are probably an\
    extrovert.",
    short: "asec"
  },
  acsc: {
    name: "Inverse Cosecant",
    description: "You are the fun one among your group of friends. You always find a\
    way to cheer up your buddies when they need it most. You are probably an introvert.",
    short: "acsc"
  },
};

app.set('views', './views');
app.set('view engine', 'ejs')

//Route GET requests to /
app.get('/', (req, res) => {
  //Return index.html
  var indexOptions = { b99: b99 };
  res.render('index', indexOptions);
});

// for parsing stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Route POST requests to /result (do form stuff)
app.post('/result', (req, res) => {
  console.log(req.body);
  if(req.body.character){
    //The user sent the personality quiz, and we're going to give their answers back
    var char = b99.filter(obj => { return obj.short === req.body.character})[0];
    console.log(char);
    if (char) {
      console.log(char.func);
      console.log(sinusoids[char.func]);
      res.render('result', sinusoids[char.func]);
    }
    else res.render('result', {error: true});
  }
});

//Serve static files in /static
app.use(express.static('static'));

//Server starts taking requests here
app.listen(port, () => console.log(`Listening on ${port}`));
