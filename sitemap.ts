import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://naturellastudio.vercel.app",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://naturellastudio.vercel.app/sobre",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
	];
}
