import Link from "next/link";
import type { Metadata } from "next";

import { Header } from "./components/Header";
import { Category } from "./components/Category";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";

import vases from "./img/vases.png";
import parts from "./img/parts.png";

export const metadata: Metadata = {
	title: "Home - Naturella",
	description: "Página principal da empresa.",
	openGraph: {
		title: "Home - Naturella",
		description: "Página principal da empresa.",
		url: "https://naturella.vercel.app/",
		siteName: "Naturella",
		images: [
			{
				url: "./img/openGraph.png",
				width: 1200,
				height: 630,
				alt: "Naturella",
			},
		],
		locale: "pt_BR",
		type: "website",
		countryName: "Brasil",
		phoneNumbers: ["+55 14 99869-5347"],
	},
};

export default function Home() {
	return (
		<>
			<Header />

			<main>
				<section className="flex h-[calc(100vh-100px)] items-center justify-center bg-[url('./img/banner.jpg')] bg-cover p-6 sm:p-12">
					<div className="w-full max-w-[1440px] sm:flex sm:justify-end">
						<div className="flex flex-col gap-6 rounded-[10px] bg-pink px-[39px] py-[37px] sm:max-w-[643px] sm:gap-[46px]">
							<div className="flex flex-col gap-[17px]">
								<h1 className="font-bold text-3xl text-green capitalize sm:text-5xl">
									Transforme seu espaço agora
								</h1>

								<p className="font-medium text-base-sm text-black sm:text-lg">
									Descubra peças únicas que combinam a solidez do concreto com a
									delicadeza do macramê, criadas para transformar qualquer
									ambiente com personalidade e sofisticação.
								</p>
							</div>

							<Link
								href="#"
								className="bg-green px-10 py-[15px] text-center font-bold text-sm text-white uppercase sm:max-w-[389px] sm:px-[72px] sm:py-[25px] sm:text-base"
							>
								Quero decorar minha casa
							</Link>
						</div>
					</div>
				</section>

				<section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-8 p-6 sm:gap-[62px] sm:p-12">
					<h2 className="text-center font-bold text-2xl text-gray-gray2 capitalize sm:text-4xl">
						Explore nossas categorias
					</h2>

					<div className="flex flex-col gap-5 lg:flex-row lg:gap-8">
						<Category
							imageSrc={vases}
							imageAlt="Imagem de 2 vasos de concreto contendo as cores rosa claro, dourado e cinza, além de possuir dentro de cada um deles algumas plantas"
							categoryName="Vasos"
						/>

						<Category
							imageSrc={vases}
							imageAlt="Imagem de 2 vasos de concreto contendo as cores rosa claro, dourado e cinza, além de possuir dentro de cada um deles algumas plantas"
							categoryName="Vasos"
						/>

						<Category
							imageSrc={vases}
							imageAlt="Imagem de 2 vasos de concreto contendo as cores rosa claro, dourado e cinza, além de possuir dentro de cada um deles algumas plantas"
							categoryName="Vasos"
						/>
					</div>
				</section>

				<section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-8 p-6 sm:p-12">
					<h2 className="text-center font-bold text-2xl text-gray-gray2 capitalize sm:text-4xl">
						Nossos produtos
					</h2>

					<div className="flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
						<Product
							imageSrc={parts}
							imageAlt="3 peças de concreto (porta sabonete líquido, vaso de plantas e uma bandeja) coloridas com uma mistura de várias cores"
							productName="Vaso"
							productDescription="Lorem ipsum dolor sit amet."
						/>

						<Product
							imageSrc={parts}
							imageAlt="3 peças de concreto (porta sabonete líquido, vaso de plantas e uma bandeja) coloridas com uma mistura de várias cores"
							productName="Vaso"
							productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>

						<Product
							imageSrc={parts}
							imageAlt="3 peças de concreto (porta sabonete líquido, vaso de plantas e uma bandeja) coloridas com uma mistura de várias cores"
							productName="Vaso"
							productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut odio
					commodo, maximus orci nec, finibus lacus. Morbi at sodales ligula.
					Mauris dignissim tempus justo eu accumsan. Aliquam vel sodales magna,
					nec rutrum enim. Cras pretium finibus arcu, a semper risus luctus at.
					Maecenas iaculis quis arcu et condimentum. Vestibulum sit amet risus
					vitae dui mattis tristique. Sed feugiat mattis enim ac pharetra. Etiam
					vitae quam egestas, aliquet justo lacinia, luctus diam. Duis tempor
					ornare eros et tempor."
						/>

						<Product
							imageSrc={parts}
							imageAlt="3 peças de concreto (porta sabonete líquido, vaso de plantas e uma bandeja) coloridas com uma mistura de várias cores"
							productName="Vaso"
							productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut odio
					commodo, maximus orci nec, finibus lacus. Morbi at sodales ligula.
					Mauris dignissim tempus justo eu accumsan. Aliquam vel sodales magna,
					nec rutrum enim. Cras pretium finibus arcu, a semper risus luctus at.
					Maecenas iaculis quis arcu et condimentum. Vestibulum sit amet risus
					vitae dui mattis tristique. Sed feugiat mattis enim ac pharetra. Etiam
					vitae quam egestas, aliquet justo lacinia, luctus diam. Duis tempor
					ornare eros et tempor."
						/>

						<Product
							imageSrc={parts}
							imageAlt="3 peças de concreto (porta sabonete líquido, vaso de plantas e uma bandeja) coloridas com uma mistura de várias cores"
							productName="Vaso"
							productDescription="Lorem ipsum dolor sit amet."
						/>

						<Product
							imageSrc={parts}
							imageAlt="3 peças de concreto (porta sabonete líquido, vaso de plantas e uma bandeja) coloridas com uma mistura de várias cores"
							productName="Vaso"
							productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
