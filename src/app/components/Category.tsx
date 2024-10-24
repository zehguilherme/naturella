import Image, { type StaticImageData } from "next/image";

type CategoryProps = {
	imageSrc: StaticImageData;
	imageAlt: string;
	categoryName: string;
};

export function Category({ imageSrc, imageAlt, categoryName }: CategoryProps) {
	return (
		<figure className="flex flex-col items-center gap-4 sm:gap-[30px]">
			<Image src={imageSrc} alt={imageAlt} />

			<figcaption className="font-semibold text-black text-lg sm:text-xl">
				{categoryName}
			</figcaption>
		</figure>
	);
}
