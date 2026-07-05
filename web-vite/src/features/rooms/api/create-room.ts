import type { Room } from "../domain/room";
import type { CreateRoomPayload } from "../dtos/create-room.request";
import type { RoomResponse } from "../dtos/create-room.response";

export async function createRoom(
  payload: CreateRoomPayload,
): Promise<RoomResponse> {
  const now = new Date().toISOString();
  const room: Room = {
    id: crypto.randomUUID(),
    name: payload.name,
    description: payload.description,
    capacity: payload.capacity,
    status: "available",
    permissions: payload.permissions,
    createdAt: now,
    updatedAt: now,
  };

  return Promise.resolve({ item: room });
}
