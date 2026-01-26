export interface NavLink {
	label: string;
	href: string;
	hasDropdown?: boolean;
}

export interface HeaderButton {
	label: string;
	href: string;
	className: string;
}

export type BuyingDropdownItem = {
	label: string;
	icon: string;
	route?: string;
};

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
