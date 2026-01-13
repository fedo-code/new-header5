/**
 * Button label for hero sections.
 */
export interface HeroButton {
	/** The visible label for the button */
	label: string;
}

/**
 * Enum for sort options in supplier search.
 */
export enum SortOption {
	Alphabetically = "Alphabetically",
}

/**
 * Data structure for each hero section.
 */
export interface HeroSection {
	/** Section 1 main heading */
	leftTitle: string;
	/** Section 1 description */
	leftDescription: string;
	/** Section 1 right button text */
	rightTitle: string;

	/** Section 2 & 3 main title */
	mainTitle?: string;
	/** Section 2 & 3 main description */
	mainDescription?: string;
	/** Section 2 & 3 sidebar title */
	sidebarTitle?: string;

	/** Section 2 form fields */
	filterLabel?: string;
	industryLabel?: string;
	industryPlaceholder?: string;
	investmentLabel?: string;
	investmentPlaceholderMin?: string;
	investmentPlaceholderMax?: string;

	/** Section 3 form fields */
	categoryLabel?: string;
	sortLabel?: string;
	sortOption?: SortOption;
	searchButton?: string;
	categoryPlaceholder?: string; // <-- add this
	button?: string; // <-- add this for "Claim Your Profile"

	/** Section 2 buttons (if needed) */
	buttons?: string[];
}


export interface HeroImageAsset {
	src: string;
	alt: string;
	className: string;
}


export type ButtonWidths = Record<string, string>;


