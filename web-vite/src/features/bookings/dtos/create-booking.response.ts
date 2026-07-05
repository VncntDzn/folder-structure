import type { BookingStatus } from "../domain/booking-status";
import type { RecurrenceRule } from "../domain/recurrence-rule";
import type { TimeSlot } from "../domain/time-slot";

export type BookingDto = {
  id: string;
  roomId: string;
  title: string;
  description?: string;
  requesterId: string;
  attendeeCount: number;
  startAt: string;
  endAt: string;
  recurrence: RecurrenceRule;
  status: BookingStatus;
  approvalReason?: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateBookingResponse = {
  item: BookingDto;
};

export type BookingConflict = {
  bookingId: string;
  roomId: string;
  timeSlot: TimeSlot;
};
