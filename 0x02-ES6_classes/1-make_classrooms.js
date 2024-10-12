import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomArray = [];
  let room;
  room = new ClassRoom(19);
  roomArray.push(room);
  room = new ClassRoom(20);
  roomArray.push(room);
  room = new ClassRoom(34);
  roomArray.push(room);

  return roomArray;
}
