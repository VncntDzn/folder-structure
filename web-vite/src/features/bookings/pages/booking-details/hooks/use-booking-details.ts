import { useEffect, useState } from "react";

import { getBookings } from "../../../api/get-bookings";
import type { Booking } from "../../../domain/booking";
import { mapBookingDtoToDomain } from "../../../mappers/booking.mapper";

export function useBookingDetails() {
  const [booking, setBooking] = useState<Booking | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void getBookings().then((response) => {
      setBooking(response.items.map(mapBookingDtoToDomain)[0]);
      setIsLoading(false);
    });
  }, []);

  return {
    booking,
    isLoading,
  };
}
