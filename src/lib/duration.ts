export type DurationParts = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getDurationParts(fromMs: number, toMs = Date.now()): DurationParts {
  const start = new Date(fromMs);
  const end = new Date(toMs);

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  let anchor = new Date(start);
  anchor.setMonth(anchor.getMonth() + months);

  if (anchor > end) {
    months -= 1;
    anchor = new Date(start);
    anchor.setMonth(anchor.getMonth() + months);
  }

  let remaining = end.getTime() - anchor.getTime();

  const days = Math.floor(remaining / 86_400_000);
  remaining -= days * 86_400_000;

  const hours = Math.floor(remaining / 3_600_000);
  remaining -= hours * 3_600_000;

  const minutes = Math.floor(remaining / 60_000);
  remaining -= minutes * 60_000;

  const seconds = Math.floor(remaining / 1000);

  return { months, days, hours, minutes, seconds };
}

function unit(value: number, singular: string) {
  return `${value} ${singular}${value === 1 ? "" : "s"}`;
}

export function formatDuration(parts: DurationParts) {
  const chunks: string[] = [];

  if (parts.months > 0) chunks.push(unit(parts.months, "month"));
  if (parts.days > 0) chunks.push(unit(parts.days, "day"));

  chunks.push(unit(parts.hours, "hour"));
  chunks.push(unit(parts.minutes, "minute"));
  chunks.push(unit(parts.seconds, "second"));

  return chunks.join(" ");
}
