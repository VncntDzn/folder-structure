export type RecurrenceFrequency = "none" | "daily" | "weekly" | "monthly";

export type RecurrenceRule = {
  frequency: RecurrenceFrequency;
  interval: number;
  count?: number;
  until?: string;
};
