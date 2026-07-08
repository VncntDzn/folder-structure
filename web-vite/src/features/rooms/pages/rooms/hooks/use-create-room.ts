import { useState } from "react";

import { createRoom as createRoomRequest } from "../../../api/create-room";
import type { Room } from "../../../domain/room";
import type { CreateRoomPayload } from "../dtos/create-room.request";

export function useCreateRoom() {
  const [isLoading, setIsLoading] = useState(false);

  const createRoom = async (payload: CreateRoomPayload): Promise<Room> => {
    setIsLoading(true);

    try {
      const response = await createRoomRequest(payload);
      return response.item;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createRoom,
    isLoading,
  };
}
