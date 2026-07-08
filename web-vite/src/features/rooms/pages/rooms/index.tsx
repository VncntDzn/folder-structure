import { PrivateLayout } from "../../../../common/layouts";
import { RoomForm } from "./components/room-form";
import { RoomList } from "./components/room-list";
import { RoomsPageNote } from "./components/rooms-page-note";
import { useCreateRoom } from "./hooks/use-create-room";
import { useRooms } from "./hooks/use-rooms";

export function RoomsPage() {
  const { rooms } = useRooms();
  const { createRoom, isLoading } = useCreateRoom();

  return (
    <PrivateLayout title="Rooms">
      <RoomsPageNote />
      <RoomForm
        isLoading={isLoading}
        onSubmit={async (payload) => {
          await createRoom(payload);
        }}
      />
      <RoomList rooms={rooms} />
    </PrivateLayout>
  );
}
