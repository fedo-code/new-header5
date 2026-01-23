"use client";
import React from "react";
import { eventsCalendarSectionData } from "../data/eventsCalendarData";
import type { EventItem } from "../types/eventsCalendarTypes";

function EventRow({ event }: { event: EventItem }) {
	return (
		<div className="grid md:grid-cols-[50%_25%_25%] grid-cols-1 gap-1 md:gap-4 py-3 md:py-6 border-b last:border-b-0 pl-0 md:pl-0">
			{/* Date + Info */}
			<div className="flex items-start gap-2 md:gap-4 pl-0 md:pl-0">
				<div className="flex flex-col items-center justify-center w-[60px] min-w-[60px] h-[60px] bg-[#181C23] rounded mt-1 md:mt-0">
					<span className="text-white text-xl font-bold leading-none">{event.date.day}</span>
					<span className="text-white text-xs font-normal">{event.date.month}</span>
				</div>
				<div className="flex flex-col justify-center">
					<div className="text-black font-bold text-base leading-tight font-roboto-condensed">{event.title}</div>
					{event.subtitle && (
						<div className="text-black text-sm font-normal font-georgia">{event.subtitle}</div>
					)}
					{event.location && (
						<div className="text-gray-500 text-xs font-normal font-georgia">{event.location}</div>
					)}
					{/* Mobile only: Date/Time and CTA below event info */}
					<div className="block md:hidden">
						<div className="mt-1">
							<div className="text-black text-base font-semibold">{event.dateTime}</div>
							{event.time && (
								<div className="text-gray-500 text-xs font-normal">{event.time}</div>
							)}
						</div>
						<div className="mt-2">
							<button
								className={`w-[110px] h-[36px] px-0 py-0 rounded font-bold text-xs font-roboto-condensed ${
									event.cta === "RSVP NOW" || event.cta === "VIEW EVENT"
										? "bg-[#F33FDE] text-white hover:bg-pink-600 transition-colors"
										: "bg-white text-[#F33FDE] border border-[#F33FDE] hover:bg-[#F33FDE] hover:text-white transition-colors"
								} flex items-center justify-center`}
							>
								{event.cta}
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* Desktop only: Date/Time */}
			<div className="hidden md:flex flex-col justify-center md:pl-0 pl-[76px] mt-0 md:mt-0">
				<div className="text-black text-base font-semibold font-georgia">{event.dateTime}</div>
				{event.time && (
					<div className="text-gray-500 text-xs font-normal font-georgia">{event.time}</div>
				)}
			</div>
			{/* Desktop only: CTA */}
			<div className="hidden md:flex items-center md:items-start justify-end mt-0 md:mt-0 md:pl-0 pl-[76px]">
				<button
					className={`w-[110px] h-[36px] px-0 py-0 rounded font-bold text-xs font-roboto-condensed ${
						event.cta === "RSVP NOW" || event.cta === "VIEW EVENT"
							? "bg-[#F33FDE] text-white hover:bg-pink-600 transition-colors"
							: "bg-white text-[#F33FDE] border border-[#F33FDE] hover:bg-[#F33FDE] hover:text-white transition-colors"
					} flex items-center justify-center`}
				>
					{event.cta}
				</button>
			</div>
		</div>
	);
}

export default function EventsCalendarSection() {
	const {
		eventsCalendarHeading,
		industryEventsHeading,
		eventsCalendar,
		industryEvents,
	} = eventsCalendarSectionData;

	return (
		<div className="container mx-auto px-4 md:px-12">
			{/* Events Calendar */}
			<div className="mb-2">
				<h2 className="text-[#181C23] font-extrabold text-2xl mb-0 font-roboto-condensed">
					{eventsCalendarHeading}
				</h2>
				<div className="bg-white rounded-lg p-0 md:pl-0 md:pr-[15px] md:py-[15px] mt-0">
					{/* p-0 on mobile ensures table content aligns with header */}
					{eventsCalendar.map((event, idx) => (
						<EventRow event={event} key={idx} />
					))}
				</div>
			</div>
			{/* Industry Events */}
			<div>
				<h2 className="text-[#181C23] font-extrabold text-2xl mb-0 font-roboto-condensed">
					{industryEventsHeading}
				</h2>
				<div className="bg-white rounded-lg p-0 md:pl-0 md:pr-[15px] md:py-[15px] mt-0">
					{industryEvents.map((event, idx) => (
						<EventRow event={event} key={idx} />
					))}
				</div>
			</div>
		</div>
	);
}
