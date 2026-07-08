import { useEffect, useState } from "react";

import { getBookings } from "../../../api/get-bookings";
import type { Booking } from "../../../domain/booking";
import { mapBookingDtoToDomain } from "../../../mappers/booking.mapper";

export function useEditBooking() {
  const [booking, setBooking] = useState<Booking | undefined>(undefined);

  useEffect(() => {
    void getBookings().then((response) => {
      setBooking(response.items.map(mapBookingDtoToDomain)[0]);
    });
  }, []);

  return {
    booking,
  };
}
