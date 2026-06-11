import { PublicLayout } from "../../common/layouts";
import { BookingsPage } from "../../features/bookings/pages/bookings.page";
import { RoomsPage } from "../../features/rooms/pages/rooms.page";

export function AppRoutes() {
  return (
    <PublicLayout title="Application">
      <p>This scaffold now demonstrates both medium and complex feature modules.</p>
      <RoomsPage />
      <BookingsPage />
    </PublicLayout>
  );
}
