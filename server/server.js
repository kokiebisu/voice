const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Router
const router = require('./routes/mainRoute');

// Helper
const { createRoom } = require('./users');

const PORT = process.env.PORT || 5000;

// Setting up a socket with the namespace 'connection' for new sockets
io.on('connection', (socket) => {
  console.log(`${socket.id} has entered the room`);

  socket.on('createRoom', (roomId) => {
    const newRoom = createRoom(socket.id, roomId);
    console.log(`${socket.id} has created the room ${newRoom.room}`);
  });

  // Listen on a new namespace called 'join'
  socket.on('join', () => {
    console.log('new client joined');
  });

  // A special namespace 'disconnect' for when a client disconnects
  socket.on('disconnect', () => console.log(`${socket.id} has left the room`));
});

app.use(cors('*'));
app.use(router);

server.listen(PORT, () => console.log(`Listening on ${PORT}...`));
