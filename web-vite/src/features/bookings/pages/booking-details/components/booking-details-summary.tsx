import { dateToText } from "../../../../../common/utils";
import type { Booking } from "../../../domain/booking";
import { BookingStatusBadge } from "../../../components/booking-status-badge";

export type BookingDetailsSummaryProps = {
  booking?: Booking;
};

export function BookingDetailsSummary({
  booking,
}: BookingDetailsSummaryProps) {
  if (!booking) {
    return <p>Booking not found.</p>;
  }

  return (
    <article>
      <h3>{booking.title}</h3>
      <p>{booking.description ?? "No booking details provided."}</p>
      <p>Room: {booking.roomId}</p>
      <p>Requested by: {booking.requesterId}</p>
      <p>
        Schedule: {dateToText(booking.timeSlot.startAt)} to{" "}
        {dateToText(booking.timeSlot.endAt)}
      </p>
      <BookingStatusBadge status={booking.status} />
    </article>
  );
}
