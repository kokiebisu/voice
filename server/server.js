const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Router
const router = require('./routes/mainRoute');

const PORT = process.env.PORT || 5000;

// Setting up a socket with the namespace 'connection' for new sockets
io.on('connection', (socket) => {
  console.log('new client connected');

  // Listen on a new namespace called 'join'
  socket.on('join', ({ message, error }) => {
    console.log(message);
    if (error) {
      return callback(error);
    }
    // Broadcast it out to all other sockets excluding the socket which sent us the data
    socket.broadcast.emit('outgoing data', { num: data });
    callback();
  });

  // A special namespace 'disconnect' for when a client disconnects
  socket.on('disconnect', () => console.log(`${socket.id} has left the chat`));
});

app.use(cors('*'));
app.use(router);

server.listen(PORT, () => console.log(`Listening on ${PORT}...`));
