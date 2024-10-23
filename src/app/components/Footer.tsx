import Link from "next/link";

export function Footer() {
	return (
		<footer className="flex flex-col gap-7 bg-green p-6">
			<div className="flex flex-col items-start justify-center gap-[30px]">
				<div className="flex w-full items-center justify-between">
					<h2 className="font-bold text-lg text-white">Naturella</h2>

					<span className="font-normal text-base text-white">
						Bauru, São Paulo
					</span>
				</div>

				<nav className="w-full">
					<ul className="flex items-center justify-between">
						<li>
							<Link href="/" className="font-medium text-base-sm text-white">
								Home
							</Link>
						</li>

						<li>
							<Link
								href="/sobre"
								className="font-medium text-base-sm text-white"
							>
								Sobre
							</Link>
						</li>

						<li>
							<Link
								href="https://wa.me/5514998695347"
								target="_blank"
								className="font-medium text-base-sm text-white"
							>
								Contato
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div className="flex flex-col gap-5">
				<hr className="border-white border-t-[1px]" />

				<p className="font-normal text-base-sm text-white">
					&copy; 2024 Naturella. Todos os direitos reservados
				</p>
			</div>
		</footer>
	);
}
