import { PrivateLayout } from "../../../../common/layouts";
import { BookingForm } from "../../components/booking-form";
import { BookingList } from "../../components/booking-list";
import { BookingsPageNote } from "./components/bookings-page-note";
import { useBookingsPage } from "./hooks/use-bookings-page";

export function BookingsPage() {
  const { bookings, createBooking, isCreating, isLoading } = useBookingsPage();

  return (
    <PrivateLayout title="Bookings">
      <BookingsPageNote />
      <BookingForm
        isLoading={isCreating}
        onSubmit={async (payload) => {
          await createBooking(payload);
        }}
      />
      {isLoading ? <p>Loading bookings...</p> : <BookingList bookings={bookings} />}
    </PrivateLayout>
  );
}
