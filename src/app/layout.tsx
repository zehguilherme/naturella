import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Naturella",
	description: "Peças de Decoração Artesanais",
	openGraph: {
		title: "Naturella",
		description: "Página principal da empresa.",
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className={poppins.className}>
			<body>{children}</body>
		</html>
	);
}
