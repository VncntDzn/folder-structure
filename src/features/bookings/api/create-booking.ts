import { getRooms } from "../../rooms/api/get-rooms";
import { getInitialBookingStatus, hasBookingConflict } from "../domain/booking-rules";
import type { CreateBookingRequest } from "../dtos/create-booking.request";
import type { CreateBookingResponse } from "../dtos/create-booking.response";
import { getBookings } from "./get-bookings";
import { mapBookingDtoToDomain } from "../mappers/booking.mapper";
import { resolveApprovalPolicy } from "../domain/approval-policy";

export async function createBooking(
  payload: CreateBookingRequest,
): Promise<CreateBookingResponse> {
  const roomsResponse = await getRooms();
  const room = roomsResponse.items.find((item) => item.id === payload.roomId);

  if (!room) {
    throw new Error("Room not found.");
  }

  const bookingsResponse = await getBookings();
  const existingBookings = bookingsResponse.items.map(mapBookingDtoToDomain);

  if (hasBookingConflict(room.id, payload.timeSlot, existingBookings)) {
    throw new Error("Booking time slot conflicts with an existing reservation.");
  }

  const approvalPolicy = resolveApprovalPolicy(room, payload.attendeeCount);
  const now = new Date().toISOString();

  return Promise.resolve({
    item: {
      id: crypto.randomUUID(),
      roomId: payload.roomId,
      title: payload.title,
      description: payload.description,
      requesterId: payload.requesterId,
      attendeeCount: payload.attendeeCount,
      startAt: payload.timeSlot.startAt,
      endAt: payload.timeSlot.endAt,
      recurrence: payload.recurrence,
      status: getInitialBookingStatus(room, payload.attendeeCount),
      approvalReason: approvalPolicy.reason,
      createdAt: now,
      updatedAt: now,
    },
  });
}
