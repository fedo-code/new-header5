export type DropdownLink = {
	label: string;
	href: string;
	icon: string; // image src for left icon
	width?: number;
	height?: number;
};

export type DropdownRightImage = {
	src: string;
	alt: string;
};

export const dropdownLinks: DropdownLink[] = [
	{
		label: "Events",
		href: "/1851-services/events",
		icon: "/1851dropdown/eventlogo.png",
		width: 14,
		height: 15,
	},
	{
		label: "Website Builder",
		href: "/1851-services/website-builder",
		icon: "/1851dropdown/codingappicon.png",
		width: 14,
		height: 15,
	},
	{
		label: "About Us",
		href: "/1851-services/about-us",
		icon: "/1851dropdown/logo.png",
		width: 14,
		height: 15,
	},
];

export const dropdownRightImage: DropdownRightImage = {
	src: "/1851dropdown/francamp.png",
	alt: "Francamp",
};

export const dropdownEllipseImage = "/1851dropdown/Ellipse 301.png";
