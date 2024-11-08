"use client";

import Link from "next/link";
import { useState } from "react";

import { Logo } from "../icons/Logo";
import { Menu, X } from "lucide-react";

export function Header() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	function handleMenuOpeningAndClosing() {
		setMenuIsOpen(!menuIsOpen);
	}

	return (
		<header className="bg-green px-6 sm:px-12">
			<div className="mx-auto max-w-[1440px] sm:flex sm:items-center sm:justify-between">
				<div className="flex items-center justify-between">
					<h1>
						<Link href="/">
							<Logo />
						</Link>
					</h1>

					<button
						className="p-2 sm:hidden"
						type="button"
						onClick={handleMenuOpeningAndClosing}
						aria-label={`${
							menuIsOpen
								? "Botão contendo a letra X"
								: "Botão com ícone de um hambúrguer"
						}`}
					>
						{menuIsOpen ? (
							<X color="white" size={32} />
						) : (
							<Menu color="white" size={32} />
						)}
					</button>
				</div>

				{menuIsOpen && (
					<nav className="sm:hidden" aria-label="navbar-mobile">
						<ul className="flex flex-col items-center justify-center">
							<li className="flex w-full items-center justify-center">
								<Link
									href="/"
									className="flex w-full items-center justify-center py-3 font-medium text-sm text-white active:brightness-75"
								>
									Home
								</Link>
							</li>

							<li className="flex w-full items-center justify-center">
								<Link
									href="/sobre"
									className="flex w-full items-center justify-center py-3 font-medium text-sm text-white active:brightness-75"
								>
									Sobre
								</Link>
							</li>

							<li className="flex w-full items-center justify-center">
								<Link
									href="https://wa.me/5514998695347"
									target="_blank"
									className="flex w-full items-center justify-center py-3 font-medium text-sm text-white active:brightness-75"
								>
									Contato
								</Link>
							</li>
						</ul>
					</nav>
				)}

				<nav className="hidden sm:block" aria-label="navbar-desktop">
					<ul className="sm:flex sm:flex-row sm:gap-[76px]">
						<li className="flex w-full items-center justify-center">
							<Link
								href="/"
								className="flex w-full items-center justify-center py-3 font-medium text-white hover:brightness-75 sm:text-base"
							>
								Home
							</Link>
						</li>

						<li className="flex w-full items-center justify-center">
							<Link
								href="/sobre"
								className="flex w-full items-center justify-center py-3 font-medium text-white hover:brightness-75 sm:text-base"
							>
								Sobre
							</Link>
						</li>

						<li className="flex w-full items-center justify-center">
							<Link
								href="https://wa.me/5514998695347"
								target="_blank"
								className="flex w-full items-center justify-center py-3 font-medium text-white hover:brightness-75 sm:text-base"
							>
								Contato
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
