import type { Room } from "../../../domain/room";
import { RoomCard } from "../../../components/room-card";

export type RoomListProps = {
  rooms: Room[];
};

export function RoomList({ rooms }: RoomListProps) {
  if (rooms.length === 0) {
    return <p>No rooms available.</p>;
  }

  return (
    <section>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </section>
  );
}
