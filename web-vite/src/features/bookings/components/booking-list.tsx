import { dateToText } from "../../../common/utils";
import type { Booking } from "../domain/booking";
import { BookingStatusBadge } from "./booking-status-badge";

export type BookingListProps = {
  bookings: Booking[];
};

export function BookingList({ bookings }: BookingListProps) {
  if (bookings.length === 0) {
    return <p>No bookings scheduled.</p>;
  }

  return (
    <section>
      {bookings.map((booking) => (
        <article key={booking.id}>
          <h3>{booking.title}</h3>
          <p>{booking.description ?? "No booking details provided."}</p>
          <p>Room: {booking.roomId}</p>
          <p>Attendees: {booking.attendeeCount}</p>
          <p>
            Schedule: {dateToText(booking.timeSlot.startAt)} to{" "}
            {dateToText(booking.timeSlot.endAt)}
          </p>
          <BookingStatusBadge status={booking.status} />
        </article>
      ))}
    </section>
  );
}
