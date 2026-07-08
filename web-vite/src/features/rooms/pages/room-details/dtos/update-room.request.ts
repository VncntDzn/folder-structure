import type { RoomPermission } from "../../../domain/permission";
import type { RoomStatus } from "../../../domain/status";

export type UpdateRoomPayload = {
  name?: string;
  description?: string;
  capacity?: number;
  status?: RoomStatus;
  permissions?: RoomPermission[];
};
