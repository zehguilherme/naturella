import Link from "next/link";
import type { Metadata, Viewport } from "next";

import { Header } from "./components/Header";
import { Category } from "./components/Category";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";

import white_round_tray from "./img/white_round_tray.jpg";
import vasesSets from "./img/vases_sets.jpg";
import scented_candle from "./img/scented_candle.jpg";
import sheet_tray from "./img/sheet_tray.png";
import macrame_panel from "./img/macrame_panel.png";
import door_weight from "./img/door_weight.png";
import white_oval_tray from "./img/white_oval_tray.png";
import pink_round_tray from "./img/pink_round_tray.png";
import three_vases from "./img/three_vases.png";
import mini_vases from "./img/mini_vases.png";
import rose_macrame from "./img/rose_macrame.png";

export const metadata: Metadata = {
	title: "Naturella",
	description: "Peças de Decoração Artesanais",
	openGraph: {
		title: "Naturella",
		description: "Peças de Decoração Artesanais",
	},
};

export const viewport: Viewport = {
	themeColor: "#41521F",
};

export default function Home() {
	return (
		<>
			<Header />

			<main>
				<section className="flex h-[calc(100dvh-100px)] items-center justify-center bg-[url('./img/banner.webp')] bg-cover p-6 sm:p-12">
					<div className="w-full max-w-[1440px] sm:flex sm:justify-end">
						<div className="flex flex-col gap-6 rounded-[10px] bg-pink px-[39px] py-[37px] sm:max-w-[643px] sm:gap-[46px]">
							<div className="flex flex-col gap-[17px]">
								<h2 className="font-bold text-3xl text-green capitalize sm:text-5xl">
									Transforme seu espaço agora
								</h2>

								<p className="font-medium text-base-sm text-black sm:text-lg">
									Descubra peças únicas criadas para transformar qualquer
									ambiente com personalidade e sofisticação.
								</p>
							</div>

							<Link
								href="https://www.elo7.com.br/naturellastudio"
								target="_blank"
								className="bg-green px-10 py-[15px] text-center font-bold text-sm text-white uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#2a3614] active:scale-95 active:bg-[#2a3614] sm:max-w-[389px] sm:px-[72px] sm:py-[25px] sm:text-base"
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

					<div className="flex flex-col gap-8 lg:flex-row">
						<Category
							imageSrc={vasesSets}
							imageAlt="Imagem de 2 vasos de concreto brancos em cima de uma bandeja de concreto branca. O vaso maior possui uma planta dentro e outro menor contendo uma tampa"
							categoryName="Vasos e Conjuntos"
						/>

						<Category
							imageSrc={white_round_tray}
							imageAlt="Imagem de uma bandeja de concreto branca com uma borda estilizada"
							categoryName="Bandejas"
						/>

						<Category
							imageSrc={scented_candle}
							imageAlt="Imagem de uma vela aromática branca acesa juntamente de uma planta pequena ao lado"
							categoryName="Velas Aromáticas"
						/>
					</div>
				</section>

				<section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-8 p-6 sm:p-12">
					<h2 className="text-center font-bold text-2xl text-gray-gray2 capitalize sm:text-4xl">
						Nossos produtos
					</h2>

					<div className="flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2 sm:items-start sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
						<Product
							imageSrc={macrame_panel}
							imageAlt="Imagem de um painel de macramê branco, verde musgo e verde escuro"
							productName="Painel Macramê"
							description="Painel Minimalista - Branco, Verde Musgo e Verde Escuro"
						/>

						<Product
							imageSrc={door_weight}
							imageAlt="Imagem de um peso de porta de concreto com uma faixa preta e outra dourada"
							productName="Peso de Porta Concreto Faixa Preta e Dourada"
							description="Peso de porta faixa preta e dourada"
						/>

						<Product
							imageSrc={white_oval_tray}
							imageAlt="Imagem de uma bandeja oval branca em concreto"
							productName="Bandeja Oval"
							description="Bandeja oval em concreto"
						/>

						<Product
							imageSrc={pink_round_tray}
							imageAlt="Imagem de uma bandeja redonda rosa em concreto"
							productName="Bandeja Redonda Tabata - Rosa"
							description="Bandeja em cimento branco com cor"
						/>

						<Product
							imageSrc={white_round_tray}
							imageAlt="Imagem de uma bandeja redonda branca em concreto com pedras pretas"
							productName="Bandeja Redonda Tabata - Granilite"
							description="Bandeja decorativa em concreto branco com pedras pretas"
						/>

						<Product
							imageSrc={three_vases}
							imageAlt="Imagem de 3 vasos de concreto coloridos nas cores rosa, preto e branco"
							productName="Vaso Lily - Diversas Cores"
							description="Vaso feito de concreto colorido"
						/>

						<Product
							imageSrc={sheet_tray}
							productName="Bandeja Costela de Adão"
							imageAlt="Imagem de uma bandeja de concreto no formato de uma folha com pintura marmorizada verde e branca"
							description="Bandeja de concreto com pintura marmorizada verde e branco"
						/>

						<Product
							imageSrc={mini_vases}
							productName="Kit Vasinhos P&b"
							imageAlt="Imagem de 3 vasinhos de cimento com uma faixa na cor preta"
							description="Kit de 3 vasinhos de cimento com pintura preta. Ideal para colocar plantas e decorar como quiser!"
						/>

						<Product
							imageSrc={vasesSets}
							productName="Conjunto White"
							imageAlt="Imagem de um conjunto de vasos de concreto branco. O conjunto contém uma bandeja redonda em granilite, um vasinho redondo com tampa e um vaso alto redondo"
							description="Conjunto feito em concreto branco, contendo: ATENÇÃO: PLANTA NÃO INCLUSA. 1 bandeja redonda em granilite. 1 vasinho com tampa. 1 vaso alto"
						/>

						<Product
							imageSrc={rose_macrame}
							imageAlt="Imagem de um cachepô com macramê na cor rosê"
							productName="Cachepô com Macramê Rosê"
							description="Suporte de plantas em macrame. Madeira tratada."
						/>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
