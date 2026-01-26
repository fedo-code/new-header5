"use client";
import React from "react";
import { contacts, sponsorSectionContent } from "../data/sponsorContacts";

export default function SponsorSection() {
	return (
		<div className="container mx-auto px-4 md:px-12">
			<div className="bg-[#181C23] rounded-lg py-10 px-6 md:px-12 flex flex-col md:flex-row md:items-start md:justify-between">
				{/* Left Column */}
				<div className="md:w-1/2 w-full flex flex-col justify-center">
					<h2 className="text-white text-2xl md:text-3xl font-extrabold mb-2 font-roboto-condensed whitespace-pre-line">
						{sponsorSectionContent.heading}
					</h2>
					<p className="text-white text-base mb-6 max-w-xl font-georgia">
						{sponsorSectionContent.description}
					</p>
					<button className="bg-[#F33FDE] hover:bg-pink-600 transition-colors text-white font-roboto-condensed font-bold px-6 py-2 rounded text-base w-fit">
						{sponsorSectionContent.buttonLabel}
					</button>
				</div>
				{/* Right Column */}
				<div className="md:w-1/2 w-full flex flex-row md:flex-row md:justify-end md:pl-16 gap-3 mt-8 md:mt-0 md:items-start">
					{contacts.map((contact) => (
						<div className="fle x-1" key={contact.name}>
							<div className="text-white font-bold text-base font-roboto-condensed">{contact.name}</div>
							<div className="text-white text-xs font-inter">{contact.phone}</div>
							<div className="text-white text-xs font-inter">{contact.email}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
