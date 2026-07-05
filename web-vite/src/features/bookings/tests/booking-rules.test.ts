import { canTransitionBooking, getInitialBookingStatus, hasBookingConflict } from "../domain/booking-rules";

if (!canTransitionBooking("pending", "confirmed")) {
  throw new Error("Expected pending bookings to be confirmable.");
}

if (canTransitionBooking("cancelled", "confirmed")) {
  throw new Error("Expected cancelled bookings to be terminal.");
}

if (
  getInitialBookingStatus(
    {
      id: "room-2",
      name: "Boardroom",
      capacity: 16,
      status: "available",
      permissions: ["read", "write", "manage"],
      createdAt: "2026-06-10T00:00:00.000Z",
      updatedAt: "2026-06-10T00:00:00.000Z",
    },
    14,
  ) !== "pending"
) {
  throw new Error("Expected large bookings to require approval.");
}

if (
  !hasBookingConflict(
    "room-1",
    {
      startAt: "2026-06-12T01:30:00.000Z",
      endAt: "2026-06-12T02:30:00.000Z",
    },
    [
      {
        id: "booking-1",
        roomId: "room-1",
        title: "Demo",
        requesterId: "user-1",
        attendeeCount: 4,
        timeSlot: {
          startAt: "2026-06-12T01:00:00.000Z",
          endAt: "2026-06-12T02:00:00.000Z",
        },
        recurrence: {
          frequency: "none",
          interval: 1,
        },
        status: "confirmed",
        createdAt: "2026-06-11T00:00:00.000Z",
        updatedAt: "2026-06-11T00:00:00.000Z",
      },
    ],
  )
) {
  throw new Error("Expected overlap detection to flag conflicting bookings.");
}
