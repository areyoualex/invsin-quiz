//Here I put my imports, meaning the npm packages I just installed
const express = require('express'); //Express.JS helps you make a server
const app = express(); //This initializes Express
const port = process.env.PORT || 3000;

const path = require('path');

app.set('views', './views');

//Route GET requests to '/'
app.get('/', (req, res) => {
  //Return index.html
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//Server starts taking requests here
app.listen(port, () => console.log(`Listening on ${port}`));
