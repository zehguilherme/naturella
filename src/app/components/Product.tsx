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
		<article className="max-w-[345px]">
			<Image src={imageSrc} alt={imageAlt} />

			<div className="flex flex-col items-start justify-center gap-2 bg-gray-gray1 p-4">
				<h3 className="font-semibold text-gray-gray3 text-lg">{productName}</h3>

				<p className="line-clamp-3 font-medium text-gray-gray4 text-sm">
					{productDescription}
				</p>
			</div>
		</article>
	);
}
