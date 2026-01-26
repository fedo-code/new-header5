"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { navLinks, headerImages, headerButtons } from "../data/headerData";
import { buyingDropdownItems } from "../data/buyingDropdownData";
import { dropdownLinks, dropdownRightImage, dropdownEllipseImage } from "../data/header1851DropdownData";

// Update your buyingDropdownItems data to include a `route` property for the navigable item(s).
// Example (in buyingDropdownData.ts):
// { label: "Find a Franchise Opportunity", icon: "...", route: "/franchise-opportunity" }

function BuyAFranchiseLinks({
	items,
	onFirstClick,
	spanClass = "text-[15px] text-[#222] font-georgia",
	iconBgClass = "bg-blue-100",
	iconSize = 14,
}: {
	items: { label: string; icon: string; route?: string }[];
	onFirstClick?: (e: React.MouseEvent<HTMLButtonElement>, route?: string) => void;
	spanClass?: string;
	iconBgClass?: string;
	iconSize?: number;
}) {
	return (
		<>
			{items.map((item) => (
				<div
					key={item.label}
					className="flex items-center py-2 px-2 rounded hover:bg-gray-100 transition"
					style={{ cursor: item.route && onFirstClick ? "pointer" : undefined }}
					onClick={!item.route || !onFirstClick ? undefined : undefined}
				>
					<span
						className={`mr-2 flex items-center justify-center ${iconBgClass} rounded`}
						style={{ width: 18, height: 18, minWidth: 18, minHeight: 18 }}
					>
						<img
							src={item.icon}
							alt="Logo"
							width={iconSize}
							height={iconSize}
							className="object-contain"
							style={{ width: iconSize, height: iconSize }}
						/>
					</span>
					{item.route && onFirstClick ? (
						<button
							type="button"
							className={`${spanClass} bg-transparent border-none p-0 m-0 hover:underline cursor-pointer`}
							onClick={e => onFirstClick(e, item.route)}
						>
							{item.label}
						</button>
					) : (
						<span className={spanClass}>{item.label}</span>
					)}
				</div>
			))}
		</>
	);
}

export default function Header({ onShowEventSection }: { onShowEventSection?: () => void }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [buyingOpen, setBuyingOpen] = useState(false); // desktop modal only
	const [mobileBuyingOpen, setMobileBuyingOpen] = useState(false); // <-- new for mobile dropdown
	const [servicesOpen, setServicesOpen] = useState(false);
	const servicesRef = useRef<HTMLDivElement>(null);
	const buyingRef = useRef<HTMLDivElement>(null);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
	const router = useRouter();

	// Close 1851 Services modal on outside click
	useEffect(() => {
		if (!servicesOpen) return;
		function handleClick(e: MouseEvent) {
			if (
				servicesRef.current &&
				!servicesRef.current.contains(e.target as Node)
			) {
				setServicesOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [servicesOpen]);

	// Close Buy A Franchise modal on outside click
	useEffect(() => {
		if (!buyingOpen) return;
		function handleClick(e: MouseEvent) {
			if (
				buyingRef.current &&
				!buyingRef.current.contains(e.target as Node)
			) {
				setBuyingOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [buyingOpen]);

	return (
		<header className="w-full border-b border-gray-200 bg-white">
			<div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2 min-w-[120px]">
				<div className="flex items-center shrink-0 min-w-[120px]">
					<Link href="/" className="flex items-center">
						<Image {...headerImages.logo} priority />
						<Image {...headerImages.franchise} />
					</Link>
				</div>
				<nav className="hidden lg:flex flex-1 items-center ml-8">
					{navLinks.map(({ label, href, hasDropdown }) =>
						label === "Buy A Franchise" ? (
							<div
								key={label}
								className="relative group"
								ref={buyingRef}
							>
								<button
									type="button"
									onClick={() => setBuyingOpen((v) => !v)}
									className="px-3 py-2 flex items-center text-gray-700 hover:text-slate-800 text-xs focus:outline-none"
								>
									{label}
									<svg
										className="ml-1 w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{/* Buy A Franchise Dropdown Modal (desktop only) */}
								{buyingOpen && (
									<div className="absolute left-0 top-full mt-2 w-[560px] h-[210px] bg-white rounded-lg shadow-xl flex z-50 overflow-hidden">
										{/* LEFT: Links */}
										<div className="flex-1 p-6 flex flex-col justify-start">
											<h3 className="font-bold text-[20px] text-[#222] mb-4">Buy A Franchise</h3>
											<div className="flex flex-col gap-2">
												<BuyAFranchiseLinks
													items={buyingDropdownItems}
													onFirstClick={(_, route) => {
														setBuyingOpen(false);
														if (route) router.push(route);
													}}
													spanClass="text-[15px] text-[#222] font-georgia whitespace-nowrap"
													iconBgClass="bg-blue-100"
													iconSize={14}
												/>
											</div>
										</div>
										{/* RIGHT: Image + magenta text */}
										<div
											className="flex flex-col items-center justify-start bg-[#F7F8FA] p-4 border-l border-gray-100 relative w-[280px] mt-[10px]"
										>
											<span
												className="text-[13px] font-bold text-fuchsia-600 text-center whitespace-nowrap leading-tight mb-2"
											>
												SEE THIS MONTHS COVER &gt;
											</span>
											<div className="flex-1 flex items-center justify-center w-full">
												<img
													src="/franchiseplaceholder/petfranchise.png"
													alt="Cover"
													className="relative z-10 w-[120px] h-[160px] object-contain rounded shadow"
												/>
											</div>
											<img
												src="/1851dropdown/Ellipse 301.png"
												alt="Ellipse"
												className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[182px]"
											/>
											<div className="h-0"></div>
										</div>
									</div>
								)}
							</div>
						) : label === "1851 Services" ? (
							<div
								key={label}
								className="relative group"
								ref={servicesRef}
							>
								<button
									type="button"
									onClick={() => setServicesOpen((v) => !v)}
									className="px-3 py-2 flex items-center text-gray-700 hover:text-slate-800 text-xs focus:outline-none"
								>
									{label}
									<svg
										className="ml-1 w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{/* Dropdown */}
								{servicesOpen && (
									<div className="absolute left-0 top-full mt-2 w-[480px] h-[210px] bg-white rounded-lg shadow-xl flex z-50 overflow-hidden">
										{/* LEFT: Links */}
										<div className="flex-1 p-6">
											<h3 className="font-bold text-[20px] text-[#222] mb-4">1851 Services</h3>
											<div className="flex flex-col gap-2">
												{dropdownLinks.map((item) => (
													item.label === "Events" ? (
														<Link
															key={item.label}
															href="/events"
															className="flex items-center gap-1 py-1 px-2 rounded hover:bg-gray-100 transition w-full text-left"
															onClick={() => setServicesOpen(false)}
														>
															<span className="w-7 h-7 flex items-center justify-center bg-[#E6EFFA] rounded mr-1">
																<img
																	src={item.icon}
																	alt=""
																	className={`object-contain w-[${item.width}px] h-[${item.height}px] min-w-[${item.width}px] min-h-[${item.height}px] max-w-[${item.width}px] max-h-[${item.height}px]`}
																/>
															</span>
															<span className="text-[15px] text-[#222] font-georgia">{item.label}</span>
														</Link>
													) : (
														<Link
															key={item.label}
															href={item.href}
															className="flex items-center gap-1 py-1 px-2 rounded hover:bg-gray-100 transition"
														>
															<span className="w-7 h-7 flex items-center justify-center bg-[#E6EFFA] rounded mr-1">
																<img
																	src={item.icon}
																	alt=""
																	className={`object-contain w-[${item.width}px] h-[${item.height}px] min-w-[${item.width}px] min-h-[${item.height}px] max-w-[${item.width}px] max-h-[${item.height}px]`}
																/>
															</span>
															<span className="text-[15px] text-[#222] font-georgia">{item.label}</span>
														</Link>
													)
												))}
											</div>
										</div>
										{/* RIGHT: Image + pink text */}
										<div className="flex flex-col items-center justify-start w-[200px] bg-[#F7F8FA] p-4 border-l border-gray-100 relative">
											<span
												className="absolute top-4 left-4 right-4 text-[13px] font-bold text-pink-500 text-center whitespace-nowrap leading-tight"
											>
												JOIN US AT FRANCAMP &gt;
											</span>
											<div className="flex-1 flex items-center justify-center mt-8 relative w-full">
												{/* Ellipse background image */}
												<img
													src={dropdownEllipseImage}
													alt="Ellipse"
													className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[170px] h-[90px] object-contain z-0 pointer-events-none mb-[-18px]"
												/>
												{/* Main Francamp image */}
												<img
													src={dropdownRightImage.src}
													alt={dropdownRightImage.alt}
													className="relative z-10 w-[120px] h-[110px] object-contain rounded shadow"
												/>
											</div>
											{/* Make sure the parent div fills the height so ellipse touches the bottom */}
											<div className="h-0"></div>
										</div>
									</div>
								)}
							</div>
						) : (
							<div key={label} className="relative group">
								<Link
									href={href}
									className="px-3 py-2 flex items-center text-gray-700 hover:text-slate-800 text-xs"
								>
									{label}
									{hasDropdown && (
										<svg
											className="ml-1 w-4 h-4"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									)}
								</Link>
							</div>
						)
					)}
				</nav>
				<div className="hidden lg:flex items-center space-x-3 btn-sm:space-x-0 btn-md:space-x-3">
					<button className="p-2">
						<svg
							className="w-5 h-5 text-gray-500"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
						>
							<circle cx="11" cy="11" r="8" />
							<path d="M21 21l-4.35-4.35" />
						</svg>
					</button>
					{headerButtons.map(({ label, href, className }) => (
						<Link
							key={label}
							href={href}
							className={`${className} btn-sm:ml-3 btn-md:ml-0 text-xs`}
						>
							{label}
						</Link>
					))}
					<Link href="#" className="ml-2 hover:opacity-90 transition">
						<Image {...headerImages.button} />
					</Link>
					<Link href="#" className="ml-1 hover:opacity-90 transition">
						<Image {...headerImages.button1} />
					</Link>
				</div>
				<button
					className="lg:hidden flex items-center ml-auto"
					aria-label="Open menu"
					onClick={() => setMenuOpen(true)}
				>
					<svg
						className="w-7 h-7 text-slate-800"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			{menuOpen && (
				<div className="fixed inset-0 z-50 flex justify-end bg-black/30">
					<div className="w-80 max-w-full h-full bg-white shadow-xl flex flex-col p-5 relative">
						<button
							className="absolute top-2 right-4 text-gray-500 hover:text-black"
							onClick={() => setMenuOpen(false)}
							aria-label="Close menu"
						>
							<svg width={22} height={22} viewBox="0 0 22 22" fill="none">
								<circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
								<path d="M16 6L6 16M6 6l10 10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
							</svg>
						</button>
						<div className="flex flex-col gap-2 mt-6">
							{navLinks.map(({ label }) => (
								<div key={label}>
									{label === "Buy A Franchise" ? (
										<>
											<button
												className="w-full flex items-center justify-between text-xs font-semibold py-2 px-1 hover:bg-gray-50 rounded"
												onClick={() => setMobileBuyingOpen((v) => !v)}
											>
												<span>{label}</span>
												<svg
													className={`ml-2 w-4 h-4 transition-transform ${mobileBuyingOpen ? "rotate-180" : ""}`}
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</button>
											{mobileBuyingOpen && (
												<div className="mt-1 mb-2 ml-2 flex flex-col gap-1">
													<BuyAFranchiseLinks
														items={buyingDropdownItems}
														onFirstClick={(e, route) => {
															e.stopPropagation();
															setMenuOpen(false);
															setMobileBuyingOpen(false);
															if (route) router.push(route);
														}}
														spanClass="text-[15px] text-[#222] font-georgia"
														iconBgClass="bg-[#B3C7E6]"
														iconSize={14}
													/>
												</div>
											)}
										</>
									) : label === "1851 Services" ? (
										<>
											<button
												className="w-full flex items-center justify-between text-xs font-semibold py-2 px-1 hover:bg-gray-50 rounded"
												onClick={() => setMobileServicesOpen((v) => !v)}
											>
												<span>{label}</span>
												<svg
													className={`ml-2 w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</button>
											{mobileServicesOpen && (
												<div className="mt-1 mb-2 ml-2 flex flex-col gap-1">
													{dropdownLinks.map((item) =>
														item.label === "Events" ? (
															<Link
																key={item.label}
																href="/events"
																className="flex items-center gap-1 py-1 px-2 rounded hover:bg-gray-100 transition w-full text-left"
																onClick={() => {
																	setMenuOpen(false);
																	setMobileServicesOpen(false);
																}}
															>
																<span className="w-7 h-7 flex items-center justify-center bg-[#E6EFFA] rounded mr-1">
																	<img
																		src={item.icon}
																		alt=""
																		className={`object-contain w-[${item.width}px] h-[${item.height}px] min-w-[${item.width}px] min-h-[${item.height}px] max-w-[${item.width}px] max-h-[${item.height}px]`}
																	/>
																</span>
																<span className="text-[15px] text-[#222] font-georgia">{item.label}</span>
															</Link>
														) : (
															<Link
																key={item.label}
																href={item.href}
																className="flex items-center gap-1 py-1 px-2 rounded hover:bg-gray-100 transition"
															>
																<span className="w-7 h-7 flex items-center justify-center bg-[#E6EFFA] rounded mr-1">
																	<img
																		src={item.icon}
																		alt=""
																		className={`object-contain w-[${item.width}px] h-[${item.height}px] min-w-[${item.width}px] min-h-[${item.height}px] max-w-[${item.width}px] max-h-[${item.height}px]`}
																	/>
																</span>
																<span className="text-[15px] text-[#222] font-georgia">{item.label}</span>
															</Link>
														)
													)}
													{/* Optional: Add right image and pink text as in desktop dropdown */}
													<div className="flex flex-col items-center justify-start w-full bg-[#F7F8FA] p-4 border-t border-gray-100 relative mt-2">
														<span className="text-[13px] font-bold text-pink-500 text-center whitespace-nowrap leading-tight mb-2">
															JOIN US AT FRANCAMP &gt;
														</span>
														<div className="flex items-center justify-center w-full">
															<img
																src={dropdownRightImage.src}
																alt={dropdownRightImage.alt}
																className="w-[120px] h-[110px] object-contain rounded shadow"
															/>
														</div>
													</div>
												</div>
											)}
										</>
									) : (
										<button
											className="w-full flex items-center justify-between text-xs font-semibold py-2 px-1 hover:bg-gray-50 rounded"
											disabled
										>
											<span>{label}</span>
										</button>
									)}
								</div>
							))}
							<hr className="my-2" />
							{headerButtons.map(({ label, href }) => (
								<Link
									key={label}
									href={href}
									className={
										label === "Contact"
											? "text-xs text-slate-800 py-1.5 px-1"
											: "text-xs text-fuchsia-500 py-1.5 px-1"
									}
								>
									{label}
								</Link>
							))}
							<Link href="#" className="mt-3 w-full flex justify-start">
								<Image {...headerImages.button} />
							</Link>
							<Link href="#" className="w-full flex justify-start">
								<Image {...headerImages.button1} />
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}


