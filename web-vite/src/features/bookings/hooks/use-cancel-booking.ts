import { useState } from "react";

import { cancelBooking as cancelBookingRequest } from "../api/cancel-booking";
import type { Booking } from "../domain/booking";
import { mapBookingDtoToDomain } from "../mappers/booking.mapper";

export function useCancelBooking() {
  const [isLoading, setIsLoading] = useState(false);

  const cancelBooking = async (bookingId: string): Promise<Booking> => {
    setIsLoading(true);

    try {
      const response = await cancelBookingRequest(bookingId);
      return mapBookingDtoToDomain(response.item);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    cancelBooking,
    isLoading,
  };
}
