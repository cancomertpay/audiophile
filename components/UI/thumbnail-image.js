import Image from "next/image";

function ThumbnailImage({ product }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={product.image.mobile}
        alt={product.name}
        width={327}
        height={120}
        className="md:hidden w-full rounded-lg"
      />
      <Image
        src={product.image.tablet}
        alt={product.name}
        width={223}
        height={318}
        className={`hidden md:block lg:hidden rounded-lg`}
      />
      <Image
        src={product.image.desktop}
        alt={product.name}
        width={327}
        height={327}
        className="hidden lg:block w-full h-auto rounded-lg"
      />
    </div>
  );
}

export default ThumbnailImage;
