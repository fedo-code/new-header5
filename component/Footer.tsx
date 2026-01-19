import React from "react";
import { footerColumns } from "../data/footerColumnsData";
import { footerSocialIcons } from "../data/footerSocialIconsData";
import { footerDisclaimer } from "../data/footerDisclaimerData";
import { footerConfig } from "../data/footerConfig";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-[#181924] text-white pt-10 pb-6 px-6">
			<div className="max-w-screen-2xl mx-auto">
				{/* Desktop/Large screen footer */}
				<div className="hidden md:block">
					{/* Center columns and add horizontal bar below each */}
					<div className="flex flex-col items-center gap-8 mb-8 [@media(min-width:1061px)]:flex-row [@media(min-width:1061px)]:justify-between [@media(min-width:1061px)]:items-start">
						{footerColumns.map((col, idx) => (
							<div key={col.title} className="flex flex-col gap-2 min-w-[180px] items-start">
								<span className="font-semibold text-fuchsia-400 mb-2">{col.title}</span>
								{col.links.map((link: { label: string; href: string }) => (
									<a key={link.label} href={link.href} className="text-sm hover:underline">{link.label}</a>
								))}
								{col.icons && (
									<div className="flex gap-2 mt-3">
										{col.icons.map((icon: string, i: number) => (
											<img key={i} src={icon} alt={`logo${i + 1}`} className="w-8 h-8 object-contain" />
										))}
									</div>
								)}
								<hr className="w-full border-gray-600 my-3 [@media(min-width:1061px)]:hidden" />
							</div>
						))}
					</div>
					<hr className="border-gray-600 mb-4" />
					<div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-2">
						<div className="flex items-center gap-4">
							<span className="text-xs text-gray-300">&copy; {year} {footerConfig.companyName}</span>
							<select className="bg-transparent text-xs text-gray-300 border-none outline-none">
								<option>{footerConfig.language}</option>
							</select>
						</div>
						<div className="flex flex-wrap items-center gap-4">
							{footerConfig.footerLinks.map(link => (
								<a key={link.label} href={link.href} className="text-xs text-gray-300 hover:underline">{link.label}</a>
							))}
						</div>
						<div className="flex items-center gap-3">
							{footerSocialIcons.map(icon => (
								<img key={icon.alt} src={icon.img} alt={icon.alt} className="w-5 h-5 object-contain" />
							))}
						</div>
					</div>
					<p className="text-[10px] text-gray-400 mt-2 leading-snug">
						{footerDisclaimer}
					</p>
				</div>
				{/* Mobile footer (<=768px) */}
				<div className="block md:hidden">
					<div className="flex flex-col items-center gap-4 mb-4">
						<div className="flex gap-4 mb-2">
							{footerConfig.mobileLogos.map((logo, idx) => (
								<img key={idx} src={logo.src} alt={logo.alt} className="w-8 h-8 object-contain" />
							))}
						</div>
						<div className="flex gap-4 mb-2">
							{footerSocialIcons.map(icon => (
								<img key={icon.alt} src={icon.img} alt={icon.alt} className="w-5 h-5 object-contain" />
							))}
						</div>
					</div>
					<hr className="border-gray-600 mb-4" />
					<div className="flex flex-col items-center gap-2 mb-2">
						<span className="text-xs text-gray-300">&copy; {year} {footerConfig.companyName}</span>
						<select className="bg-transparent text-xs text-gray-300 border-none outline-none">
							<option>{footerConfig.language}</option>
						</select>
					</div>
					<div className="flex flex-col items-center gap-2 mb-2">
						{footerConfig.footerLinks.map(link => (
							<a key={link.label} href={link.href} className="text-xs text-gray-300 hover:underline">{link.label}</a>
						))}
					</div>
					<p className="text-[10px] text-gray-400 mt-2 leading-snug text-center">
						{footerDisclaimer}
					</p>
				</div>
			</div>
		</footer>
	);
}

// Is file me koi inline style nahi hai.
// Sare CSS classes (e.g. bg-[#181924], text-white, flex, gap-8, min-w-[180px], etc.) Tailwind CSS documentation ke standard utility classes hain.
// Pure Tailwind CSS ka use ho raha hai, koi custom CSS ya inline style nahi hai.

