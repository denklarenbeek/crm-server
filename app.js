const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const index = require('./routes/index');

const port = 8000;

const app = express();

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, 'client/dist')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(expressValidator());
app.use(cookieParser());

// Handle the API routes
app.use('/api/v1', index);

//Render the Angular 2 application on all routes exclude the API and let Angular hanlde the routes
app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));  
});

module.exports = app;