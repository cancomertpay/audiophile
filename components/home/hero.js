import Button from "../UI/button";
import HeroImage from "./hero-image";
import ProductTitle from "../UI/product-title";

function Hero() {
  return (
    <div className="relative">
      <HeroImage />
      <div className="w-full lg:w-[390px] lg:h-[346px] absolute top-56 lg:left-44 right-0 md:px-32 lg:px-0">
        <div className="tracking-[8px] text-sm text-white/50 text-center lg:text-start mb-5">
          NEW PRODUCT
        </div>
        <ProductTitle>XX99 Mark II HeadphoneS</ProductTitle>
        <p className="block mx-12 md:mx-16 lg:mx-0 font-medium text-white/60 text-base text-center lg:text-start mb-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="text-center lg:text-start">
          <Button buttonStyle="primary">See Product</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
