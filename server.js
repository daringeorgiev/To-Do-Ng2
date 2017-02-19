// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const port = process.env.PORT || '3000';
const database = process.env.DB || 'mongodb://localhost/toDos';

mongoose.Promise = require('bluebird');
mongoose.connect(database);

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

// Cross Origin middleware
if (!process.env.prod) {
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })
}

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

const api = require('./server/routes');
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server start on:${port}`));