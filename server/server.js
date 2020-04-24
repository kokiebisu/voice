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
const { createRoom, findRoom, joinRoom } = require('./util/actions');

const PORT = process.env.PORT || 5000;

// Setting up a socket with the namespace 'connection' for new sockets
io.on('connection', (socket) => {
  // Teachers

  socket.on('createRoom', (roomId) => {
    const newRoom = createRoom(socket.id, roomId);
    console.log(`${socket.id} has created the room ${newRoom.room}`);
  });

  // Students

  socket.on('joinRoom', (roomId, callback) => {
    const { result, error } = findRoom(roomId);
    if (error) {
      return callback(error);
    }
    joinRoom({ id: socket.id }, roomId);
    socket.join(result.room);
    console.log(`Student ${socket.id} successfully joined the room ${roomId}`);
  });

  socket.on('disconnect', () => console.log(`${socket.id} has left the room`));
});

app.use(cors('*'));
app.use(router);

server.listen(PORT, () => console.log(`Listening on ${PORT}...`));
