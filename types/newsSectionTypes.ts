export interface NewsTab {
	label: string;
}

export interface NewsCard {
	tab: string;
	date: string;
	time: string;
	title: string;
	description: string;
	author: string;
	role: string;
	image: string;
	authorImage: string;
	authorImageLayout?: {
		width: number;
		height: number;
	};
	authorNameLayout?: {
		fontSize: number;
		fontWeight: number;
		color: string;
	};
	titleLayout?: {
		fontSize: number;
		fontWeight: number;
		lineHeight: string;
		letterSpacing?: string;
		color: string;
		fontFamily?: string;
	};
	descriptionLayout?: {
		fontSize: number;
		fontWeight: number;
		lineHeight: string;
		letterSpacing?: string;
		color: string;
		fontFamily?: string;
	};
	imageLayout?: {
		width?: number;
		height: number;
	};
	tabLayout?: {
		width: number;
		height: number;
		fontSize: number;
	};
}

export type LayoutType = {
	width?: number;
	height?: number;
	fontSize?: number;
	fontWeight?: number;
	color?: string;
	fontFamily?: string;
	lineHeight?: string;
	letterSpacing?: string;
};
