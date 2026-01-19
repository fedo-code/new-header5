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
	icon: string; // icon path, now required and dynamic
};
