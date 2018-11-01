//Here I put my imports, meaning the npm packages I just installed
const express = require('express'); //Express.JS helps you make a server
const app = express(); //This initializes Express
const port = process.env.PORT || 3000;

const path = require('path');

app.set('views', './views');
app.set('view engine', 'ejs')

//Route GET requests to /
app.get('/', (req, res) => {
  //Return index.html
  var indexOptions = {
    b99: [
      { name: 'Rosa Diaz', short: 'rosa' },
      { name: 'Terry Jeffords', short: 'terry' },
      { name: 'Amy Santiago', short: 'amy' },
      { name: 'Raymond Holt', short: 'raymond' },
      { name: 'Jake Peralta', short: 'jake' },
      { name: 'Gina Linetti', short: 'gina' },
      { name: 'Charles Boyle', short: 'charles' }
    ]
  };
  res.render('index', indexOptions);
});

//Serve static files in /static
app.use(express.static('static'));

//Server starts taking requests here
app.listen(port, () => console.log(`Listening on ${port}`));
