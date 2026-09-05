const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** Display stored MM/YYYY ranges without changing their underlying values. */
export function formatDateRange(value: string): string {
  return value
    .replace(
      /\b(0[1-9]|1[0-2])\/(\d{4})\b/g,
      (_, month: string, year: string) =>
        `${MONTH_NAMES[Number(month) - 1]} ${year}`,
    )
    .replace(/ - /g, " – ");
}
