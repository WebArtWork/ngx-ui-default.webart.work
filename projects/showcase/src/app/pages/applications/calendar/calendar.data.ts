export interface CalendarEvent {
	date: string; // ISO yyyy-mm-dd, used to match against the selected day
	time: string;
	title: string;
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
	{ date: '2026-08-25', time: '09:00', title: 'Standup' },
	{ date: '2026-08-25', time: '13:30', title: 'Design review — Website Redesign' },
	{ date: '2026-08-26', time: '11:00', title: 'Client call — Globex' },
	{ date: '2026-08-27', time: '15:00', title: 'Sprint planning' },
];
