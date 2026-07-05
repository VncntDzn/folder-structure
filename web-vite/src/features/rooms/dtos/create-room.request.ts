import type { RoomPermission } from "../domain/permission";

export type CreateRoomPayload = {
  name: string;
  description?: string;
  capacity: number;
  permissions: RoomPermission[];
};
