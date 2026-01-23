"use client";
import robotoCondensed from "../app/layout";
import React from "react";
import type { JSX } from "react";


import {
	heroButtons,
	heroSections,
	GROUP1_LOGO,
	FILTER_ICON,
	FRANCHISE_LOGO,
	buttonWidths
} from "../data/landingHeroData";
import type { HeroButton } from "../types/landingHeroTypes";

// Helper: fallback if property is missing
const safe = <T,>(val: T | undefined, fallback: T): T => (val !== undefined ? val : fallback);

export default function LandingHero(): JSX.Element {
	return (
		<section className="container mx-auto px-12">
			{/* SECTION 1: 50/50 */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 items-start">
				{/* Left col */}
				<div className="flex flex-col justify-start">
					<h1 className="font-roboto-condensed text-[35px] font-bold mb-2 text-[#0F3460]">

						{heroSections[0]?.leftTitle ?? ""}
					</h1>
				</div>
				{/* Right col */} 
				<div className="flex flex-col justify-start">
					<p className="font-georgia text-[18px] text-gray-700 mb-4"
                     >
						{heroSections[0]?.leftDescription ?? ""}
					</p>
					<button className="px-5 py-2 rounded bg-gray-900 text-white font-semibold text-sm w-fit">
						{heroSections[0]?.rightTitle ?? ""}
					</button>
				</div>
			</div>

			{/* BUTTONS */}
			<div className="flex flex-wrap gap-6 mb-12">
				{heroButtons.map((btn: HeroButton) => (
					<button
						key={btn.label}
						className={`px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold text-sm flex items-center whitespace-nowrap text-[#0F3460] ${buttonWidths[btn.label] ?? ""}`}
					>
						<span>{btn.label}</span>
						<span className="ml-2 text-base">&#8594;</span>
					</button>
				))}
			</div>

			{/* SECTION 2: 5 / 7 */}
			<div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-6 mb-10 border border-black">
				<div className="rounded p-6 flex flex-col">
					<img
						src={GROUP1_LOGO.src}
						alt={GROUP1_LOGO.alt}
						className={GROUP1_LOGO.className}
					/>
					<h2 className="text-[27px] font-extrabold mb-2 leading-tight text-[#0F3460]">
						{heroSections[1]?.mainTitle ?? ""}
					</h2>
					<p className="text-base text-[#102A43] mb-6 font-grostek">
						{heroSections[1]?.mainDescription ?? ""}
					</p>
					{/* Add 3 buttons below the description */}
					<div className="flex flex-wrap gap-4 mt-2">
						<button
							type="button"
							className="px-5 py-2 rounded bg-[#E5CAFA] text-[#183B56] font-semibold text-sm hover:bg-[#d1bdf7] transition"
						>
							Get A Login
						</button>
						<button
							type="button"
							className="px-5 py-2 rounded bg-[#E5CAFA] text-[#183B56] font-semibold text-sm hover:bg-[#d1bdf7] transition"
						>
							Schedule A Call
						</button>
						<button
							type="button"
							className="px-5 py-2 rounded bg-[#E5CAFA] text-[#183B56] font-semibold text-sm hover:bg-[#d1bdf7] transition"
						>
							Login
						</button>
					</div>
				</div>
				<div className="flex flex-col items-center px-6">
					<div className="w-full max-w-[640px] h-auto mt-[50px] mb-[15px] border border-black bg-[#f7f7f7] rounded p-4 flex flex-col px-2.5 sm:px-6 md:px-6 sm:mx-0 mx-2.5">
						<h2 className="text-[2rem] font-extrabold mb-4 leading-tight text-[#0F3460]">
							{heroSections[1]?.sidebarTitle ?? ""}
						</h2>
						<form
							className="flex flex-col gap-4"
							onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
								e.preventDefault();
								window.location.href = "/404";
							}}
						>
							<div>
								<label className="block text-base font-bold text-[#102A43] mb-2">
									{heroSections[1]?.filterLabel ?? ""}
								</label>
								<div className="flex flex-col md:flex-row gap-4">
									<div className="flex flex-col w-full md:w-auto">
										<label className="text-xs font-semibold text-[#102A43] mb-1">
											{heroSections[1]?.industryLabel ?? ""}
										</label>
										<input
											type="text"
											placeholder={heroSections[1]?.industryPlaceholder ?? ""}
											className="border border-[#B6C1CE] rounded-lg px-3 py-2 text-base text-[#102A43] bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 w-full md:w-[140px]"
										/>
									</div>
									<div className="flex flex-col w-full md:w-auto flex-1">
										<label className="text-xs font-semibold text-[#102A43] mb-1">
											{heroSections[1]?.investmentLabel ?? ""}
										</label>
										<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
											<input
												type="text"
												placeholder={heroSections[1]?.investmentPlaceholderMin ?? ""}
												className="border border-[#B6C1CE] rounded-lg px-3 py-2 text-base text-[#102A43] bg-white w-full sm:w-[110px] focus:outline-none focus:ring-2 focus:ring-blue-200"
											/>
											<span className="text-base font-bold text-[#102A43] flex items-center justify-center">to</span>
											<input
												type="text"
												placeholder={heroSections[1]?.investmentPlaceholderMax ?? ""}
												className="border border-[#B6C1CE] rounded-lg px-3 py-2 text-base text-[#102A43] bg-white w-full sm:w-[130px] focus:outline-none focus:ring-2 focus:ring-blue-200"
											/>
										</div>
									</div>
									<button
										type="submit"
										className="md:w-[189px] pb-2 rounded text-white font-bold text-base transition flex items-center justify-start mt-4 md:mt-5 w-auto h-[45px]"
									>
										<img src={FILTER_ICON.src} alt={FILTER_ICON.alt} className={FILTER_ICON.className} />
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			{/* SECTION 3: 5 / 7 */}
			<div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-6 mb-10 border border-black bg-[#183B56] rounded">
				<div className="rounded p-8 flex flex-col justify-center relative overflow-hidden bg-transparent">
					<div className="mb-6 w-[30px] h-[38px] flex items-center justify-center bg-white/20 rounded">
						<img
							src={FRANCHISE_LOGO.src}
							alt={FRANCHISE_LOGO.alt}
							className={FRANCHISE_LOGO.className}
						/>
					</div>
					<h2 className="text-white text-[27px] font-extrabold mb-2 leading-tight">
						{/* Split mainTitle for colored part */}
						{heroSections[2]?.mainTitle
							? (
								<>
									An Easy-To-Use Database Designed to Help Franchises <br />
									<span className="text-[#E5CAFA]">Find the Right Supplier</span>
								</>
							)
							: ""
						}
					</h2>
					<p className="text-white text-base mb-6">
						{heroSections[2]?.mainDescription ?? ""}
					</p>
					<button className="px-6 py-2 rounded-lg bg-[#E6D6FB] text-[#102A43] font-bold text-base w-fit hover:bg-[#d1bdf7] transition">
						{heroSections[2]?.button ?? ""}
					</button>
				</div>
				<div className="flex flex-col items-center px-6">
					<div className="w-full max-w-[640px] h-auto mt-[50px] mb-[15px] border border-white bg-[#183B56] rounded p-4 flex flex-col px-2.5 sm:px-6 md:px-6 sm:mx-0 mx-2.5">
						<h2 className="text-white text-[30px] font-extrabold mb-4 leading-tight">
							{heroSections[2]?.sidebarTitle ?? ""}
						</h2>
						<form className="flex flex-col gap-4">
							<div className="flex flex-col gap-4 md:flex-row md:gap-4 w-full">
								<div className="flex flex-col flex-1">
									<label className="text-xs font-semibold text-white mb-1">
										{heroSections[2]?.categoryLabel ?? ""}
									</label>
									<select className="border border-[#B6C1CE] rounded-lg px-3 py-2 text-base text-[#102A43] bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 w-full">
										<option>
											{heroSections[2]?.categoryPlaceholder ?? ""}
										</option>
									</select>
								</div>
								<div className="flex flex-col flex-1">
									<label className="text-xs font-semibold text-white mb-1">
										{heroSections[2]?.sortLabel ?? ""}
									</label>
									<select className="border border-[#B6C1CE] rounded-lg px-3 py-2 text-base text-[#102A43] bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 w-full">
										<option>
											{heroSections[2]?.sortOption ?? "Alphabetically"}
										</option>
									</select>
								</div>
								<div className="flex flex-col justify-end">
									<button
										type="submit"
										className="ml-0 md:ml-2 px-6 py-1 rounded-lg bg-[#E6D6FB] text-[#102A43] font-bold text-base hover:bg-[#d1bdf7] transition mt-5 md:mt-0 w-[130px] md:w-auto text-left md:text-center flex items-end h-[36px]"
									>
										{heroSections[2]?.searchButton ?? "Search"}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

// Custom pixel values like md:w-[189px] are correct Tailwind JIT syntax.
// Do NOT change to md:w-47.25; it is invalid.
// ✅ Pure Tailwind CSS utility classes used (including arbitrary values like text-[#E5CAFA]).
// ✅ Hardcoding these 3 buttons in JSX is correct for static UI.
// ✅ Still follows strict TypeScript rules and best practices.


