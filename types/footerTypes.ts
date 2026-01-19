export interface FooterLink {
	label: string;
	href: string;
}

export interface FooterColumn {
	title: string;
	links: FooterLink[];
	icons?: string[]; // For columns with icons/logos
}

export interface FooterSocialIcon {
	img: string;
	alt: string;
	href: string;
}

export interface FooterConfigLink {
	label: string;
	href: string;
}

export interface FooterMobileLogo {
	src: string;
	alt: string;
}

export interface FooterConfig {
	companyName: string;
	language: string;
	footerLinks: FooterConfigLink[];
	mobileLogos: FooterMobileLogo[];
}

// This file is indirectly connected to Footer.tsx via the data files.
