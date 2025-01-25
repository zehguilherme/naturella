import Image, { type StaticImageData } from "next/image";

type ProductProps = {
	imageSrc: StaticImageData;
	imageAlt: string;
	productName: string;
	description: string;
};

export function Product({
	imageSrc,
	imageAlt,
	productName,
	description,
}: ProductProps) {
	return (
		<article className="flex h-full max-w-[345px] flex-col sm:max-w-[285px]">
			<Image
				src={imageSrc}
				alt={imageAlt}
				className="aspect-square object-cover object-center"
			/>

			<div className="flex h-full flex-col items-start justify-start gap-2 bg-gray-gray1 p-4">
				<h3 className="font-semibold text-gray-gray3 text-lg sm:text-xl">
					{productName}
				</h3>

				<span className="font-medium text-gray-gray4 text-sm sm:text-base">
					{description}
				</span>
			</div>
		</article>
	);
}
