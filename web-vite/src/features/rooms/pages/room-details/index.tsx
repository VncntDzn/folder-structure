import { PrivateLayout } from "../../../../common/layouts";
import { RoomDetailsSummary } from "./components/room-details-summary";
import { useRoomDetails } from "./hooks/use-room-details";

export function RoomDetailsPage() {
  const { room, isLoading } = useRoomDetails();

  return (
    <PrivateLayout title="Room Details">
      {isLoading ? <p>Loading room details...</p> : <RoomDetailsSummary room={room} />}
    </PrivateLayout>
  );
}
