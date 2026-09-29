"use client";

import { useState, type SubmitEvent } from "react";

const pages = [
	{ name: "Home", key: "home", path: "/" },
	{ name: "About", key: "about", path: "/about" },
	{ name: "Login", key: "login", path: "/login" },
	{ name: "Dashboard", key: "dashboard", path: "/dashboard" },
	{ name: "Inventory", key: "inventory", path: "/inventory" },
	{ name: "Products", key: "products", path: "/products" },
	{ name: "New product", key: "new-product", path: "/products/new" },
	{ name: "Product details (sample)", key: "product-detail", path: "/products/demo" },
	{ name: "Edit product (sample)", key: "edit-product", path: "/products/demo/edit" },
	{ name: "Checkout", key: "checkout", path: "/checkout" },
	{ name: "Reports", key: "reports", path: "/reports" },
];

export default function AboutPage() {
	const [urls, setUrls] = useState(
		Object.fromEntries(pages.map((page) => [page.key, page.path])),
	);

	function openPage(event: SubmitEvent<HTMLFormElement>, key: string) {
		event.preventDefault();
		const url = urls[key].trim();
		if (url) window.location.assign(url);
	}

	return (
		<main className="flex flex-1 items-center bg-amber-50 px-6 py-16 text-slate-900 sm:py-24">
			<article className="mx-auto w-full max-w-5xl">
				<p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
					About Masing&apos;s Market
				</p>
				<h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
					Small shop. Big heart.
				</h1>
				<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
					We&apos;re a fictional neighborhood market built around a simple idea:
					shopping should feel personal. From fresh-baked morning bread to
					pantry favorites, we bring together useful, lovely things and the
					people who make our community special.
				</p>

				<div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
					<h2 className="text-xl font-semibold">A little more local, every day.</h2>
					<p className="mt-3 leading-7 text-slate-600">
						Our shelves are inspired by nearby makers, seasonal ingredients,
						and the small rituals that make a place feel like home. Stop by,
						say hello, and find something new for your table.
					</p>
				</div>

				<p className="mt-8 text-sm text-slate-500">
					Open daily · 8:00 AM–6:00 PM · Your friendly fictional corner shop
				</p>

				<section className="mt-16" aria-labelledby="page-links-heading">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
						Quick access
					</p>
					<h2 id="page-links-heading" className="mt-2 text-2xl font-bold tracking-tight">
						App pages
					</h2>
					<p className="mt-2 text-slate-600">
						Edit any URL, then select Go to open that page.
					</p>

					<div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
						<table className="w-full min-w-[600px] text-left text-sm">
							<thead className="bg-slate-50 text-slate-600">
								<tr>
									<th scope="col" className="px-5 py-4 font-semibold">Page</th>
									<th scope="col" className="px-5 py-4 font-semibold">URL (editable)</th>
									<th scope="col" className="px-5 py-4 font-semibold">Action</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-slate-100">
								{pages.map((page) => (
									<tr key={page.key}>
										<th scope="row" className="whitespace-nowrap px-5 py-3 font-medium text-slate-800">
											{page.name}
										</th>
										<td className="px-5 py-3">
											<form
												className="flex items-center gap-3"
												onSubmit={(event) => openPage(event, page.key)}
											>
												<input
													aria-label={`${page.name} URL`}
													className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
													value={urls[page.key]}
													onChange={(event) =>
														setUrls({ ...urls, [page.key]: event.target.value })
													}
												/>
												<button
													type="submit"
													className="rounded-lg bg-emerald-800 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
												>
													Go
												</button>
											</form>
										</td>
										<td className="px-5 py-3 text-slate-500">Press Enter or Go</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
			</article>
		</main>
	);
}
