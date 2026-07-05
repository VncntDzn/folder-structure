import type { Room } from "../../rooms/domain/room";

export type ApprovalPolicy = {
  requiresApproval: boolean;
  reason?: string;
};

export function resolveApprovalPolicy(
  room: Room,
  attendeeCount: number,
): ApprovalPolicy {
  if (room.capacity >= 12 || attendeeCount > 10) {
    return {
      requiresApproval: true,
      reason: "Large-capacity bookings require manual approval.",
    };
  }

  return {
    requiresApproval: false,
  };
}
