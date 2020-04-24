const rooms = [];

// Teacher
const createRoom = (id, room) => {
  const newRoom = { admin: id, users: [], room };
  rooms.push(newRoom);
  return newRoom;
};

// Students

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
