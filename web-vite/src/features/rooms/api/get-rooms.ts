import type { Room } from "../domain/room";
import type { RoomsResponse } from "../dtos/create-room.response";

const SAMPLE_ROOMS: Room[] = [
  {
    id: "room-1",
    name: "Conference Room A",
    description: "Starter room item",
    capacity: 8,
    status: "available",
    permissions: ["read", "write"],
    createdAt: new Date("2026-06-11T08:00:00.000Z").toISOString(),
    updatedAt: new Date("2026-06-11T08:00:00.000Z").toISOString(),
  },
  {
    id: "room-2",
    name: "Boardroom",
    description: "Large room that requires review for bigger gatherings.",
    capacity: 16,
    status: "available",
    permissions: ["read", "write", "manage"],
    createdAt: new Date("2026-06-10T09:00:00.000Z").toISOString(),
    updatedAt: new Date("2026-06-10T09:00:00.000Z").toISOString(),
  },
];

export async function getRooms(): Promise<RoomsResponse> {
  return Promise.resolve({
    items: SAMPLE_ROOMS,
    total: SAMPLE_ROOMS.length,
  });
}
