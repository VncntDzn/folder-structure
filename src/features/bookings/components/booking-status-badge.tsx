import type { BookingStatus } from "../domain/booking-status";

export type BookingStatusBadgeProps = {
  status: BookingStatus;
};

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  return <strong>Status: {status}</strong>;
}
