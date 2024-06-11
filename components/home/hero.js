import Button from "../UI/button";
import HeroImage from "./hero-image";
import ProductTitle from "../UI/product-title";

function Hero() {
  return (
    <div className="relative">
      <HeroImage />
      <div className="w-full lg:w-[390px] lg:h-[346px] absolute top-56 lg:left-36 right-0 md:px-32 lg:px-0">
        <div className="tracking-[8px] text-sm text-white/50 text-center lg:text-start mb-5">
          NEW PRODUCT
        </div>
        <ProductTitle>XX99 Mark II Headphones</ProductTitle>
        <p className="block mx-12 md:mx-16 lg:mx-0 font-medium text-white/60 text-base text-center lg:text-start mb-8">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="w-full flex items-center justify-center lg:justify-start">
          <div className="md:w-1/2">
            <Button
              buttonStyle="primary"
              type="link"
              href="headphones/xx99-mark-two-headphones"
            >
              See Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
