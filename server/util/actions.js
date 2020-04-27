/**
 * @file Contains all the methods associated with the WebSocket
 */

/**
 * Stores all the ROOMS in here
 */
const rooms = [];

/**
 * Creates a room with the Teacher as the admin
 * @param id
 * @param room
 */
const createRoom = (id, room) => {
  const newRoom = { admin: id, users: [], room, feedbacks: {} };
  rooms.push(newRoom);
  return newRoom;
};

/**
 * Checks whether is the specified room is available in rooms
 * @param roomId
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
 * @param userId
 * @param roomId
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
 * @param feedback
 * @param roomId
 */
const sendFeedbackToRoom = (feedback, roomId) => {
  console.log('inside function feedback', feedback);
  console.log('inside function roomid', roomId);
  rooms.map((room) => {
    if (room.room === roomId) {
      // if there is not feedback property
      if (!room[feedback]) {
        room[feedback] = 1;
        return;
      }
      room[feedback] += 1;
    }
    return { result: room.feedback };
  });
  return { error: 'room not found' };
};

module.exports = {
  createRoom,
  findRoom,
  joinRoom,
  sendFeedbackToRoom,
};
