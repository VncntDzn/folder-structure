import type { BookingDto } from "../dtos/create-booking.response";
import type { ListBookingsResponse } from "../dtos/list-bookings.response";

const SAMPLE_BOOKINGS: BookingDto[] = [
  {
    id: "booking-1",
    roomId: "room-1",
    title: "Weekly Team Sync",
    description: "Recurring operations update",
    requesterId: "user-1",
    attendeeCount: 6,
    startAt: "2026-06-12T01:00:00.000Z",
    endAt: "2026-06-12T02:00:00.000Z",
    recurrence: {
      frequency: "weekly",
      interval: 1,
      count: 4,
    },
    status: "confirmed",
    createdAt: "2026-06-11T00:00:00.000Z",
    updatedAt: "2026-06-11T00:00:00.000Z",
  },
  {
    id: "booking-2",
    roomId: "room-2",
    title: "Quarterly Planning Review",
    description: "Leadership approval pending",
    requesterId: "user-2",
    attendeeCount: 14,
    startAt: "2026-06-12T03:00:00.000Z",
    endAt: "2026-06-12T04:30:00.000Z",
    recurrence: {
      frequency: "none",
      interval: 1,
    },
    status: "pending",
    approvalReason: "Large-capacity bookings require manual approval.",
    createdAt: "2026-06-11T00:30:00.000Z",
    updatedAt: "2026-06-11T00:30:00.000Z",
  },
];

export async function getBookings(): Promise<ListBookingsResponse> {
  return Promise.resolve({
    items: SAMPLE_BOOKINGS,
    total: SAMPLE_BOOKINGS.length,
  });
}
