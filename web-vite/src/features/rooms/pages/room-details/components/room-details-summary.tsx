import type { Room } from "../../../domain/room";
import { RoomCard } from "../../../components/room-card";

export type RoomDetailsSummaryProps = {
  room?: Room;
};

export function RoomDetailsSummary({ room }: RoomDetailsSummaryProps) {
  if (!room) {
    return <p>Room not found.</p>;
  }

  return <RoomCard room={room} />;
}
