/**
 * @file Contains all the methods associated with the WebSocket
 */

/**
 * Stores all the ROOMS in here
 */
let rooms = [];

/**
 * Creates a room with the Teacher as the admin
 * @param {string} id
 * @param {string} room
 */
const createRoom = (id, room) => {
  const newRoom = { admin: id, users: [], room, feedbacks: {} };
  rooms.push(newRoom);
  return newRoom;
};

/**
 * Checks whether is the specified room is available in rooms
 * @param {string} roomId
 */
const findRoom = (roomId) => {
  // Finds room from rooms array
  const result = rooms.find((room) => room.room === roomId);
  if (result) {
    return { result };
  } else {
    return { error: 'invalid' };
  }
};

/**
 * Joins the room as a student
 * @param {string} userId
 * @param {string} roomId
 */
const joinRoom = (userId, roomId) => {
  rooms.map((room) => {
    if (room.room === roomId) {
      room.users.push(userId);
    }
  });
};

/**
 * Sends the feedback to the specified room
 * @param {string} feedback
 * @param {string} roomId
 */
const sendFeedbackToRoom = (feedback, roomId, sender) => {
  let sentRoom;
  rooms.map((room) => {
    if (room.room === roomId) {
      if (!room.feedbacks[feedback]) {
        room.feedbacks[feedback] = [sender];
      } else {
        room.feedbacks[feedback].push(sender);
      }
    }
    sentRoom = room;
  });
  return sentRoom;
};

/**
 * Deletes the feedback that awas being pressed
 * @param {string} feedback
 * @param {string} roomId
 */
const respondFeedback = (feedback, roomId) => {
  let studentIds;
  rooms.map((room) => {
    if (room.room === roomId) {
      //gathers ids with the student id
      studentIds = [...new Set(room.feedbacks[feedback])];
      delete room.feedbacks[feedback];
    }
  });
  return studentIds;
};

/**
 * Removes the room from the rooms array
 * @param {string} roomId
 */
const removeRoom = (roomId) => {
  const newRoom = rooms.filter((room) => {
    return room.room !== roomId;
  });
  rooms = newRoom;
};

/**
 * Remove the feedback based on the student userId
 * @param {string} feedbackName
 * @param {string} studentId
 * @param {string} roomId
 */
const removeFeedbackByUserId = (feedbackName, studentId, roomId) => {
  let updatedRoom;
  rooms.map((room) => {
    // Find specified room
    if (room.room === roomId) {
      updatedRoom = room.feedbacks[feedbackName].filter(
        (user) => user !== studentId
      );
      room.feedbacks[feedbackName] = updatedRoom;
      updatedRoom = room;
    }
  });
  return updatedRoom;
};

module.exports = {
  createRoom,
  findRoom,
  joinRoom,
  sendFeedbackToRoom,
  respondFeedback,
  removeRoom,
  removeFeedbackByUserId,
};
