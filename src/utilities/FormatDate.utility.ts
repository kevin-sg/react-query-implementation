import { DateTime } from "luxon";

export const FormatDate = (datetime: string) => {
  const formDateTime = DateTime.fromISO(datetime).toLocaleString();
  return formDateTime;
};
