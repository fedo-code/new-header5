import type { InfoSectionSection, InfoSectionClassType } from "../types/InfoSectionSection";
import { infoSections } from "../data/infoSectionData";

function getLabelClass(section: InfoSectionClassType): string {
	return section.trendingClass || section.latestClass || section.hotTopicsClass || "";
}

export default function InfoSection() {
	return (
		<div className="container mx-auto px-12">
			<div className="w-full h-auto rounded bg-white/50 mt-4 mb-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
					{infoSections.map((section: InfoSectionSection & InfoSectionClassType & { iconSrc: string; iconAlt: string }) => (
						<div
							key={section.label}
							className={`flex items-center border ${section.border} px-4 py-2 bg-white rounded-md min-w-0 overflow-hidden whitespace-nowrap`}
						>
							<span className="flex items-center gap-1">
								<span className={getLabelClass(section)}>
									{section.label}
								</span>
								<img
									src={section.iconSrc}
									alt={section.iconAlt}
									className={[
										"w-2.5 h-3 flex-shrink-0",
										section.label === "Latest" ? "relative -top-px" : "",
										section.label === "Hot Topics" ? "ml-1" : ""
									].join(" ")}
								/>
							</span>
							<span className={`${section.textClass} truncate`}>
								{section.text}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
