import { useEffect, useState } from "react";

import { createBooking as createBookingRequest } from "../../../api/create-booking";
import { getBookings } from "../../../api/get-bookings";
import type { Booking } from "../../../domain/booking";
import type { CreateBookingRequest } from "../../../dtos/create-booking.request";
import { mapBookingDtoToDomain } from "../../../mappers/booking.mapper";

export function useBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    void getBookings().then((response) => {
      setBookings(response.items.map(mapBookingDtoToDomain));
      setIsLoading(false);
    });
  }, []);

  const createBooking = async (
    payload: CreateBookingRequest,
  ): Promise<Booking> => {
    setIsCreating(true);

    try {
      const response = await createBookingRequest(payload);
      const booking = mapBookingDtoToDomain(response.item);

      setBookings((currentBookings) => [...currentBookings, booking]);

      return booking;
    } finally {
      setIsCreating(false);
    }
  };

  return {
    bookings,
    isCreating,
    isLoading,
    createBooking,
  };
}
