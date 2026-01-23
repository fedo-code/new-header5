"use client";
import React from "react";
import { francampSectionData } from "../data/francampSectionData";

export default function FrancampSection() {
	const { leftLogo, heading, description, date, buttonLabel, rightImage } = francampSectionData;
	return (
		<div className="container mx-auto px-4 md:px-12">
			<div className="bg-[#181C23] rounded-lg overflow-hidden flex flex-col md:flex-row w-full min-h-[400px]">
				{/* Left Column */}
				<div className="md:w-1/2 w-full flex flex-col justify-center px-8 py-10 flex-1">
					{/* Logo Placeholder */}
					<div className="mb-6">
						<div className="rounded flex items-center justify-center overflow-hidden w-[84px] h-[106px] min-w-[84px] min-h-[106px] max-w-[84px] max-h-[106px]">
							<img
								src={leftLogo.src}
								alt={leftLogo.alt}
								className="object-contain w-[84px] h-[106px] min-w-[84px] min-h-[106px] max-w-[84px] max-h-[106px]"
							/>
						</div>
					</div>
					<h2 className="text-white text-3xl font-extrabold mb-3 leading-tight font-roboto-condensed">
						{heading}
					</h2>
					<p className="text-white text-base mb-4 font-georgia">
						{description}
					</p>
					<p className="text-white text-xs font-bold mb-6 font-roboto-condensed">
						{date}
					</p>
					<button className="bg-[#F33FDE] hover:bg-pink-600 transition-colors text-white font-roboto-condensed font-bold px-6 py-2 rounded text-base w-fit">
						{buttonLabel}
					</button>
				</div>
				{/* Right Column */}
				<div className="md:w-1/2 w-full flex items-stretch bg-white flex-1">
					<div className="flex-1 flex items-stretch">
						<div className="aspect-square w-full h-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
							<img
								src={rightImage.src}
								alt={rightImage.alt}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
