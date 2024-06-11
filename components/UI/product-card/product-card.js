import Button from "../button";
import NewProductIndicator from "../new-product-indicator";
import AddToCartForm from "./add-to-cart-form";
import ProductGallery from "./product-gallery";
import ProductImage from "./product-image";

function ProductCard({ product }) {
  return (
    <>
      <ProductImage product={product} />
      {product?.new && (
        <div className="mt-5">
          <NewProductIndicator />
        </div>
      )}
      <h1 className="text-[28px] leading-10 font-bold tracking-wider uppercase my-5 text-charcoal-gray">
        {product.name}
      </h1>
      <p className="font-normal text-charcoal-gray/60 text-[15px] leading-6">
        {product.description}
      </p>
      <span className="block text-lg font-bold text-charcoal-gray tracking-wider my-5">
        {formatPrice(product.price)}
      </span>
      <div className="mb-20">
        <AddToCartForm />
      </div>
      <div className="mb-20">
        <h2 className="text-[24px] leading-10 font-bold tracking-wider uppercase my-5 text-charcoal-gray">
          Features
        </h2>
        <div className="flex flex-col gap-5">
          {formatFeatures(product.features)}
        </div>
      </div>
      <div className="mb-20">
        <h3 className="text-[24px] leading-10 font-bold tracking-wider uppercase my-5 text-charcoal-gray">
          In The Box
        </h3>
        <ul>
          {product.includes?.map((item, index) => (
            <li key={index} className="flex gap-4">
              <span className="min-w-[30px] text-base font-bold text-primary-index">
                {item.quantity}x
              </span>
              <span className="font-medium text-base text-charcoal-gray/50">
                {item.item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-20">
        <ProductGallery gallery={product.gallery} alt={product.name} />
      </div>
      <div className="my-20">
        <h4 className="text-center text-[24px] leading-10 font-bold tracking-wider uppercase my-5 text-charcoal-gray">
          You may also like
        </h4>
        <ul>
          {product.others?.map((other, index) => (
            <li key={index} className="mb-20">
              <ProductImage product={other} />
              <h5 className="text-center text-[24px] leading-10 font-bold tracking-wider uppercase my-5 text-charcoal-gray">
                {other.name}
              </h5>
              <div className="text-center mt-10 mx-20">
                <Button type="link" href={`/${other.slug}`}>
                  See Product
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductCard;
