import { getBookings } from "./get-bookings";
import { hasBookingConflict } from "../domain/booking-rules";
import { isValidTimeSlot, type TimeSlot } from "../domain/time-slot";
import type { AvailabilityResponse } from "../dtos/availability.response";
import { mapBookingDtoToDomain } from "../mappers/booking.mapper";

export async function getBookingAvailability(
  roomId: string,
  requestedTimeSlot: TimeSlot,
): Promise<AvailabilityResponse> {
  const response = await getBookings();
  const bookings = response.items.map(mapBookingDtoToDomain);
  const conflicts = bookings
    .filter((booking) => booking.roomId === roomId)
    .filter((booking) => hasBookingConflict(roomId, requestedTimeSlot, [booking]))
    .map((booking) => ({
      bookingId: booking.id,
      roomId: booking.roomId,
      timeSlot: booking.timeSlot,
    }));
  const hasInvalidTimeRange = !isValidTimeSlot(requestedTimeSlot);

  return {
    roomId,
    requestedTimeSlot,
    isAvailable:
      !hasInvalidTimeRange &&
      !hasBookingConflict(roomId, requestedTimeSlot, bookings),
    conflicts,
  };
}
