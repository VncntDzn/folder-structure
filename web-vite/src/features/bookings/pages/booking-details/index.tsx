import { PrivateLayout } from "../../../../common/layouts";
import { Button } from "../../../../common/ui";
import { BookingDetailsSummary } from "./components/booking-details-summary";
import { useBookingDetails } from "./hooks/use-booking-details";
import { useCancelBooking } from "./hooks/use-cancel-booking";

export function BookingDetailsPage() {
  const { booking, isLoading } = useBookingDetails();
  const { cancelBooking, isLoading: isCancelling } = useCancelBooking();

  return (
    <PrivateLayout title="Booking Details">
      {isLoading ? <p>Loading booking details...</p> : <BookingDetailsSummary booking={booking} />}
      {booking ? (
        <Button
          isLoading={isCancelling}
          type="button"
          onClick={() => {
            void cancelBooking(booking.id);
          }}
        >
          Cancel Booking
        </Button>
      ) : null}
    </PrivateLayout>
  );
}
