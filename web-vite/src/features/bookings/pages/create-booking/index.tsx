import { PrivateLayout } from "../../../../common/layouts";
import { BookingForm } from "../../components/booking-form";
import { CreateBookingNote } from "./components/create-booking-note";
import { useBookingAvailability } from "./hooks/use-booking-availability";
import { useCreateBooking } from "./hooks/use-create-booking";

export function CreateBookingPage() {
  const { checkAvailability } = useBookingAvailability();
  const { createBooking, isLoading } = useCreateBooking();

  return (
    <PrivateLayout title="Create Booking">
      <CreateBookingNote />
      <BookingForm
        isLoading={isLoading}
        onSubmit={async (payload) => {
          await checkAvailability(payload.roomId, payload.timeSlot);
          await createBooking(payload);
        }}
      />
    </PrivateLayout>
  );
}
