import type { FormEvent } from "react";

import { Button, Input } from "../../../common/components";
import type { CreateBookingRequest } from "../dtos/create-booking.request";

export type BookingFormProps = {
  onSubmit?: (payload: CreateBookingRequest) => void | Promise<void>;
  isLoading?: boolean;
};

export function BookingForm({
  onSubmit,
  isLoading = false,
}: BookingFormProps) {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await onSubmit?.({
      roomId: "room-2",
      title: "Cross-team Planning Session",
      description: "Demonstrates approval and availability checks.",
      requesterId: "user-3",
      attendeeCount: 12,
      timeSlot: {
        startAt: "2026-06-12T05:00:00.000Z",
        endAt: "2026-06-12T06:30:00.000Z",
      },
      recurrence: {
        frequency: "none",
        interval: 1,
      },
    });
  };

  return (
    <form onSubmit={(event) => void handleSubmit(event)}>
      <Input id="booking-title" label="Title" name="title" />
      <Input id="booking-room" label="Room ID" name="roomId" />
      <Input
        id="booking-attendees"
        label="Attendee count"
        name="attendeeCount"
        type="number"
      />
      <Button isLoading={isLoading} type="submit">
        Save Booking
      </Button>
    </form>
  );
}
