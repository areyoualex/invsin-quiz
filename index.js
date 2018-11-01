//Here I put my imports, meaning the npm packages I just installed
const express = require('express'); //Express.JS helps you make a server
const app = express(); //This initializes Express
const port = 3000;

//Route GET requests to '/'
app.get('/', (req, res) => {
  //Return basic Hello World text
  res.send('Hello World, testing')
});

//Server starts taking requests here
app.listen(port, () => console.log(`Listening on ${port}`));
