import Image, { type StaticImageData } from "next/image";

type CategoryProps = {
	imageSrc: StaticImageData;
	imageAlt: string;
	categoryName: string;
};

export function Category({ imageSrc, imageAlt, categoryName }: CategoryProps) {
	return (
		<div className="flex flex-col gap-5">
			<figure className="flex flex-col items-center gap-4">
				<Image src={imageSrc} alt={imageAlt} />

				<figcaption className="font-semibold text-black text-lg">
					{categoryName}
				</figcaption>
			</figure>
		</div>
	);
}
