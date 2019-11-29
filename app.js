// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const hbs = require('express-handlebars');

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});
// listen for requests :)
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
