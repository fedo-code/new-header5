import {
	ContentCard,
	SidebarSection,
	SidebarHeader,
	SidebarIcons,
	SidebarListItem,
	SidebarButton,
} from "../types/franchisePowerRankingsTypes";

export const CARD_IMG_WIDTH = 256;
export const CARD_IMG_HEIGHT = 144;
export const CARD_CONTENT_WIDTH = 256; // added for text width

export const contentCards: ContentCard[] = [
	{
		label: "FRESHCOAT PAINTERS",
		title: "What Every Franchisee Should Know About Expanding Into the Commercial Industry With Fresh Coat Painters",
		img: "/placeholder/painters.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "BUY",
		title: "The Best Types of Franchises To Buy in College Towns",
		img: "/placeholder/buy.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "GROW",
		title: "The Ultimate Guide To Franchising Your Business – Phase 1: Laying the Foundation – How to Create an Operations Manual",
		img: "/placeholder/grow.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "BUY",
		title: "The Top 15 Mobile and In-Home Pet Care Franchises for 2025",
		img: "/placeholder/buy1.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "LAYNE'S CHICKEN FINGERS",
		title: "Doing Your Homework: How to Perform Due Diligence Before Becoming a Layne’s Franchisee",
		img: "/placeholder/layners.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "FRANCHISEE FEATURE",
		title: "How This Franchisee of 35 Years Is Building a Family Legacy Through Papa Murphy’s",
		img: "/placeholder/feature.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "PARIS BAGUETTE",
		title: "Paris Baguette Expands With Over 225 New Cafés Awarded, Almost 60 New Openings at Q3 Close",
		img: "/placeholder/paris.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "BUY",
		title: "How To Buy a Franchise With No Money Down: Is It Possible?",
		img: "/placeholder/buy3.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "GROW",
		title: "The Ultimate Guide To Franchising Your Business: How To Build a Scalable, Sustainable Franchise Brand",
		img: "/placeholder/grow (2).png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "BUY",
		title: "Franchise Agreement Red Flags First-Time Buyers Should Watch For",
		img: "/placeholder/buy4.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "GROW",
		title: "The Emerging Franchisor’s Playbook: What Founders Can Learn From The Garage Floor Company’s Growth Journey",
		img: "/placeholder/grow3.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
	{
		label: "FRANCHISEE FEATURE",
		title: "Former Finance Executive Finds Fulfillment in Caring for Others Through Right at Home",
		img: "/placeholder/feature2.png",
		imgWidth: CARD_IMG_WIDTH,
		imgHeight: CARD_IMG_HEIGHT,
		contentWidth: CARD_CONTENT_WIDTH,
		aspectRatio: "aspect-[16/9]",
	},
];

export const sidebarHeader: SidebarHeader = {
	title: "Franchise Power Rankings",
	img: "/logos/hottest Franchises.png",
};

export const sidebarHeading: string = "Franchise Power Rankings";

export const hottestFranchisesSection: SidebarSection = {
	title: "Hottest Franchises",
	
	icon: "🔥",
	items: Array.from({ length: 10 }).map((_, i) => ({
		rank: i + 1,
		brand: "Brand Name",
		logo: "/logo-placeholder.png",
		newsroomUrl: "#",
	})),
	buttons: [
		{ label: "SEE ALL", variant: "primary" },
		{ label: "GET A BRAND PAGE", variant: "outline" },
	],
};

export const growthClubSection: SidebarSection = {
	title: "Top 5 Growth Club Brands",
	items: Array.from({ length: 5 }).map((_, i) => ({
		rank: i + 1,
		brand: "Brand Name",
		logo: "/logo-placeholder.png",
		newsroomUrl: "#",
	})),
	buttons: [
		{ label: "SEE ALL", variant: "primary" },
		{ label: "GET A PROFILE", variant: "outline" },
	],
};

export const sidebarIcons: SidebarIcons = {
	hottestIcon: "/logos/vector (2).png",
	seeAll: "/logos/seeall.png",
	getBrand: "/logos/getbrand.png",
	getProfile: "/logos/getprofile.png",
	growthClub: "/logos/group 1525.png",
	bg: "/logos/bg.png",
	sidebarHeadingClass: "text-[1.5625rem] font-bold text-black mb-4 px-2 pt-2 pb-2 bg-white",
	sidebarBoxClass: "rounded-2xl bg-[#0c1b22] bg-cover bg-center bg-no-repeat p-5 text-white h-full flex flex-col justify-between relative overflow-hidden",
	hottestHeaderClass: "mb-5 flex items-center gap-2",
	hottestIconClass: "h-6 w-6 object-contain",
	hottestTitleClass: "text-lg font-semibold",
	listClass: "space-y-4",
	listItemClass: "flex items-center gap-3 border-b border-white/10 pb-3",
	rankClass: "w-8 text-xl font-bold text-white/80",
	logoPlaceholderClass: "h-10 w-10 shrink-0 rounded bg-white",
	brandClass: "font-medium",
	newsroomClass: "text-sm text-white/60",
	buttonGroupClass: "mt-6 flex gap-3",
	seeAllBtnClass: "rounded-full bg-transparent px-0 py-0 flex items-center cursor-pointer",
	seeAllImgClass: "h-8 w-auto",
	getBrandBtnClass: "rounded-full bg-transparent px-0 py-0 flex items-center cursor-pointer border border-cyan-400",
	getBrandImgClass: "h-8 w-auto",
	growthHeaderClass: "mt-8 flex items-center gap-2",
	growthClubImgClass: "h-6 w-16",
	growthTitleClass: "text-lg font-semibold",
	growthListClass: "space-y-4 mt-4",
	getProfileBtnClass: "rounded-full bg-transparent px-0 py-0 flex items-center cursor-pointer border border-cyan-400",
	getProfileImgClass: "h-8 w-auto",
};

export const FRANCHISE_GRID_COLS =
  "grid grid-cols-1 2xl:grid-cols-[3fr_1fr] gap-8 h-full";
