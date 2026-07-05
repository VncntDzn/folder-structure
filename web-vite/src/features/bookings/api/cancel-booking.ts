import { getBookings } from "./get-bookings";
import type { CreateBookingResponse } from "../dtos/create-booking.response";

export async function cancelBooking(
  bookingId: string,
): Promise<CreateBookingResponse> {
  const response = await getBookings();
  const booking = response.items.find((item) => item.id === bookingId);

  if (!booking) {
    throw new Error("Booking not found.");
  }

  return Promise.resolve({
    item: {
      ...booking,
      status: "cancelled",
      updatedAt: new Date().toISOString(),
    },
  });
}
