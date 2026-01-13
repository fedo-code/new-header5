import type { HeroSection, HeroButton, HeroImageAsset } from "../types/landingHeroTypes";
import { SortOption } from "../types/landingHeroTypes";

// Button widths
export const buttonWidths: Record<string, string> = {
	Guides: "w-[133px]",
	"Growth Club": "w-[133px]",
	"Franchise Supplier Search": "w-[232px]",
	Events: "w-[133px]",
	Podcast: "w-[133px]",
	"Franchise Club": "w-[181px]",
	"Podcasts": "w-[133px]",
	"FRANCHISE STUDIO": "w-[181px]",
};

// Image assets
export const GROUP1_LOGO: HeroImageAsset = {
	src: "/logos/Group 1.png",
	alt: "Growth Club Logo",
	className: "mb-4 w-[119px] h-[40px] object-contain",
};

export const FILTER_ICON: HeroImageAsset = {
	src: "/logos/filter.png",
	alt: "Apply Filter",
	className: "w-[150px] h-[40px] flex items-center justify-center",
};

export const FRANCHISE_LOGO: HeroImageAsset = {
	src: "/logos/1851 Franchise Logo.png",
	alt: "1851 Franchise Logo",
	className: "w-[30px] h-[38px] object-contain",
};

export const heroButtons: HeroButton[] = [
	{ label: "Guides" },
	{ label: "Growth Club" },
	{ label: "Franchise Supplier Search" },
	{ label: "Events" },
	{ label: "Podcasts" },
	{ label: "FRANCHISE STUDIO" }
];

export const heroSections: HeroSection[] = [
	{
		leftTitle: "Discover how 1851 helps franchisors, franchisees, and franchise suppliers WIN at Franchising",
		leftDescription: "1851 is part educational franchise magazine; part content marketing solution and part franchise sales support.",
		rightTitle: "Learn more"
	},
	{
		leftTitle: "",
		leftDescription: "",
		rightTitle: "",
		mainTitle: "Buying A Franchise is Tough. We Make It Easier.",
		mainDescription: "Finding the right franchise has never been easier. Growth Club is here to help.",
		sidebarTitle: "Find A Franchise Opportunity",
		filterLabel: "Filter",
		industryLabel: "Industry",
		industryPlaceholder: "Lawn Care",
		investmentLabel: "Investment Range",
		investmentPlaceholderMin: "$1,000",
		investmentPlaceholderMax: "$100,000"
	},
	{
		leftTitle: "",
		leftDescription: "",
		rightTitle: "",
		mainTitle: "An Easy-To-Use Database Designed to Help Franchises Find the Right Supplier",
		mainDescription: "Browse and claim your franchise profile.",
		sidebarTitle: "Find A Franchise Supplier to Help Your Franchise",
		categoryLabel: "Category",
		categoryPlaceholder: "Lawn Care",
		sortLabel: "Sort By",
		sortOption: SortOption.Alphabetically,
		searchButton: "Search",
		button: "Claim Your Profile"
	}
];

// 1. No changes required for the new buttons, as they are not sourced from data.
// 2. All hero section data and button configs remain in sync with the types and component.

