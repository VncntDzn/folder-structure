import { useState } from "react";

import { deleteRoom as deleteRoomRequest } from "../../../api/delete-room";

export function useDeleteRoom() {
  const [isLoading, setIsLoading] = useState(false);

  const deleteRoom = async (roomId: string): Promise<{ success: boolean }> => {
    setIsLoading(true);

    try {
      return await deleteRoomRequest(roomId);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteRoom,
    isLoading,
  };
}
