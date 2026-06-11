import { useState } from "react";

import { updateRoom as updateRoomRequest } from "../api/update-room";
import type { UpdateRoomPayload } from "../dtos/update-room.request";
import type { Room } from "../domain/room";

export function useUpdateRoom() {
  const [isLoading, setIsLoading] = useState(false);

  const updateRoom = async (
    currentRoom: Room,
    payload: UpdateRoomPayload,
  ): Promise<Room> => {
    setIsLoading(true);

    try {
      const response = await updateRoomRequest(currentRoom, payload);
      return response.item;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateRoom,
    isLoading,
  };
}
