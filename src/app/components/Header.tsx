"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "../icons/Logo";
import { Menu, X } from "lucide-react";

export function Header() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	function handleMenuOpeningAndClosing() {
		setMenuIsOpen(!menuIsOpen);
	}

	const menuVariants = {
		closed: {
			height: 0,
			opacity: 0,
			transition: {
				height: {
					duration: 0.3,
					ease: "easeInOut",
				},
				opacity: {
					duration: 0.2,
				},
			},
		},
		open: {
			height: "auto",
			opacity: 1,
			transition: {
				height: {
					duration: 0.3,
					ease: "easeInOut",
				},
				opacity: {
					duration: 0.3,
					delay: 0.1,
				},
			},
		},
	};

	const menuItemVariants = {
		closed: {
			y: -8,
			opacity: 0,
		},
		open: () => ({
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
			},
		}),
	};

	return (
		<header className="bg-green px-6 sm:px-12">
			<div className="mx-auto max-w-[1440px] sm:flex sm:items-center sm:justify-between">
				<div className="flex items-center justify-between">
					<h1>
						<Link href="/">
							<Logo />
						</Link>
					</h1>

					<motion.button
						className="p-2 sm:hidden"
						type="button"
						onClick={handleMenuOpeningAndClosing}
						aria-label={`${
							menuIsOpen
								? "Botão contendo a letra X"
								: "Botão com ícone de um hambúrguer"
						}`}
						whileTap={{ scale: 0.95 }}
					>
						<AnimatePresence mode="wait">
							{menuIsOpen ? (
								<motion.div
									key="close"
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<X color="white" size={32} />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<Menu color="white" size={32} />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.button>
				</div>

				<AnimatePresence>
					{menuIsOpen && (
						<motion.nav
							className="sm:hidden"
							aria-label="navbar-mobile"
							initial="closed"
							animate="open"
							exit="closed"
							variants={menuVariants}
						>
							<ul className="flex flex-col items-center justify-center">
								<motion.li
									className="flex w-full items-center justify-center"
									variants={menuItemVariants}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Link
										href="/"
										className="flex w-full items-center justify-center py-3 font-medium text-sm text-white hover:brightness-75 active:brightness-75"
									>
										Home
									</Link>
								</motion.li>

								<motion.li
									className="flex w-full items-center justify-center"
									variants={menuItemVariants}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Link
										href="/sobre"
										className="flex w-full items-center justify-center py-3 font-medium text-sm text-white hover:brightness-75 active:brightness-75"
									>
										Sobre
									</Link>
								</motion.li>

								<motion.li
									className="flex w-full items-center justify-center"
									variants={menuItemVariants}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Link
										href="https://wa.me/5514998695347"
										target="_blank"
										className="flex w-full items-center justify-center py-3 font-medium text-sm text-white hover:brightness-75 active:brightness-75"
									>
										Contato
									</Link>
								</motion.li>
							</ul>
						</motion.nav>
					)}
				</AnimatePresence>

				<nav className="hidden sm:block" aria-label="navbar-desktop">
					<ul className="sm:flex sm:flex-row sm:gap-[76px]">
						<motion.li
							className="flex w-full items-center justify-center"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/"
								className="flex w-full items-center justify-center py-3 font-medium text-white hover:brightness-75 sm:text-base"
							>
								Home
							</Link>
						</motion.li>

						<motion.li
							className="flex w-full items-center justify-center"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/sobre"
								className="flex w-full items-center justify-center py-3 font-medium text-white hover:brightness-75 sm:text-base"
							>
								Sobre
							</Link>
						</motion.li>

						<motion.li
							className="flex w-full items-center justify-center"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="https://wa.me/5514998695347"
								target="_blank"
								className="flex w-full items-center justify-center py-3 font-medium text-white hover:brightness-75 sm:text-base"
							>
								Contato
							</Link>
						</motion.li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
