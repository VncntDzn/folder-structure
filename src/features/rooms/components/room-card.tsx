import type { Room } from "../domain/room";

export type RoomCardProps = {
  room: Room;
};

export function RoomCard({ room }: RoomCardProps) {
  return (
    <article>
      <h3>{room.name}</h3>
      <p>{room.description ?? "No description available."}</p>
      <p>Capacity: {room.capacity}</p>
      <p>Status: {room.status}</p>
    </article>
  );
}
