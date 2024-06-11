import NavList from "@/components/header/nav-list";
import Button from "@/components/UI/button";
import GoBackButton from "@/components/UI/go-back-button";
import NewProductIndicator from "@/components/UI/new-product-indicator";
import AddToCartForm from "@/components/UI/product-card/add-to-cart-form";
import ProductGallery from "@/components/UI/product-card/product-gallery";
import ProductImage from "@/components/UI/product-card/product-image";
import formatPrice from "@/utils/currency-formatter";
import formatFeatures from "@/utils/fotmat-product-features";
import ThumbnailImage from "./thumbnail-image";

function ProductDetailLayout({ product }) {
  return (
    <div className="mx-6 md:mx-10 lg:mx-36">
      <GoBackButton />
      <>
        {product ? (
          <>
            <div className="md:flex items-center justify-between gap-16 md:mb-28">
              <div className="md:w-1/2">
                <ProductImage product={product} />
              </div>
              <div className="md:w-1/2">
                {product.new && (
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
                <div className="mb-20 lg:pr-52">
                  <AddToCartForm
                    product={{
                      id: product.id,
                      image: product.image,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:flex">
              <div className="mb-20 lg:w-1/2">
                <h2 className="text-[24px] lg:text-[32px] font-bold tracking-wider uppercase my-5 text-charcoal-gray">
                  Features
                </h2>
                <div className="flex flex-col gap-5">
                  {formatFeatures(product.features)}
                </div>
              </div>
              <div className="mb-20 md:flex md:justify-start md:gap-40 lg:gap-0 lg:flex-col lg:justify-stretch lg:items-center lg:w-1/2">
                <h3 className="text-[24px] lg:text-[32px] font-bold tracking-wider uppercase my-5 text-charcoal-gray md:my-0 lg:my-5">
                  In The Box
                </h3>
                <ul>
                  {product.includes?.map((item, index) => (
                    <li key={index} className="flex gap-4 lg:mb-2">
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
            </div>
            <div className="mt-20 lg:mb-40">
              <ProductGallery gallery={product.gallery} alt={product.name} />
            </div>
            <div className="my-20 md:mb-0 lg:mb-20">
              <h4 className="text-center text-[24px] leading-10 font-bold tracking-wider uppercase my-5 text-charcoal-gray">
                You may also like
              </h4>
              <ul className="md:flex md:items-stretch md:justify-center md:gap-3">
                {product.others?.map((other, index) => (
                  <li key={index} className="mb-20 w-1/3">
                    <ThumbnailImage product={other} />
                    <h5 className="text-center text-[24px] leading-10 font-bold tracking-wider uppercase my-5 md:mb-0 text-charcoal-gray">
                      {other.name}
                    </h5>
                    <div className="text-center mt-10 mx-16 md:mx-5 lg:mx-20">
                      <Button
                        type="link"
                        href={`/${other?.category}/${other.slug}`}
                      >
                        See Product
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="mb-20 w-full bg-off-white py-20 rounded-lg">
            <span className="block text-center text-8xl mb-5 font-bold text-charcoal-gray animate-pulse">
              404
            </span>
            <span className="block text-3xl text-center text-charcoal-gray/50">
              Product not found!
            </span>
          </div>
        )}
      </>
      <div className="my-14">
        <NavList />
      </div>
    </div>
  );
}

export default ProductDetailLayout;
