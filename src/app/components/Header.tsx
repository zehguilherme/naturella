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
			<div className="flex justify-between items-center px-6">
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
						<li className="w-full flex justify-center items-center">
							<Link
								href="/"
								className="text-white w-full flex justify-center items-center py-3 font-medium text-sm"
							>
								Home
							</Link>
						</li>

						<li className="w-full flex justify-center items-center">
							<Link
								href="/sobre"
								className="text-white w-full flex justify-center items-center py-3 font-medium text-sm"
							>
								Sobre
							</Link>
						</li>

						<li className="w-full flex justify-center items-center">
							<Link
								href="https://wa.me/5514998695347"
								target="_blank"
								className="text-white w-full flex justify-center items-center py-3 font-medium text-sm"
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
