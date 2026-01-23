export type ContentCard = {
	label: string;
	title: string;
	img: string;
	imgWidth?: number; // added
	imgHeight?: number; // added
	contentWidth?: number; // added for controlling text width
	aspectRatio?: string; // added for Tailwind aspect ratio
};

export type SidebarHeader = {
	title: string;
	img: string;
};

export type SidebarListItem = {
	rank: number;
	brand: string;
	logo: string;
	newsroomUrl: string;
};

export type SidebarButton = {
	label: string;
	variant: "primary" | "outline";
};

export type SidebarSection = {
	title: string;
	icon?: string;
	items: SidebarListItem[];
	buttons: SidebarButton[];
};

// For sidebarIcons object (optional, for strict typing)
export type SidebarIcons = {
	hottestIcon: string;
	seeAll: string;
	getBrand: string;
	getProfile: string;
	growthClub: string;
	bg: string;
	sidebarHeadingClass: string;
	sidebarBoxClass: string;
	hottestHeaderClass: string;
	hottestIconClass: string;
	hottestTitleClass: string;
	listClass: string;
	listItemClass: string;
	rankClass: string;
	logoPlaceholderClass: string;
	brandClass: string;
	newsroomClass: string;
	buttonGroupClass: string;
	seeAllBtnClass: string;
	seeAllImgClass: string;
	getBrandBtnClass: string;
	getBrandImgClass: string;
	growthHeaderClass: string;
	growthClubImgClass: string;
	growthTitleClass: string;
	growthListClass: string;
	getProfileBtnClass: string;
	getProfileImgClass: string;
};
