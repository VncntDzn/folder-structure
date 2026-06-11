import type { RecurrenceRule } from "../domain/recurrence-rule";
import type { TimeSlot } from "../domain/time-slot";

export type CreateBookingRequest = {
  roomId: string;
  title: string;
  description?: string;
  requesterId: string;
  attendeeCount: number;
  timeSlot: TimeSlot;
  recurrence: RecurrenceRule;
};
