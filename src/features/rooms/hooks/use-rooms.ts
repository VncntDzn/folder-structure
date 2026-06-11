import { useEffect, useState } from "react";

import { getRooms } from "../api/get-rooms";
import type { Room } from "../domain/room";

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void getRooms().then((response) => {
      setRooms(response.items);
      setIsLoading(false);
    });
  }, []);

  return {
    rooms,
    isLoading,
    setRooms,
  };
}
