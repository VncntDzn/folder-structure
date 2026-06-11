import type { Booking } from "../domain/booking";
import type { BookingDto } from "../dtos/create-booking.response";

export function mapBookingDtoToDomain(dto: BookingDto): Booking {
  return {
    id: dto.id,
    roomId: dto.roomId,
    title: dto.title,
    description: dto.description,
    requesterId: dto.requesterId,
    attendeeCount: dto.attendeeCount,
    timeSlot: {
      startAt: dto.startAt,
      endAt: dto.endAt,
    },
    recurrence: dto.recurrence,
    status: dto.status,
    approvalReason: dto.approvalReason,
    createdAt: dto.createdAt,
    updatedAt: dto.updatedAt,
  };
}
