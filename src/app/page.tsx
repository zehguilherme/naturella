import Link from "next/link";
import type { Metadata, Viewport } from "next";

import { Header } from "./components/Header";
import { Category } from "./components/Category";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";

import white_round_tray from "./img/white_round_tray.png";
import vasesSets from "./img/vases_sets.jpg";
import scented_candle from "./img/scented_candle.jpg";
import sheet_tray from "./img/sheet_tray.png";
import macrame_panel from "./img/macrame_panel.png";
import door_weight from "./img/door_weight.png";
import white_oval_tray from "./img/white_oval_tray.png";
import three_vases from "./img/three_vases.png";
import mini_vases from "./img/mini_vases.png";
import rose_macrame from "./img/rose_macrame.png";
import fluted_vase from "./img/fluted_vase.png";
import granite_tray_vases_set from "./img/granite_tray_vases_set.png";
import type { StaticImageData } from "next/image";

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

interface ProductsType {
	imageSrc: StaticImageData;
	imageAlt: string;
	productName: string;
	description: string;
	url: string;
}

export default function Home() {
	const products: ProductsType[] = [
		{
			imageSrc: macrame_panel,
			imageAlt:
				"Imagem de um painel de macramê branco, verde musgo e verde escuro",
			productName: "Painel Macramê",
			description: "Painel Minimalista - Branco, Verde Musgo e Verde Escuro",
			url: "https://www.elo7.com.br/painel-macrame/dp/1E44FC4#...",
		},
		{
			imageSrc: door_weight,
			imageAlt:
				"Imagem de um peso de porta de concreto com uma faixa preta e outra dourada",
			productName: "Peso de Porta Concreto Faixa Preta e Dourada",
			description: "Peso de porta faixa preta e dourada",
			url: "https://www.elo7.com.br/peso-de-porta-concreto-faixa-preta-e-dourada/dp/1CCABE3#...",
		},
		{
			imageSrc: white_oval_tray,
			imageAlt: "Imagem de uma bandeja oval branca em concreto",
			productName: "Bandeja Oval - Diversas Cores",
			description:
				"Bandeja marmorizada oval. Todas as peças são impermeabilizadas e podem ser feitas de diversas tonalidades. Perfeita para qualquer ambiente!",
			url: "https://www.elo7.com.br/bandeja-oval-cores-diversas/dp/1E45002#dvbc=1&dwhc=1&dcc=0&ee7b=0&lpfcm=1&sedk=1&osrlt7=0&sek=0&wch=0&sbc=1&ses=1&pssb=0&seb=0&dtm1=0&usb=0&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&efs=1&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&utp=0&dld=1&uje=0&carf=1&sgta=1&wpm=0&efsh=1&sed=1&sea=0&pdp=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&cscws=0&uso=o&vsbs=1&deac=0&droam=0&psews=0&set=0&accb=1&sseov=0",
		},
		{
			imageSrc: white_round_tray,
			imageAlt: "Imagem de uma bandeja redonda rosa em concreto",
			productName: "Bandeja Redonda Tabata - Diversas Cores",
			description: "Bandeja em cimento branco com cor",
			url: "https://www.elo7.com.br/bandeja-redonda-tabata-rosa/dp/1F3CDF5#...",
		},
		{
			imageSrc: three_vases,
			imageAlt:
				"Imagem de 3 vasos de concreto coloridos nas cores rosa, preto e branco",
			productName: "Vaso Lily - Diversas Cores",
			description: "Vaso feito de concreto colorido",
			url: "https://www.elo7.com.br/vaso-lily-diversas-cores/dp/1F25397#...",
		},
		{
			imageSrc: sheet_tray,
			imageAlt:
				"Imagem de uma bandeja de concreto no formato de uma folha com pintura marmorizada verde e branca",
			productName: "Bandeja Costela de Adão",
			description:
				"Bandeja de concreto pintada com efeito marmorizado nas cores verde e branco",
			url: "https://www.elo7.com.br/bandeja-costela-de-adao/dp/1F253F2#...",
		},
		{
			imageSrc: mini_vases,
			imageAlt: "Imagem de 3 vasinhos de cimento com uma faixa na cor preta",
			productName: "Kit Vasinhos P&b",
			description:
				"Kit de 3 vasinhos de cimento com pintura preta. Ideal para colocar plantas e decorar como quiser!",
			url: "https://www.elo7.com.br/kit-vasinhos-pb/dp/1DE6083#...",
		},
		{
			imageSrc: fluted_vase,
			imageAlt:
				"Imagem de um vaso de concreto branco com textura canelada vertical",
			productName: "Vaso Canelado Branco",
			description:
				"Vaso canelado fabricado em cimento branco. (Planta não inclusa)",
			url: "https://www.elo7.com.br/vaso-canelado-branco/dp/1F8A5E1#...",
		},
		{
			imageSrc: granite_tray_vases_set,
			imageAlt:
				"Imagem de um conjunto de vasos e bandeja em concreto branco com acabamento em granilite preto. O conjunto contém uma bandeja redonda e dois vasos redondos de tamanhos diferentes",
			productName: "Conjunto Bandeja e Vasos em Granilite",
			description:
				"Conjunto feito em cimento branco estrutural com efeito granilite preto",
			url: "https://www.elo7.com.br/conjunto-bandeja-e-vasos-em-granilite/dp/1F8A574#...",
		},
		{
			imageSrc: vasesSets,
			imageAlt:
				"Imagem de um conjunto de vasos de concreto branco. O conjunto contém uma bandeja redonda em granilite, um vasinho redondo com tampa e um vaso alto redondo",
			productName: "Conjunto White",
			description:
				"Conjunto feito em concreto branco, contendo: 1 bandeja redonda em granilite, 1 vasinho com tampa e 1 vaso alto. (Planta não inclusa)",
			url: "https://www.elo7.com.br/conjunto-white/dp/1F25422#...",
		},
		{
			imageSrc: rose_macrame,
			imageAlt: "Imagem de um cachepô com macramê na cor rosê",
			productName: "Cachepô com Macramê Rosê",
			description: "Suporte de plantas em macrame. Madeira tratada.",
			url: "https://www.elo7.com.br/cachepo-com-macrame-rose/dp/1E33C3F#...",
		},
	];

	return (
		<>
			<Header />

			<main>
				<section className="flex h-[calc(100dvh-100px)] items-center justify-center bg-[url('./img/banner.webp')] bg-cover p-6 sm:p-12">
					<div className="w-full max-w-[1440px] sm:flex sm:justify-end">
						<div className="flex flex-col gap-6 rounded-[10px] bg-yellow px-[39px] py-[37px] sm:max-w-[643px] sm:gap-[46px]">
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
						{products.map((product, index) => (
							<Product
								key={index}
								imageSrc={product.imageSrc}
								imageAlt={product.imageAlt}
								productName={product.productName}
								description={product.description}
								url={product.url}
							/>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
