const rooms = [];

const createRoom = (id, room) => {
  const newRoom = { admin: id, users: [], room };
  rooms.push(newRoom);
  console.log('rooms', rooms);
  console.log('newRoom.room', newRoom.room);
  return newRoom;
};

const addUser = ({ id, name, room }) => {};

module.exports = {
  createRoom,
  addUser,
};
