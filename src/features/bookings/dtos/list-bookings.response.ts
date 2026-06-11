import type { BookingDto } from "./create-booking.response";

export type ListBookingsResponse = {
  items: BookingDto[];
  total: number;
};
