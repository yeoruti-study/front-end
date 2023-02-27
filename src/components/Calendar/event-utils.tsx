import { EventInput } from '@fullcalendar/core';
import dummy from './dummy.json';

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = dummy.data.map(s => ({...s, start: s.startDate, end: s.endDate }));

export function createEventId() {
  return String(eventGuid++);
}