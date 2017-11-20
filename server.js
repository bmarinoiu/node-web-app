'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

//require the body-parser nodejs module
const bodyParser = require('body-parser');

//require the path nodejs module
const path = require("path");

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
//app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.post('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({response: "OK"}));
  console.log(" ")
  console.log(req.body);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
