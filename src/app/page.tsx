import Link from "next/link";

import { Header } from "./components/Header";

export default function Home() {
	return (
		<>
			<Header />

			<main>
				<section className="bg-[url('./img/banner.jpg')] bg-cover p-6 flex justify-center items-center h-[calc(100vh-100px)]">
					<div className="bg-pink px-[39px] py-[37px] flex flex-col gap-6 rounded-[10px]">
						<div className="flex flex-col gap-[17px]">
							<h1 className="capitalize text-green text-3xl font-bold">
								Transforme seu espaço agora
							</h1>

							<p className="text-black text-base-sm font-medium">
								Descubra peças únicas que combinam a solidez do concreto com a
								delicadeza do macramê, criadas para transformar qualquer
								ambiente com personalidade e sofisticação.
							</p>
						</div>

						<Link
							href="#"
							className="uppercase bg-green text-white text-sm font-bold px-10 py-[15px] text-center"
						>
							Quero decorar minha casa
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
