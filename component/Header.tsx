"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { navLinks, headerImages, headerButtons } from "../data/headerData";
import { buyingDropdownItems } from "../data/buyingDropdownData";
import { dropdownLinks, dropdownRightImage, dropdownEllipseImage } from "../data/header1851DropdownData";

export default function Header({ onShowEventSection }: { onShowEventSection?: () => void }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [buyingOpen, setBuyingOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false); // for 1851 Services dropdown
	const servicesRef = useRef<HTMLDivElement>(null);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // for mobile 1851 Services

	// Close dropdown when clicking outside
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

	return (
		<header className="w-full border-b border-gray-200 bg-white">
			<div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2 min-w-[120px]">
				<div className="flex items-center shrink-0 min-w-[120px]">
					<Image {...headerImages.logo} priority />
					<Image {...headerImages.franchise} />
				</div>
				<nav className="hidden lg:flex flex-1 items-center ml-8">
					{navLinks.map(({ label, href, hasDropdown }) =>
						label === "1851 Services" ? (
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
												onClick={() => setBuyingOpen((v) => !v)}
											>
												<span>{label}</span>
												<svg
													className={`ml-2 w-4 h-4 transition-transform ${buyingOpen ? "rotate-180" : ""}`}
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
											{buyingOpen && (
												<div className="mt-1 mb-2 ml-2 flex flex-col gap-1">
													{buyingDropdownItems.map((item) => (
														<div key={item.label} className="flex items-center py-2 px-2 rounded hover:bg-gray-100">
															<span className="mr-2 flex items-center justify-center bg-[#B3C7E6] rounded w-[18px] h-[18px]" style={{ minWidth: 18, minHeight: 18 }}>
																<img
																	src={item.icon}
																	alt="Logo"
																	width={7}
																	height={7}
																	className="object-contain"
																	style={{ width: 7, height: 7 }}
																/>
															</span>
															{item.label === "Find a Franchise Opportunity" ? (
																<Link href="/franchise-opportunity" className="text-xs text-blue-600 hover:underline">
																	{item.label}
																</Link>
															) : (
																<span className="text-xs">{item.label}</span>
															)}
														</div>
													))}
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
