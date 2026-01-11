import type { NavLink, HeaderButton } from "../types/headerTypes";

export const navLinks: NavLink[] = [
	{ label: "Buy A Franchise", href: "/buy-a-franchise", hasDropdown: true },
	{ label: "News & Features", href: "/news-features", hasDropdown: true },
	{ label: "Franchise Resources", href: "/franchise-resources", hasDropdown: true },
	{ label: "For Franchisors", href: "/for-franchisors", hasDropdown: true },
	{ label: "1851 Services", href: "/1851-services", hasDropdown: true },
];

export const headerButtons: HeaderButton[] = [
	{
		label: "Contact",
		href: "#",
		className: "text-sm text-gray-700 hover:text-slate-800",
	},
	{
		label: "Login",
		href: "#",
		className: "text-sm text-gray-700 hover:text-slate-800",
	},
	// Add more if needed
];

export type HeaderImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
	className: string;
};

export const headerImages: { [key: string]: HeaderImage } = {
	logo: {
		src: "/logos/1851 Logomark.png",
		alt: "1851 Logo",
		width: 10, // fixed width
		height: 11, // fixed height
		className: "object-contain w-[10px] h-[11px] min-w-[10px] min-h-[11px] max-w-[10px] max-h-[11px]",
	},
	franchise: {
		src: "/logos/franchise.png",
		alt: "FRANCHISE",
		width: 80,
		height: 16,
		className: "object-contain w-20 h-4 min-w-20 min-h-4 max-w-20 max-h-4",
	},
	button: {
		src: "/logos/button.png",
		alt: "BUY A FRANCHISE",
		width: 100,
		height: 32,
		className: "object-contain",
	},
	button1: {
		src: "/logos/button1.png",
		alt: "GROW A FRANCHISE",
		width: 100,
		height: 32,
		className: "object-contain",
	},
};
