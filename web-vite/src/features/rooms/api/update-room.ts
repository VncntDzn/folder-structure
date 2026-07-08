import type { Room } from "../domain/room";
import type { RoomResponse } from "../dtos/create-room.response";
import type { UpdateRoomPayload } from "../pages/room-details/dtos/update-room.request";

export async function updateRoom(
  currentRoom: Room,
  payload: UpdateRoomPayload,
): Promise<RoomResponse> {
  return Promise.resolve({
    item: {
      ...currentRoom,
      ...payload,
      updatedAt: new Date().toISOString(),
    },
  });
}
