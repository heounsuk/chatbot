'use strict';

const express = require('express');

const { serverUrl, port } = require('./config');

// App
const app = express();

app.get('/', (req, res) => {
  console.log('hello world in docker')
  res.send('Hello World to output');
});


app.listen(port, () => {
  console.log(`App listening on ${serverUrl}:${port}`);
});

