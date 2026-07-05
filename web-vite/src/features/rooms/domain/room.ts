import type { RoomPermission } from "./permission";
import type { RoomStatus } from "./status";

export type Room = {
  id: string;
  name: string;
  description?: string;
  capacity: number;
  status: RoomStatus;
  permissions: RoomPermission[];
  createdAt: string;
  updatedAt: string;
};
