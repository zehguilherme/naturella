import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Naturella",
	description: "Peças de Decoração Artesanais",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
