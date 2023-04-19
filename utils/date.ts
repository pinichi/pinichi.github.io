import { DateTime } from "luxon";

export const toDateFormat = (from: string) => {
  return DateTime.fromISO(from).toFormat("DDDD");
};
