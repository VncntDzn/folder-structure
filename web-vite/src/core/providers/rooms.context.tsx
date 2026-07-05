import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import type { Room } from "../../features/rooms/domain/room";

export type RoomsContextValue = {
  rooms: Room[];
  setRooms: (value: Room[]) => void;
  clearRooms: () => void;
};

const RoomsContext = createContext<RoomsContextValue | undefined>(undefined);

export function RoomsProvider({ children }: PropsWithChildren) {
  const [rooms, setRooms] = useState<Room[]>([]);

  const value = useMemo<RoomsContextValue>(
    () => ({
      rooms,
      setRooms,
      clearRooms: () => setRooms([]),
    }),
    [rooms],
  );

  return (
    <RoomsContext.Provider value={value}>{children}</RoomsContext.Provider>
  );
}

export function useRoomsContext() {
  const context = useContext(RoomsContext);

  if (!context) {
    throw new Error("useRoomsContext must be used inside RoomsProvider.");
  }

  return context;
}
