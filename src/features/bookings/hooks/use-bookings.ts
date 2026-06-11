import { useEffect, useState } from "react";

import { getBookings } from "../api/get-bookings";
import type { Booking } from "../domain/booking";
import { mapBookingDtoToDomain } from "../mappers/booking.mapper";

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void getBookings().then((response) => {
      setBookings(response.items.map(mapBookingDtoToDomain));
      setIsLoading(false);
    });
  }, []);

  return {
    bookings,
    isLoading,
    setBookings,
  };
}
