"use client";

import Link from "next/link";
import { Logo } from "../icons/Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	function handleMenuOpeningAndClosing() {
		setMenuIsOpen(!menuIsOpen);
	}

	return (
		<header className="bg-green">
			<div className="flex items-center justify-between px-6">
				<Link href="/">
					<Logo />
				</Link>

				<button
					className="p-2"
					type="button"
					onClick={handleMenuOpeningAndClosing}
				>
					{menuIsOpen ? (
						<X color="white" size={32} />
					) : (
						<Menu color="white" size={32} />
					)}
				</button>
			</div>

			{menuIsOpen && (
				<nav>
					<ul className="flex flex-col items-center justify-center">
						<li className="flex w-full items-center justify-center">
							<Link
								href="/"
								className="flex w-full items-center justify-center py-3 font-medium text-sm text-white"
							>
								Home
							</Link>
						</li>

						<li className="flex w-full items-center justify-center">
							<Link
								href="/sobre"
								className="flex w-full items-center justify-center py-3 font-medium text-sm text-white"
							>
								Sobre
							</Link>
						</li>

						<li className="flex w-full items-center justify-center">
							<Link
								href="https://wa.me/5514998695347"
								target="_blank"
								className="flex w-full items-center justify-center py-3 font-medium text-sm text-white"
							>
								Contato
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
}
