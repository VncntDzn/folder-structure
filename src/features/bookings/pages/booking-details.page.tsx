import { PrivateLayout } from "../../../common/layouts";
import { BookingList } from "../components/booking-list";
import { useBookings } from "../hooks/use-bookings";

export function BookingDetailsPage() {
  const { bookings } = useBookings();
  const booking = bookings[0];

  return (
    <PrivateLayout title="Booking Details">
      {booking ? <BookingList bookings={[booking]} /> : <p>Booking not found.</p>}
    </PrivateLayout>
  );
}
