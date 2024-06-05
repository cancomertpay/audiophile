import Image from "next/image";

function ProductImage({ product, category = false }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={category ? product.categoryImage.mobile : product.image.mobile}
        alt={product.name}
        width={327}
        height={327}
        className="md:hidden w-full h-auto min-w-[327px] min-h-[327px] rounded-lg"
      />
      <Image
        src={category ? product.categoryImage.tablet : product.image.tablet}
        alt={product.name}
        width={689}
        height={352}
        className={`hidden md:block lg:hidden rounded-lg ${
          category
            ? "w-full h-auto min-w-[689px] min-h-[352px]"
            : "w-full h-auto"
        }`}
      />
      <Image
        src={category ? product.categoryImage.desktop : product.image.desktop}
        alt={product.name}
        width={327}
        height={327}
        className="hidden lg:block w-full h-auto rounded-lg"
      />
    </div>
  );
}

export default ProductImage;
