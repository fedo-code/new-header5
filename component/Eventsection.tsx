"use client";
import React from "react";
import Header from "./Header";
import { eventSectionData } from "../data/eventSectionData";
import type { EventSectionData } from "../types/eventSectionTypes";

interface EventsectionProps {
	showHeader?: boolean;
}

export default function Eventsection({ showHeader = true }: EventsectionProps) {
	const data: EventSectionData = eventSectionData;
	return (
		<>
			{showHeader && <Header />}
			<section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
				{/* 16:9 Aspect Ratio Container */}
				<div className="relative w-full aspect-[16/9]">
					<img
						src={data.bgImage}
						alt={data.bgAlt}
						className="absolute inset-0 w-full h-full object-cover z-0"
					/>
					{/* Gradient overlay for mobile readability */}
					<div className="absolute inset-0 z-10 md:hidden bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
					{/* Content absolutely at bottom, always */}
					<div className="absolute bottom-0 left-0 right-0 z-20 w-full px-4 pb-6 md:px-12 md:pb-12 max-w-[1440px] mx-auto">
						<div className="max-w-3xl">
							<hr className="border-t border-white/60 mb-4" />
							<h2 className="text-white text-2xl md:text-3xl font-extrabold mb-2 leading-tight font-roboto-condensed">
								{data.title}
							</h2>
							<p className="text-white text-sm md:text-base font-normal font-georgia">
								{data.subtitle}
							</p>
							{data.buttonLabel && (
								<button className="bg-[#F33FDE] hover:bg-pink-600 transition-colors text-white font-roboto-condensed font-bold px-6 py-2 rounded text-base w-fit mt-4">
									{data.buttonLabel}
								</button>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
