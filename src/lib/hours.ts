import type { OpeningHours, Weekday } from "@/types/site";

const DISPLAY_DAYS: Weekday[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** "16:30" -> "4:30 PM" */
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

/** One row per display day, "Closed" when the day has no open window. */
export function formatOpeningHours(openingHours: readonly OpeningHours[], days: readonly Weekday[] = DISPLAY_DAYS) {
  return days.map((day) => {
    const window = openingHours.find((entry) => entry.dayOfWeek === day);
    return {
      day,
      hours: window ? `${formatTime(window.opens)} - ${formatTime(window.closes)}` : "Closed",
    };
  });
}
