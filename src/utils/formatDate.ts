import { format } from "date-fns";

export function formatDate(time: number) {
  const date = new Date(time);
  return format(date, "dd/MM/yyyy HH:mm");
}
