import { useState } from "react";

import { createBooking as createBookingRequest } from "../api/create-booking";
import type { Booking } from "../domain/booking";
import type { CreateBookingRequest } from "../dtos/create-booking.request";
import { mapBookingDtoToDomain } from "../mappers/booking.mapper";

export function useCreateBooking() {
  const [isLoading, setIsLoading] = useState(false);

  const createBooking = async (
    payload: CreateBookingRequest,
  ): Promise<Booking> => {
    setIsLoading(true);

    try {
      const response = await createBookingRequest(payload);
      return mapBookingDtoToDomain(response.item);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createBooking,
    isLoading,
  };
}
