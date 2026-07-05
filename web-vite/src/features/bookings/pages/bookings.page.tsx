import { PrivateLayout } from "../../../common/layouts";
import { BookingCalendar } from "../components/booking-calendar";
import { BookingForm } from "../components/booking-form";
import { BookingList } from "../components/booking-list";
import { useBookings } from "../hooks/use-bookings";
import { useCreateBooking } from "../hooks/use-create-booking";

export function BookingsPage() {
  const { bookings } = useBookings();
  const { createBooking, isLoading } = useCreateBooking();

  return (
    <PrivateLayout title="Bookings">
      <BookingForm
        isLoading={isLoading}
        onSubmit={async (payload) => {
          await createBooking(payload);
        }}
      />
      <BookingCalendar bookings={bookings} />
      <BookingList bookings={bookings} />
    </PrivateLayout>
  );
}
