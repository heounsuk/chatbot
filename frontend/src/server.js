'use strict';

const express = require('express');
const { excuteQuery } = require('./db') ;
const { serverUrl, port } = require('./config');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
// page rendering codes are located in ../views/pages/
app.get('/', (req, res) => {
  res.render('pages/index');
});

io.on('connection', (socket)=>{
  console.log("a user connected via socket!")
  io.emit('chat message', 'What dessert do you like to add?');

  socket.on('disconnect', ()=>{
      console.log("a user disconnected!")
  })

  socket.on('chat message', async (msg)=>{
    console.log("Message: "+ msg);
    try {
      let sql = `INSERT INTO desserts (name) VALUE (?)`;
      let result = await excuteQuery(sql, [msg]);
      sql = `SELECT * FROM desserts`;
      result = await excuteQuery(sql);
      
      const dessert_names = result.map((object) => {
        return object.name;
      });
      io.emit('chat message', dessert_names);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
})

server.listen(port, () => {
  console.log(`Server listening on ${serverUrl}:${port}`);
});