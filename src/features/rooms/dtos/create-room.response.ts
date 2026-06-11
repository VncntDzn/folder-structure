import type { Room } from "../domain/room";

export type RoomsResponse = {
  items: Room[];
  total: number;
};

export type RoomResponse = {
  item: Room;
};
