import { PrivateLayout } from "../../../../common/layouts";
import { EditBookingNote } from "./components/edit-booking-note";
import { useEditBooking } from "./hooks/use-edit-booking";

export function EditBookingPage() {
  const { booking } = useEditBooking();

  return (
    <PrivateLayout title="Edit Booking">
      <EditBookingNote />
      {booking ? <p>Selected booking: {booking.title}</p> : <p>Loading booking...</p>}
    </PrivateLayout>
  );
}
