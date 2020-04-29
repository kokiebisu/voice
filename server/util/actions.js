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
  console.log('find rooms', rooms);
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
  console.log('joinroom rooms', rooms);
};

/**
 * Sends the feedback to the specified room
 * @param {string} feedback
 * @param {string} roomId
 */
const sendFeedbackToRoom = (feedback, roomId) => {
  return rooms.map((room) => {
    if (room.room === roomId) {
      if (!room.feedbacks[feedback]) {
        room.feedbacks[feedback] = 1;
      } else {
        room.feedbacks[feedback] += 1;
      }
    }
    return room;
  });
};

/**
 *
 * @param {string} feedback
 * @param {string} roomId
 */
const respondFeedback = (feedback, roomId) => {
  return rooms.map((room) => {
    if (room.room === roomId) {
      delete room.feedbacks[feedback];
      return room;
    }
  });
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

module.exports = {
  createRoom,
  findRoom,
  joinRoom,
  sendFeedbackToRoom,
  respondFeedback,
  removeRoom,
};
