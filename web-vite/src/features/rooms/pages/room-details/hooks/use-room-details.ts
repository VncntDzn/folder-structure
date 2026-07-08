import { useEffect, useState } from "react";

import { getRooms } from "../../../api/get-rooms";
import type { Room } from "../../../domain/room";

export function useRoomDetails() {
  const [room, setRoom] = useState<Room | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void getRooms().then((response) => {
      setRoom(response.items[0]);
      setIsLoading(false);
    });
  }, []);

  return {
    room,
    isLoading,
  };
}
