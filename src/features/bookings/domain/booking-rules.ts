import type { BookingStatus } from "./booking-status";
import { resolveApprovalPolicy } from "./approval-policy";
import type { Booking } from "./booking";
import type { TimeSlot } from "./time-slot";
import { isValidTimeSlot, overlaps } from "./time-slot";
import type { Room } from "../../rooms/domain/room";

const ALLOWED_TRANSITIONS: Record<BookingStatus, BookingStatus[]> = {
  draft: ["pending", "confirmed", "cancelled"],
  pending: ["confirmed", "rejected", "cancelled"],
  confirmed: ["cancelled"],
  cancelled: [],
  rejected: [],
};

export function canTransitionBooking(
  currentStatus: BookingStatus,
  nextStatus: BookingStatus,
) {
  return ALLOWED_TRANSITIONS[currentStatus].includes(nextStatus);
}

export function getInitialBookingStatus(room: Room, attendeeCount: number) {
  const approvalPolicy = resolveApprovalPolicy(room, attendeeCount);
  return approvalPolicy.requiresApproval ? "pending" : "confirmed";
}

export function hasBookingConflict(
  roomId: string,
  requestedTimeSlot: TimeSlot,
  bookings: Booking[],
) {
  if (!isValidTimeSlot(requestedTimeSlot)) {
    return true;
  }

  return bookings.some(
    (booking) =>
      booking.roomId === roomId &&
      booking.status !== "cancelled" &&
      booking.status !== "rejected" &&
      overlaps(booking.timeSlot, requestedTimeSlot),
  );
}
