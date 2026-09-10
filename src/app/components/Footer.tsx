import Link from "next/link";
import { Globe, Mail } from "lucide-react";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-green p-6 lg:p-12">
			<div className="mx-auto flex max-w-[1440px] flex-col gap-7 lg:gap-12">
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
							<li className="transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
								<Link
									href="/"
									className="font-medium text-base-sm text-white hover:brightness-75 active:brightness-75 lg:text-base"
								>
									Home
								</Link>
							</li>

							<li className="transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
								<Link
									href="/sobre"
									className="font-medium text-base-sm text-white hover:brightness-75 active:brightness-75 lg:text-base"
								>
									Sobre
								</Link>
							</li>

							<li className="transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
								<Link
									href="https://wa.me/5514998695347"
									target="_blank"
									className="font-medium text-base-sm text-white hover:brightness-75 active:brightness-75 lg:text-base"
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
						&copy; {currentYear} Naturella. Todos os direitos
						reservados
					</p>

					<p className="font-normal text-base-sm text-white lg:text-base">
						Feito por José Guilherme
					</p>

					<div className="flex gap-2">
						<Link
							href="https://joseguilherme.vercel.app/"
							target="_blank"
							rel="noreferrer"
							aria-label="Portfólio"
							title="Portfólio"
							className="inline-flex size-8 items-center justify-center rounded-md border border-white/40 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
						>
							<Globe aria-hidden="true" size={16} />
						</Link>
						<Link
							href="https://github.com/zehguilherme"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
							title="GitHub"
							className="inline-flex size-8 items-center justify-center rounded-md border border-white/40 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
						>
							<svg
								aria-hidden="true"
								className="size-4"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
							</svg>
						</Link>
						<Link
							href="https://www.linkedin.com/in/jos%C3%A9-guilherme-paro-monteiro-tomaine/"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
							title="LinkedIn"
							className="inline-flex size-8 items-center justify-center rounded-md border border-white/40 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
						>
							<svg
								aria-hidden="true"
								className="size-4"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h3.96V21H3V9.75ZM9.5 9.75h3.8v1.54h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-3.96v-5.01c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.31-1.94 2.66V21H9.5V9.75Z" />
							</svg>
						</Link>
						<Link
							href="mailto:jgtomaine@hotmail.com"
							aria-label="E-mail"
							title="E-mail"
							className="inline-flex size-8 items-center justify-center rounded-md border border-white/40 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
						>
							<Mail aria-hidden="true" size={16} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
