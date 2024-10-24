import Image, { type StaticImageData } from "next/image";

type ProductProps = {
	imageSrc: StaticImageData;
	imageAlt: string;
	productName: string;
	productDescription: string;
};

export function Product({
	imageSrc,
	imageAlt,
	productName,
	productDescription,
}: ProductProps) {
	return (
		<article className="max-w-[345px] sm:max-w-[285px]">
			<Image src={imageSrc} alt={imageAlt} />

			<div className="flex flex-col items-start justify-start gap-2 bg-gray-gray1 p-4 sm:h-[148px]">
				<h3 className="font-semibold text-gray-gray3 text-lg sm:text-xl">
					{productName}
				</h3>

				<p className="line-clamp-3 font-medium text-gray-gray4 text-sm sm:text-base">
					{productDescription}
				</p>
			</div>
		</article>
	);
}
