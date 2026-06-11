import { PrivateLayout } from "../../../common/layouts";
import { RoomCard } from "../components/room-card";
import { useRooms } from "../hooks/use-rooms";

export function RoomDetailsPage() {
  const { rooms } = useRooms();
  const room = rooms[0];

  return (
    <PrivateLayout title="Room Details">
      {room ? <RoomCard room={room} /> : <p>Room not found.</p>}
    </PrivateLayout>
  );
}
