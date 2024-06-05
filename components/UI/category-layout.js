import NavList from "../header/nav-list";
import Button from "./button";
import NewProductIndicator from "./new-product-indicator";
import ProductImage from "./product-card/product-image";

function CategoryLayout({ categoryName, data }) {
  return (
    <div>
      <div className="p-6 md:p-16 lg:p-20 bg-black text-center">
        <h1 className="text-white text-[28px] font-bold tracking-widest uppercase">
          {categoryName}
        </h1>
      </div>
      <div className="mx-6 md:mx-10 my-14 md:mt-24 lg:mx-36 lg:my-36">
        {data
          .filter((item) => item.category === categoryName.toLocaleLowerCase())
          .map((product, index) => (
            <div
              key={index}
              className={`mb-32 w-full lg:flex lg:items-center lg:justify-between lg:gap-28 lg:mb-44 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/2">
                <ProductImage product={product} category />
              </div>
              <div className="lg:w-1/2 md:px-20 lg:px-0 ">
                {product.new && (
                  <div className="mt-5 text-center lg:text-start">
                    <NewProductIndicator />
                  </div>
                )}
                <h2 className="text-center lg:text-start text-[28px] md:text-[40px] leading-10 font-bold tracking-wider uppercase my-5 md:px-20 lg:px-0 lg:mb-10">
                  {product.name}
                </h2>
                <p className="text-center lg:text-start font-normal text-charcoal-gray/60 text-[15px] leading-6 mb-10 lg:mb-14 lg:pr-20">
                  {product.description}
                </p>
                <div className="text-center lg:text-start">
                  <Button
                    buttonStyle="primary"
                    type="link"
                    href={`/${categoryName.toLocaleLowerCase()}/${
                      product.slug
                    }`}
                  >
                    See Product
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mx-6 md:mx-10 mb-14 lg:mx-36">
        <NavList />
      </div>
    </div>
  );
}

export default CategoryLayout;
