import type { Metadata } from "next";
import Image from "next/image";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import profile from "../img/profile.png";

export const metadata: Metadata = {
	title: "Sobre - Naturella",
	description: "Informações gerais sobre a empresa",
	openGraph: {
		title: "Sobre - Naturella",
		description: "Informações gerais sobre a empresa",
		url: "https://naturellastudio.vercel.app/",
		siteName: "Naturella",
		images: [
			{
				url: "https://naturellastudio.vercel.app/openGraph.png",
				width: 1200,
				height: 630,
				alt: "Logo do Naturella",
			},
		],
		locale: "pt_BR",
		type: "website",
		countryName: "Brasil",
		phoneNumbers: ["+55 14 99869-5347"],
	},
};

export default function About() {
	return (
		<>
			<Header />

			<main className="mx-auto max-w-[1440px] p-6 lg:p-12">
				<div className="mx-auto flex max-w-[840px] flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:gap-8">
					<Image
						src={profile}
						alt="Imagem de uma mulher negra de cabelos cacheados, com uma camisa branca e que está de braços cruzados"
						priority
						width={350}
					/>

					<div className="flex flex-col gap-5">
						<p className="font-medium text-base-sm text-black lg:text-lg">
							Bem-vindo ao nosso espaço dedicado à arte e funcionalidade do
							concreto! Nosso trabalho é transformar um dos materiais mais
							duráveis e versáteis do mundo em peças únicas que aliam design,
							resistência e praticidade.
						</p>

						<p className="font-medium text-base-sm text-black lg:text-lg">
							Cada peça é cuidadosamente elaborada, desde o planejamento até a
							finalização, garantindo um alto padrão de qualidade para quem
							valoriza tanto a estética quanto a durabilidade. Oferecemos desde
							itens decorativos até peças funcionais, perfeitas para projetos de
							arquitetura, design de interiores ou paisagismo.
						</p>

						<p className="font-medium text-base-sm text-black lg:text-lg">
							Nosso compromisso é entregar soluções criativas e robustas,
							ajudando você a trazer mais estilo e modernidade aos seus
							ambientes. Explore nossas coleções e descubra como o concreto pode
							transformar qualquer espaço com elegância e resistência.
						</p>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
