import type { Metadata } from "next";
import Link from "next/link";

import { NotFoundIcon } from "./icons/NotFoundIcon";

export const metadata: Metadata = {
	title: "Página Não Encontrada - Naturella",
	description: "Página não encontrada",
};

export default function NotFound() {
	return (
		<main className="flex h-screen flex-col items-center justify-center gap-20 p-6 sm:p-12">
			<h1 className="text-center font-bold text-2xl text-black capitalize sm:text-4xl">
				Página não encontrada
			</h1>

			<NotFoundIcon className="max-h-96" />

			<Link
				href="/"
				className="bg-green px-10 py-[15px] text-center font-bold text-sm text-white uppercase sm:max-w-[389px] sm:px-[72px] sm:py-[25px] sm:text-base"
			>
				Voltar para a Home
			</Link>
		</main>
	);
}
