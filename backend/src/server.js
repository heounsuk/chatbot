'use strict';

const express = require('express');
const { excuteQuery } = require('./db') ;
const { serverUrl, port } = require('./config');

// App
const app = express();

app.get('/add_user', (req, res) => {
});

app.get('/', (req, res) => {
  console.log('hello world in docker')
  res.send('Hello World to output');
});


app.listen(port, () => {
  console.log(`App listening on ${serverUrl}:${port}`);
});



// Route to test database connection
app.get('/desserts', async (req, res) => {
  try {
    let sql = `SELECT * FROM desserts`;
    let result = await excuteQuery(sql);
    res.send(result);
  } catch (error) {
    console.error(error);
    throw error;
  }
})