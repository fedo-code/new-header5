export type EventItem = {
	date: { day: string; month: string };
	title: string;
	subtitle?: string;
	location?: string;
	dateTime: string;
	time?: string;
	cta: string;
};

export type EventsCalendarSectionData = {
	eventsCalendarHeading: string;
	industryEventsHeading: string;
	eventsCalendar: EventItem[];
	industryEvents: EventItem[];
};
