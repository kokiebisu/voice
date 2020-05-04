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
  respondFeedback,
  removeRoom,
  removeFeedbackByUserId,
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
  console.log("I am connected")

  /**
   * Enables teachers to create a room
   * @param {string} roomId - RoomId generated by the teacher
   */
  socket.on('createRoom', (roomId) => {
    const newRoom = createRoom(socket.id, roomId);
    console.log(`${socket.id} has created the room ${newRoom.room}`);
  });

  /**
   * Enables students to join the specified room
   * @param {string} roomId - Roomid given by the student
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

  /**
   * Enables students to send a specified feedback to the teacher
   * @param {string} feedbackName - Specified feedback Example: 'too slow'
   * @param {string} roomId - RoomId which the student belongs to
   */
  socket.on('sendFeedback', (feedbackName, roomId) => {
    const result = sendFeedbackToRoom(feedbackName, roomId, socket.id);
    // change this part
    io.to(result.admin).emit('displayFeedbacks', result);
    io.in(roomId).emit('displayFeedbacks', result);
    console.log(
      `Student ${socket.id} successfully sent a feedback to the room ${roomId}`
    );
    // Removes the feedback after 2 minutes
    setTimeout(() =>
      // RemoveFeedback function
      {
        let updatedRoom = removeFeedbackByUserId(
          feedbackName,
          socket.id,
          roomId
        );
        io.to(result.admin).emit('displayFeedbacks', updatedRoom);
      }, 10000);

    // Broadcast displayfeedbacks to everyone
  });

  /**
   * Enables teachers to process the feedback that was being sent
   * @param {string} feedbackName - Specified feedback
   * @param {string} roomId - Id of the room the users belong in
   */
  socket.on(
    'respondFeedback',
    (feedbackName, roomId) => {
      const studentIds = respondFeedback(feedbackName, roomId);
      // Send the notice to the student screen
      const { result } = findRoom(roomId);
      socket.to(roomId).emit('updateVoice', result);
      studentIds.map((id) => io.to(id).emit('teacherResponse'));
      console.log(
        `The teacher ${socket.id} has successfully responded to the students ${studentIds}`
      );
    },
    []
  );

  /**
   * Enables teacher to destroy their room
   * @param {string} roomId - Id of the room the users belong in
   */
  socket.on('destroyRoom', (roomId) => {
    // Delete the room from the rooms array
    removeRoom(roomId);
    // Pushes all the students out of the room
    socket.to(roomId).emit('kickFromRoom');
    console.log(`Teacher ${socket.id} destoyed the room`);
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
