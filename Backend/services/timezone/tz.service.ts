import { DateTime } from 'luxon';

export function toGlobalISO(eventDate: string, tz: string) {
  return DateTime.fromISO(eventDate, { zone: tz }).toUTC().toISO();
}
