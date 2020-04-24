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
  const newRoom = { admin: id, users: [], room };
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

module.exports = {
  createRoom,
  findRoom,
  joinRoom,
};
