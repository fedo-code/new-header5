"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, headerImages, headerButtons } from "../data/headerData";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [buyingOpen, setBuyingOpen] = useState(false);

	return (
		<header className="w-full border-b border-gray-200 bg-white">
			<div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2 min-w-[120px]">
				<div className="flex items-center shrink-0 min-w-[120px]">
					<Image {...headerImages.logo} priority />
					<Image {...headerImages.franchise} />
				</div>
				<nav className="hidden lg:flex flex-1 items-center ml-8">
					{navLinks.map(({ label, href, hasDropdown }) => (
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
					))}
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
								<circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth={2} fill="none"/>
								<path d="M16 6L6 16M6 6l10 10" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
							</svg>
						</button>
						<div className="flex flex-col gap-2 mt-6">
							{navLinks.map(({ label }) => (
								<div key={label}>
									<button
										className="w-full flex items-center justify-between text-xs font-semibold py-2 px-1 hover:bg-gray-50 rounded"
										onClick={label === "Buy A Franchise" ? () => setBuyingOpen(v => !v) : undefined}
										disabled={label !== "Buy A Franchise"}
									>
										<span>{label}</span>
										<svg
											className={`ml-2 w-4 h-4 transition-transform ${
												label === "Buy A Franchise" && buyingOpen ? "rotate-180" : ""
											}`}
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
