export type TimeSlot = {
  startAt: string;
  endAt: string;
};

export function overlaps(first: TimeSlot, second: TimeSlot) {
  const firstStart = new Date(first.startAt).getTime();
  const firstEnd = new Date(first.endAt).getTime();
  const secondStart = new Date(second.startAt).getTime();
  const secondEnd = new Date(second.endAt).getTime();

  return firstStart < secondEnd && secondStart < firstEnd;
}

export function isValidTimeSlot(slot: TimeSlot) {
  return new Date(slot.startAt).getTime() < new Date(slot.endAt).getTime();
}
