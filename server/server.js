/**
 * @file Drives the server
 */

/**
 * Dependencies
 */
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

/**
 * Setting up the server
 */
const app = express();
const server = http.createServer(app);
const io = socketio(server);

/**
 * Router
 */
const authRouter = require('./routes/authRoute');

/**
 * Methods
 */
const {
  createRoom,
  findRoom,
  joinRoom,
  sendFeedbackToRoom,
} = require('./util/actions');

/**
 * Port
 */
const PORT = process.env.PORT || 5000;

/**
 * Setting up a connection to accept new sockets
 * @param socket - The incoming sockets
 */
io.on('connection', (socket) => {
  /**
   * Enables teachers to create a room
   */
  socket.on('createRoom', (roomId) => {
    const newRoom = createRoom(socket.id, roomId);
    console.log(`${socket.id} has created the room ${newRoom.room}`);
  });

  /**
   * Enables students to join the specified room
   * @param roomId - Roomid given by the student
   */
  socket.on('joinRoom', (roomId, callback) => {
    const { result, error } = findRoom(roomId);
    if (error) {
      return callback(error);
    }
    joinRoom({ id: socket.id }, roomId);
    socket.join(result.room);
    console.log(`Student ${socket.id} successfully joined the room ${roomId}`);
  });

  socket.on('sendFeedback', (feedbackName, roomId, callback) => {
    console.log('feedback', feedbackName);
    console.log('roomId', roomId);
    const { result, error } = sendFeedbackToRoom(feedbackName, roomId);
    if (error) {
      return callback(error);
    }
    console.log(
      `Student ${socket.id} successfully sent a feedback to the room ${roomId}`
    );
  });

  socket.on('disconnect', () => console.log(`${socket.id} has left the room`));
});

/**
 * Middleware
 */
app.use(express.json());
app.use(cors('*'));

/**
 * Routes
 */
app.use('/auth', authRouter);

server.listen(PORT, () => console.log(`Listening on ${PORT}...`));
