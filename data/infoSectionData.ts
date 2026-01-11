import type { InfoSectionSection, InfoSectionClassType } from "../types/InfoSectionSection";

export const infoSections: Array<
	InfoSectionSection & InfoSectionClassType & {
		iconSrc: string;
		iconAlt: string;
	}
> = [
	{
		label: "Trending",
		border: "border-gray-400",
		iconSrc: "/logos/vector.png",
		iconAlt: "Trending Icon",
		text: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
		textClass: "text-gray-800 font-medium text-xs leading-5 font-sans ml-2",
		trendingClass: "text-pink-500 font-sans font-medium text-xs leading-5",
	},
	{
		label: "Latest",
		border: "border-gray-400",
		iconSrc: "/logos/vector.png",
		iconAlt: "Latest Icon",
		text: "Borem ipsum dolor sit amet, consectetur elit.",
		textClass: "text-gray-800 font-sans font-medium text-xs leading-5 ml-2",
		latestClass: "text-pink-500 font-sans font-medium text-xs leading-5",
	},
	{
		label: "Hot Topics",
		border: "border-gray-400",
		iconSrc: "/logos/vector.png",
		iconAlt: "Hot Topics Icon",
		text: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
		textClass: "text-gray-800 font-sans font-medium text-xs leading-5 ml-2",
		hotTopicsClass: "text-pink-500 font-sans font-medium text-xs leading-5 whitespace-nowrap",
	},
];
