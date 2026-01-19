"use client";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { industryOptions, investmentRangePlaceholders, filterLabels } from "../data/filterOptionsData";
import { franchiseTableRows } from "../data/franchiseTableRows";
import { franchiseFilters } from "../data/franchiseFilters";
import { franchisePageTexts } from "../data/franchisePageTexts";

function formatCurrency(val: string) {
	if (!val) return "";
	const num = parseInt(val.replace(/[^\d]/g, ""));
	if (isNaN(num)) return "";
	return "$" + num.toLocaleString();
}

export default function FranchiseOpportunity() {
	const [search, setSearch] = useState("");
	const [selectedIndustry, setSelectedIndustry] = useState("");
	const [investmentMin, setInvestmentMin] = useState("");
	const [investmentMax, setInvestmentMax] = useState("");
	const [appliedFilters, setAppliedFilters] = useState({
		search: "",
		industry: "",
		investmentMin: "",
		investmentMax: ""
	});
	const [visibleRows, setVisibleRows] = useState(9);

	const handleApplyFilters = () => {
		setAppliedFilters({
			search,
			industry: selectedIndustry,
			investmentMin,
			investmentMax
		});
	};

	const handleClearFilters = () => {
		setSearch("");
		setSelectedIndustry("");
		setInvestmentMin("");
		setInvestmentMax("");
		setAppliedFilters({
			search: "",
			industry: "",
			investmentMin: "",
			investmentMax: ""
		});
	};

	const handleInvestmentMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const raw = e.target.value.replace(/[^\d]/g, "");
		setInvestmentMin(raw);
	};
	const handleInvestmentMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const raw = e.target.value.replace(/[^\d]/g, "");
		setInvestmentMax(raw);
	};

	const handleShowMore = () => {
		setVisibleRows(filteredRows.length);
	};

	const filterRows = (rows: typeof franchiseTableRows) => {
		return rows.filter(row => {
			const matchesSearch =
				!appliedFilters.search ||
				row.brand.toLowerCase().includes(appliedFilters.search.toLowerCase());
			const matchesIndustry =
				!appliedFilters.industry || row.category === appliedFilters.industry;
			const minVal = appliedFilters.investmentMin ? parseInt(appliedFilters.investmentMin) : null;
			const maxVal = appliedFilters.investmentMax ? parseInt(appliedFilters.investmentMax) : null;
			const [rowMinStr, rowMaxStr] = row.investmentRange.replace(/[^0-9\-]/g, "").split("-");
			const rowMin = parseInt(rowMinStr);
			const rowMax = parseInt(rowMaxStr);

			const matchesMin = !minVal || rowMax >= minVal;
			const matchesMax = !maxVal || rowMin <= maxVal;

			return matchesSearch && matchesIndustry && matchesMin && matchesMax;
		});
	};

	const filteredRows = filterRows(franchiseTableRows);

	return (
		<>
			<Header />
			<main className="max-w-screen-xl mx-auto px-4 py-6">
				<h1 className="text-2xl md:text-3xl font-bold mb-2">{franchisePageTexts.heading}</h1>
				<p className="mb-6 text-gray-700">
					{franchisePageTexts.description}
				</p>
				{/* Filter Section */}
				<div className="bg-white rounded shadow p-4 mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-6">
					<div className="flex-1 flex flex-col gap-2">
						<label htmlFor="search" className="text-xs font-semibold text-gray-600">{filterLabels.search}</label>
						<input
							id="search"
							type="text"
							placeholder={filterLabels.searchPlaceholder}
							value={search}
							onChange={e => setSearch(e.target.value)}
							className="border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-200"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-2">
						<label htmlFor="industry" className="text-xs font-semibold text-gray-600">{filterLabels.industry}</label>
						<select
							id="industry"
							value={selectedIndustry}
							onChange={e => setSelectedIndustry(e.target.value)}
							className="border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-200"
						>
							<option value="">All</option>
							{industryOptions.map(option => (
								<option key={option} value={option}>{option}</option>
							))}
						</select>
					</div>
					<div className="flex flex-col gap-0 lg:flex-row lg:items-end lg:gap-2">
						<div className="flex flex-col gap-2">
							<label htmlFor="investment-min" className="text-xs font-semibold text-gray-600">{filterLabels.investmentRange}</label>
							<input
								id="investment-min"
								type="text"
								placeholder={investmentRangePlaceholders.min}
								value={formatCurrency(investmentMin)}
								onChange={handleInvestmentMinChange}
								className="border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-200 w-full lg:w-28"
								inputMode="numeric"
							/>
						</div>
						<div className="flex items-center justify-center h-full py-2 lg:py-0">
							<span className="text-xs text-gray-500 font-semibold px-2">{franchisePageTexts.toText}</span>
						</div>
						<div className="flex flex-col gap-2">
							<input
								id="investment-max"
								type="text"
								placeholder={investmentRangePlaceholders.max}
								value={formatCurrency(investmentMax)}
								onChange={handleInvestmentMaxChange}
								className="border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-200 w-full lg:w-28"
								inputMode="numeric"
							/>
						</div>
					</div>
					<div className="flex gap-2 mt-2 lg:mt-0">
						<button
							type="button"
							className="bg-fuchsia-600 text-white px-4 py-2 rounded text-xs font-semibold hover:bg-fuchsia-700 transition"
							onClick={handleApplyFilters}
						>
							{filterLabels.apply}
						</button>
						<button
							type="button"
							className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-xs font-semibold hover:bg-gray-200 transition"
							onClick={handleClearFilters}
						>
							{filterLabels.clear}
						</button>
					</div>
				</div>
				{/* Franchise count and filter chips section */}
				<div className="mb-4">
					<span className="block text-base font-semibold text-gray-900 mb-2">
						{filteredRows.length} {filteredRows.length === 1 ? "Franchise" : "Franchises"}
					</span>
					<div className="flex items-center flex-wrap gap-2">
						{appliedFilters.industry && (
							<span className="bg-blue-100 text-blue-900 text-xs font-semibold px-2 py-1 rounded-full">
								&times; {appliedFilters.industry}
							</span>
						)}
						{appliedFilters.search && (
							<span className="bg-blue-100 text-blue-900 text-xs font-semibold px-2 py-1 rounded-full">
								&times; {appliedFilters.search}
							</span>
						)}
						{appliedFilters.investmentMin && appliedFilters.investmentMax && (
							<span className="bg-blue-100 text-blue-900 text-xs font-semibold px-2 py-1 rounded-full">
								&times; ${appliedFilters.investmentMin} - ${appliedFilters.investmentMax}
							</span>
						)}
					</div>
				</div>
				{/* Franchise Table Section */}
				<div className="bg-white rounded shadow mb-6">
					<table className="min-w-full">
						<thead className="bg-white">
							<tr>
								<th className="px-2 py-2 text-left text-xs font-semibold text-gray-600">{franchisePageTexts.tableHeaders.brand}</th>
								<th className="px-2 py-2 text-left text-xs font-semibold text-gray-600">{franchisePageTexts.tableHeaders.category}</th>
								<th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 hidden md:table-cell">{franchisePageTexts.tableHeaders.units}</th>
								<th className="px-2 py-2 text-left text-xs font-semibold text-gray-600">{franchisePageTexts.tableHeaders.investmentRange}</th>
								<th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 hidden md:table-cell">{franchisePageTexts.tableHeaders.cashRequired}</th>
								<th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 hidden md:table-cell">{franchisePageTexts.tableHeaders.latestStory}</th>
							</tr>
						</thead>
						<tbody>
							{filteredRows.slice(0, visibleRows).map((row, idx) => (
								<React.Fragment key={idx}>
									<tr>
										<td className="flex items-center px-2 py-3">
											<img src={row.logo} alt={row.brand} className="w-16 h-10 object-contain mr-3" />
											<span className="text-xs">{row.brand}</span>
										</td>
										<td className="px-2 py-3 text-xs">{row.category}</td>
										<td className="px-2 py-3 text-xs hidden md:table-cell">{row.units}</td>
										<td className="px-2 py-3 text-xs">{row.investmentRange}</td>
										<td className="px-2 py-3 text-xs hidden md:table-cell">{row.cashRequired}</td>
										<td className="px-2 py-3 text-xs hidden md:table-cell">
											<a href={row.storyLink} className="text-fuchsia-500 hover:underline">{franchisePageTexts.visitFranchiseDevSite} &gt;</a>
										</td>
									</tr>
									<tr>
										<td colSpan={6}>
											<hr className="border-gray-200" />
										</td>
									</tr>
								</React.Fragment>
							))}
						</tbody>
					</table>
				</div>
				{/* Show More Button / No More Results */}
				<div className="flex justify-center mt-6">
					{visibleRows < filteredRows.length ? (
						<button
							className="flex items-center gap-2 px-8 py-2 bg-blue-100 text-slate-900 font-bold rounded-none tracking-wide text-sm"
							onClick={handleShowMore}
						>
							<span className="text-lg font-bold">+</span>
							<span className="tracking-wider font-bold">{franchisePageTexts.showMore}</span>
						</button>
					) : (
						<span className="text-gray-500 text-sm font-semibold py-2">No more results</span>
					)}
				</div>
			</main>
			<Footer />
		</>
	);
}

// No inline styles are used in this file. All styling is handled via Tailwind CSS classes.
