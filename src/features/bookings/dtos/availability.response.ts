import type { TimeSlot } from "../domain/time-slot";
import type { BookingConflict } from "./create-booking.response";

export type AvailabilityResponse = {
  roomId: string;
  requestedTimeSlot: TimeSlot;
  isAvailable: boolean;
  conflicts: BookingConflict[];
};
