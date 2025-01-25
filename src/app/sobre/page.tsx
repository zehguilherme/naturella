import type { Metadata, Viewport } from "next";
import Image from "next/image";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import profile from "../img/profile.png";

export const metadata: Metadata = {
	title: "Sobre - Naturella",
	description: "Informações gerais sobre a Naturella",
	openGraph: {
		title: "Sobre - Naturella",
		description: "Informações gerais sobre a Naturella",
	},
};

export const viewport: Viewport = {
	themeColor: "#41521F",
};

export default function About() {
	return (
		<>
			<Header />

			<main className="mx-auto flex max-w-[1440px] flex-1 items-center p-6 lg:p-12">
				<div className="mx-auto flex max-w-[840px] flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:gap-8">
					<Image
						src={profile}
						alt="Imagem de uma mulher negra de cabelos cacheados, com uma camisa branca e que está de braços cruzados"
						priority
						width={350}
						placeholder="blur"
					/>

					<div className="flex flex-col gap-5">
						<p className="font-medium text-base-sm text-black lg:text-lg">
							Sou Amanda, arquiteta e empreendedora.
						</p>

						<p className="font-medium text-base-sm text-black lg:text-lg">
							Minha missão: levar um pouquinho de amor pra dentro da sua casa,
							através do meu trabalho.
						</p>

						<p className="font-medium text-base-sm text-black lg:text-lg">
							Tenho grande variedade em itens de concreto com alta qualidade,
							linhas com peças diferenciadas que podem ser usadas em vários
							ambientes.
						</p>

						<p className="font-medium text-base-sm text-black lg:text-lg">
							Cada item é preparado cuidadosamente de forma manual, ou seja, o
							processo de fabricação faz com que cada peça seja única.
						</p>

						<p className="font-medium text-base-sm text-black lg:text-lg">
							Meu intuito é que você consiga criar uma identificação com as
							peças e possa decorar aquele cantinho especial do seu ambiente,
							fazendo com que ele fique leve e cheio de amor e carinho que cada
							item carrega consigo.
						</p>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
