import { dateToText } from "../../../common/utils";
import type { Booking } from "../domain/booking";

export type BookingCalendarProps = {
  bookings: Booking[];
};

export function BookingCalendar({ bookings }: BookingCalendarProps) {
  return (
    <section>
      <h2>Upcoming Calendar</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {dateToText(booking.timeSlot.startAt)} - {booking.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
