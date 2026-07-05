import { mapBookingDtoToDomain } from "../mappers/booking.mapper";

const mappedBooking = mapBookingDtoToDomain({
  id: "booking-1",
  roomId: "room-1",
  title: "Demo",
  requesterId: "user-1",
  attendeeCount: 4,
  startAt: "2026-06-12T01:00:00.000Z",
  endAt: "2026-06-12T02:00:00.000Z",
  recurrence: {
    frequency: "none",
    interval: 1,
  },
  status: "confirmed",
  createdAt: "2026-06-11T00:00:00.000Z",
  updatedAt: "2026-06-11T00:00:00.000Z",
});

if (mappedBooking.timeSlot.startAt !== "2026-06-12T01:00:00.000Z") {
  throw new Error("Expected booking mapper to preserve the start time.");
}
