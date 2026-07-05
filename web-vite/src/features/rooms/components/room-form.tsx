import type { FormEvent } from "react";

import { Button, Input } from "../../../common/components";
import type { CreateRoomPayload } from "../dtos/create-room.request";

export type RoomFormProps = {
  onSubmit?: (payload: CreateRoomPayload) => void | Promise<void>;
  isLoading?: boolean;
};

export function RoomForm({
  onSubmit,
  isLoading = false,
}: RoomFormProps) {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await onSubmit?.({
      name: "New Room",
      description: "Starter room",
      capacity: 4,
      permissions: ["read"],
    });
  };

  return (
    <form onSubmit={(event) => void handleSubmit(event)}>
      <Input id="room-name" label="Room name" name="name" />
      <Input id="room-capacity" label="Capacity" name="capacity" type="number" />
      <Button isLoading={isLoading} type="submit">
        Save Room
      </Button>
    </form>
  );
}
