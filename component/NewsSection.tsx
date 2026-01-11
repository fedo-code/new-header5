import Image from "next/image";
import { newsTabs, newsCards, newsSectionHeading } from "../data/newsSectionData";
import type { NewsCard, LayoutType } from "../types/newsSectionTypes";

// Helper functions to map layout properties to Tailwind classes
function getTabClasses(layout?: LayoutType): string {
	const widthClass = layout?.width ? `w-[${layout.width}px]` : "";
	const heightClass = layout?.height ? `h-[${layout.height}px` : "";
	const fontSizeClass = layout?.fontSize ? `text-[${layout.fontSize}px]` : "text-sm";
	return `bg-blue-100 text-slate-800 font-semibold flex items-center justify-center rounded ${widthClass} ${heightClass} ${fontSizeClass}`;
}

function getAuthorNameClasses(layout?: LayoutType): string {
	const fontSizeClass = layout?.fontSize ? `text-[${layout.fontSize}px]` : "text-xs";
	const fontWeightClass = layout?.fontWeight === 600 ? "font-semibold" : "";
	const colorClass = layout?.color ? "" : "text-slate-800";
	return `${fontSizeClass} ${fontWeightClass} ${colorClass}`;
}

function getTitleClasses(layout?: LayoutType): string {
	let fontFamilyClass = "font-sans";
	if (layout?.fontFamily) {
		if (layout.fontFamily.includes("Georgia")) fontFamilyClass = "font-serif";
		else if (layout.fontFamily.includes("Helvetica")) fontFamilyClass = "font-helvetica";
	}
	const fontSizeClass = layout?.fontSize ? `text-[${layout.fontSize}px]` : "text-xl";
	const fontWeightClass =
		layout?.fontWeight === 700 ? "font-bold" :
		layout?.fontWeight === 600 ? "font-semibold" :
		layout?.fontWeight === 400 ? "font-normal" : "";
	const lineHeightClass = layout?.lineHeight ? `leading-[${layout.lineHeight}]` : "";
	const letterSpacingClass = layout?.letterSpacing ? `tracking-[${layout.letterSpacing}]` : "";
	const colorClass = layout?.color ? `text-[${layout.color}]` : "text-gray-800";

	return [
		"mb-2",
		fontSizeClass,
		fontWeightClass,
		lineHeightClass,
		colorClass,
		fontFamilyClass,
		letterSpacingClass,
	].join(" ");
}

function getDescriptionClasses(layout?: LayoutType): string {
	const fontSizeClass = layout?.fontSize ? `text-[${layout.fontSize}px]` : "text-sm";
	const fontWeightClass = layout?.fontWeight === 400 ? "font-normal" : "";
	const lineHeightClass = layout?.lineHeight === "140%" ? "leading-relaxed" : "";
	const colorClass = layout?.color ? "" : "text-gray-700";
	const fontFamilyClass = "font-serif";
	const letterSpacingClass = layout?.letterSpacing === "0%" ? "tracking-normal" : "";
	return `mb-3 ${fontSizeClass} ${fontWeightClass} ${lineHeightClass} ${colorClass} ${fontFamilyClass} ${letterSpacingClass}`;
}

export default function NewsSection() {
	return (
		<section className="container mx-auto px-12">
			<h2 className="text-2xl font-bold text-slate-800 mb-4">{newsSectionHeading}</h2>
			<div className="flex space-x-6 border-b mb-6 overflow-x-auto">
				{newsTabs.map((tab) => (
					<button
						key={tab}
						className="pb-2 text-base font-semibold text-slate-800 border-b-2 border-transparent hover:border-slate-800 transition whitespace-nowrap"
					>
						{tab}
					</button>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch pb-6">
				{newsCards.map((card, idx) => (
					<div
						key={idx}
						className="bg-white rounded shadow flex flex-col h-full"
					>
						<div className="mb-3">
							<Image
								src={card.image}
								alt={card.title}
								width={card.imageLayout?.width ?? 410}
								height={card.imageLayout?.height ?? 231}
								className="rounded w-full object-cover"
							/>
						</div>
						<div className="flex items-center mb-2 flex-wrap gap-2">
							<span className={getTabClasses(card.tabLayout)}>
								{card.tab}
							</span>
							<div className="flex items-center ml-auto">
								<span className="text-xs text-gray-500">{card.date}</span>
								<span className="text-xs text-gray-500 ml-2">{card.time}</span>
							</div>
						</div>
						<h3 className={getTitleClasses(card.titleLayout)}>
							{card.title}
						</h3>
						<p className={getDescriptionClasses(card.descriptionLayout)}>
							{card.description}
						</p>
						<div className="flex items-center space-x-2 mt-auto pt-6">
							<Image
								src={card.authorImage}
								alt={card.author}
								width={card.authorImageLayout?.width ?? 28}
								height={card.authorImageLayout?.height ?? 28}
								className="object-cover flex-shrink-0 rounded"
							/>
							<div>
								<div className={getAuthorNameClasses(card.authorNameLayout)}>
									{card.author}
								</div>
								<div className="text-xs text-gray-500">{card.role}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
