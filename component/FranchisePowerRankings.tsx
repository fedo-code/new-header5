// This file will contain the Franchise Power Rankings component.
// Implementation to be added.

import React from "react";
import {
	contentCards,
	sidebarHeading,
	hottestFranchisesSection,
	growthClubSection,
	sidebarIcons,
	FRANCHISE_GRID_COLS, // import the grid class
} from "../data/franchisePowerRankingsData";
import type { ContentCard } from "../types/franchisePowerRankingsTypes";

export default function FranchisePowerRankings() {
	return (
		<section className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
			<div className={FRANCHISE_GRID_COLS}>
				{/* Left section (80%) */}
				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
						{contentCards.map((card: ContentCard, idx: number) => (
							<div
								key={idx}
								className="bg-white rounded-2xl flex flex-col items-center mx-auto w-full sm:w-full md:w-auto"
							>
								<div
									className="flex flex-col items-start"
									style={{ width: card.contentWidth }}
								>
									<span className="text-xs font-bold text-pink-600 mb-2 tracking-wide w-fit">
										{card.label}
									</span>
									<div className="w-full aspect-[16/9] mb-4">
										<img
											src={card.img}
											alt={card.label}
											className="object-cover rounded-xl w-full h-full"
											loading="lazy"
										/>
									</div>
									<h3 className="text-base font-bold text-gray-900 mb-2.5 text-left w-full">
										{card.title}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Right sidebar (20%) */}
				<div className="flex flex-col h-full min-h-full">
					<h2 className={sidebarIcons.sidebarHeadingClass}>
						{sidebarHeading}
					</h2>
					<div
						className={sidebarIcons.sidebarBoxClass}
						style={{ backgroundImage: `url('${sidebarIcons.bg}')` }}
					>
						<div className="relative z-10">
							{/* Hottest Franchises Header */}
							<div className={sidebarIcons.hottestHeaderClass}>
								<img
									src={sidebarIcons.hottestIcon}
									alt="Icon"
									className={sidebarIcons.hottestIconClass}
								/>
								{hottestFranchisesSection.icon && (
									<span className="text-pink-500 text-lg hidden">{hottestFranchisesSection.icon}</span>
								)}
								<h3 className={sidebarIcons.hottestTitleClass}>{hottestFranchisesSection.title}</h3>
							</div>
							{/* Hottest Franchises List */}
							<div className={sidebarIcons.listClass}>
								{hottestFranchisesSection.items.map((item, i: number) => (
									<div key={item.rank} className={sidebarIcons.listItemClass}>
										<span className={sidebarIcons.rankClass}>#{item.rank}</span>
										<div className={sidebarIcons.logoPlaceholderClass}></div>
										<div className="leading-tight">
											<p className={sidebarIcons.brandClass}>{item.brand}</p>
											<span className={sidebarIcons.newsroomClass}>Visit Newsroom ›</span>
										</div>
									</div>
								))}
							</div>
							{/* Hottest Franchises Buttons */}
							<div className={sidebarIcons.buttonGroupClass}>
								<button
									className={sidebarIcons.seeAllBtnClass}
									type="button"
								>
									<img
										src={sidebarIcons.seeAll}
										alt="See All"
										className={sidebarIcons.seeAllImgClass}
									/>
								</button>
								<button
									className={sidebarIcons.getBrandBtnClass}
									type="button"
								>
									<img
										src={sidebarIcons.getBrand}
										alt="Get a Brand Page"
										className={sidebarIcons.getBrandImgClass}
									/>
								</button>
							</div>
							{/* Top 5 Growth Club Brands Header */}
							<div className={sidebarIcons.growthHeaderClass}>
								<img
									src={sidebarIcons.growthClub}
									alt="Top 5 Growth Club Brands"
									className={sidebarIcons.growthClubImgClass}
									style={{ height: "24px", width: "64px" }}
								/>
								<h3 className={sidebarIcons.growthTitleClass}>{growthClubSection.title}</h3>
							</div>
							{/* Top 5 Growth Club Brands List */}
							<div className={sidebarIcons.growthListClass}>
								{growthClubSection.items.map((item, i: number) => (
									<div key={item.rank} className={sidebarIcons.listItemClass}>
										<span className={sidebarIcons.rankClass}>#{item.rank}</span>
										<div className={sidebarIcons.logoPlaceholderClass}></div>
										<div className="leading-tight">
											<p className={sidebarIcons.brandClass}>{item.brand}</p>
											<span className={sidebarIcons.newsroomClass}>Visit Newsroom ›</span>
										</div>
									</div>
								))}
							</div>
							{/* Top 5 Growth Club Brands Buttons */}
							<div className={sidebarIcons.buttonGroupClass}>
								<button
									className={sidebarIcons.seeAllBtnClass}
									type="button"
								>
									<img
										src={sidebarIcons.seeAll}
										alt="See All"
										className={sidebarIcons.seeAllImgClass}
									/>
								</button>
								<button
									className={sidebarIcons.getProfileBtnClass}
									type="button"
								>
									<img
										src={sidebarIcons.getProfile}
										alt="Get a Profile"
										className={sidebarIcons.getProfileImgClass}
									/>
								</button>
							</div>
						</div>
						<div className="absolute inset-0 bg-[#0c1b22] opacity-80 z-0"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
