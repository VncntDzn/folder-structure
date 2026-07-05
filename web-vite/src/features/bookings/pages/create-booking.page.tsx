import { PrivateLayout } from "../../../common/layouts";
import { BookingForm } from "../components/booking-form";
import { useBookingAvailability } from "../hooks/use-booking-availability";
import { useCreateBooking } from "../hooks/use-create-booking";

export function CreateBookingPage() {
  const { createBooking, isLoading } = useCreateBooking();
  const { availability, checkAvailability } = useBookingAvailability();

  return (
    <PrivateLayout title="Create Booking">
      <BookingForm
        isLoading={isLoading}
        onSubmit={async (payload) => {
          await checkAvailability(payload.roomId, payload.timeSlot);
          await createBooking(payload);
        }}
      />
      {availability ? (
        <p>
          Availability: {availability.isAvailable ? "Available" : "Conflicting"}
        </p>
      ) : null}
    </PrivateLayout>
  );
}
