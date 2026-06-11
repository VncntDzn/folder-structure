import { createRoom } from "../api/create-room";
import { deleteRoom } from "../api/delete-room";
import { updateRoom } from "../api/update-room";

async function runRoomWorkflowExamples() {
  const created = await createRoom({
    name: "Focus Room",
    description: "Quiet space for one-on-ones.",
    capacity: 4,
    permissions: ["read", "write"],
  });

  if (created.item.status !== "available") {
    throw new Error("Expected newly created rooms to default to available.");
  }

  const updated = await updateRoom(created.item, {
    status: "maintenance",
  });

  if (updated.item.status !== "maintenance") {
    throw new Error("Expected room updates to merge the next status.");
  }

  const deleted = await deleteRoom(created.item.id);

  if (!deleted.success) {
    throw new Error("Expected room deletion to report success for a valid id.");
  }
}

void runRoomWorkflowExamples();
