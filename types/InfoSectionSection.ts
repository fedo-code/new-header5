import React from "react";

export interface InfoSectionSection {
	label: string;
	text: string;
	// icon property not needed, using iconSrc and iconAlt in data
}

export type InfoSectionClassType = {
	trendingClass?: string;
	latestClass?: string;
	hotTopicsClass?: string;
	textClass: string;
	border: string;
};
