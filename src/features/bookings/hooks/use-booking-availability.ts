import { useState } from "react";

import { getBookingAvailability } from "../api/get-booking-availability";
import type { TimeSlot } from "../domain/time-slot";
import type { AvailabilityResponse } from "../dtos/availability.response";

export function useBookingAvailability() {
  const [availability, setAvailability] = useState<AvailabilityResponse | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  const checkAvailability = async (roomId: string, timeSlot: TimeSlot) => {
    setIsLoading(true);

    try {
      const response = await getBookingAvailability(roomId, timeSlot);
      setAvailability(response);
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    availability,
    isLoading,
    checkAvailability,
  };
}
