import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-green">
			<div className="mx-auto flex max-w-[1440px] flex-col gap-7 p-6 lg:gap-12 lg:p-12">
				<div className="flex flex-col items-start justify-center gap-[30px] lg:flex-row lg:items-end lg:justify-start lg:gap-36">
					<div className="flex w-full items-center justify-between lg:w-auto lg:flex-col lg:items-start lg:gap-[50px]">
						<h2 className="font-bold text-lg text-white lg:text-xl">
							Naturella
						</h2>

						<span className="font-normal text-base text-white">
							Bauru, São Paulo
						</span>
					</div>

					<nav className="w-full lg:w-auto">
						<ul className="flex items-center justify-between lg:gap-36">
							<li>
								<Link
									href="/"
									className="font-medium text-base-sm text-white lg:text-base"
								>
									Home
								</Link>
							</li>

							<li>
								<Link
									href="/sobre"
									className="font-medium text-base-sm text-white lg:text-base"
								>
									Sobre
								</Link>
							</li>

							<li>
								<Link
									href="https://wa.me/5514998695347"
									target="_blank"
									className="font-medium text-base-sm text-white lg:text-base"
								>
									Contato
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="flex flex-col gap-5 lg:gap-[35px]">
					<hr className="border-white border-t-[1px]" />

					<p className="font-normal text-base-sm text-white lg:text-base">
						&copy; 2024 Naturella. Todos os direitos reservados
					</p>
				</div>
			</div>
		</footer>
	);
}