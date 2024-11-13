import Image, { type StaticImageData } from "next/image";

type CategoryProps = {
	imageSrc: StaticImageData;
	imageAlt: string;
	categoryName: string;
};

export function Category({ imageSrc, imageAlt, categoryName }: CategoryProps) {
	return (
		<figure className="flex flex-col items-center justify-start gap-4 lg:gap-[30px]">
			<div className="h-[434.41px] w-full max-w-[345px] lg:h-full lg:max-h-[481px] lg:w-full lg:max-w-[382px]">
				<Image
					src={imageSrc}
					alt={imageAlt}
					className="h-full w-full object-cover object-center"
					placeholder="blur"
				/>
			</div>

			<figcaption className="font-semibold text-black text-lg sm:text-xl">
				{categoryName}
			</figcaption>
		</figure>
	);
}
