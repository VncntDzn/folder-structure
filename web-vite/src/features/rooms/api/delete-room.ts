export async function deleteRoom(roomId: string): Promise<{ success: boolean }> {
  return Promise.resolve({ success: roomId.length > 0 });
}
