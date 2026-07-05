import type { BookingStatus } from "./booking-status";
import type { RecurrenceRule } from "./recurrence-rule";
import type { TimeSlot } from "./time-slot";

export type Booking = {
  id: string;
  roomId: string;
  title: string;
  description?: string;
  requesterId: string;
  attendeeCount: number;
  timeSlot: TimeSlot;
  recurrence: RecurrenceRule;
  status: BookingStatus;
  approvalReason?: string;
  createdAt: string;
  updatedAt: string;
};
