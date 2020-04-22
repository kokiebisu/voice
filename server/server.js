const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Router
const router = require('./router');

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  socket.on('join', ({ room }, callback) => {
    console.log('room', room);
    console.log('id', socket.id);

    if (error) {
      return callback(error);
    }
    callback();
  });

  socket.on('disconnect', () => {
    console.log(`${socket.id} has left the chat`);
  });
});

const app = express(feathers());

app.use(cors('*'));
