//next.js
import Image from "next/image";
import Link from "next/link";

// custom components
import ProductTitle from "../UI/product-title";

// images
import patternCircles from "@/public/assets/home/desktop/pattern-circles.svg";

function HomeProductCard({ cardStyle = "primary", title, description, href }) {
  let cardClasses;
  switch (cardStyle) {
    case "primary":
      cardClasses =
        "relative w-full mx-5 md:mx-10 h-[600px] bg-primary-index rounded-lg overflow-hidden md:h-[720px] lg:flex lg:items-center lg:justify-center lg:h-[560px] lg:mx-44";
      break;
    case "secondary":
      cardClasses =
        "relative w-full flex items-center justify-center mx-5 md:mx-10 h-[320px] md:h-[320px] lg:h-[320px] lg:mx-44";
      break;
    case "splitted":
      cardClasses =
        "w-full h-[424px] mx-5 md:mx-10 flex flex-col items-center justify-center gap-5 md:gap-2 overflow-hidden md:h-[320px] md:flex-row lg:h-[320px] lg:mx-44 lg:gap-6";
      break;
    default:
      cardClasses =
        "relative w-full h-[600px] bg-primary-index rounded-lg overflow-hidden md:h-[720px] lg:flex lg:items-center lg:justify-center lg:w-full lg:h-[560px] lg:mx-44";
      break;
  }
  return (
    <div className="my-5 lg:my-10 flex items-center justify-center overflow-hidden">
      {cardStyle === "primary" && (
        <div className={cardClasses}>
          <div className="w-full relative flex justify-center mt-16 mb-10 md:mb-20 lg:mb-0">
              <Image
                src={patternCircles}
                alt="pattern circles"
                className="absolute top-0 right-0 scale-[1.7] -mt-16 md:scale-[1.4] md:-mt-52 lg:mt-10 z-10"
              />
            <div className="z-20">
              <Image
                src="/assets/home/mobile/image-speaker-zx9.png"
                width={160}
                height={195}
                alt="Speaker ZX9 image"
                className="md:hidden"
              />
              <Image
                src="/assets/home/tablet/image-speaker-zx9.png"
                width={180}
                height={210}
                alt="Speaker ZX9 image"
                className="hidden md:block lg:hidden"
              />
              <Image
                src="/assets/home/desktop/image-speaker-zx9.png"
                width={410}
                height={493}
                alt="Speaker ZX9 image"
                className="hidden lg:block w-[400px] h-[483px] -mb-8"
              />
            </div>
          </div>
          <div className="z-20 lg:pr-20">
            <div className="lg:w-[349px] lg:h-[303px]">
              <ProductTitle>{title}</ProductTitle>
              <p className="text-center lg:text-start text-white/80 mb-10 md:mb-12 md:mx-40 lg:mx-0">
                {description}
              </p>
              <div className="text-center lg:text-start">
                <Link
                  className="px-6 py-3 bg-charcoal-gray hover:bg-[#4C4C4C] tracking-wider text-sm font-bold text-white uppercase transition-colors duration-300"
                  href={"#"}
                >
                  See Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {cardStyle === "secondary" && (
        <div className={cardClasses}>
          <>
            <Image
              src={"/assets/home/mobile/image-speaker-zx7.jpg"}
              alt="ZX7 Speaker image"
              className="rounded-lg object-fill md:hidden w-full !h-[320px]"
              width={327}
              height={320}
            />
            <Image
              src={"/assets/home/tablet/image-speaker-zx7.jpg"}
              alt="ZX7 Speaker image"
              className="rounded-lg w-full object-fill hidden md:block lg:hidden !h-[320px]"
              width={327}
              height={320}
            />
            <Image
              src={"/assets/home/desktop/image-speaker-zx7.jpg"}
              alt="ZX7 Speaker image"
              className="rounded-lg w-full object-fill hidden lg:block !h-[320px]"
              width={327}
              height={320}
            />
          </>
          <div className="absolute top-0 left-0 z-20 h-full flex flex-col justify-center px-5 md:ml-10">
            <h2 className="tracking-wider font-bold text-[28px] mb-8 text-charcoal-gray">
              ZX7 SPEAKER
            </h2>
            <div>
              <Link
                className="px-6 py-3 bg-transparent border border-charcoal-gray hover:bg-charcoal-gray hover:text-white tracking-wider text-sm font-bold text-charcoal-gray uppercase transition-colors duration-500"
                href={href}
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      )}
      {cardStyle === "splitted" && (
        <div className={cardClasses}>
          <div className="w-full md:w-1/2 h-[200px] md:h-[320px]">
            <Image
              src="/assets/home/mobile/image-earphones-yx1.jpg"
              alt="Earphones YX1 image"
              className="w-full md:hidden rounded-lg object-fill !h-[200px]"
              width={327}
              height={200}
            />
            <Image
              src="/assets/home/tablet/image-earphones-yx1.jpg"
              alt="Earphones YX1 image"
              className="w-full hidden md:block lg:hidden rounded-lg object-fill !h-[320px]"
              width={339}
              height={320}
            />
            <Image
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="Earphones YX1 image"
              className="w-full hidden lg:block rounded-lg object-fill !h-[320px]"
              width={540}
              height={320}
            />
          </div>
          <div className="w-full md:w-1/2 h-[200px] md:h-[320px] bg-off-white rounded-lg flex items-center justify-center">
            <div>
              <h2 className="flex tracking-wider font-bold text-[28px] mb-8 text-charcoal-gray">
                YX1 EARPHONES
              </h2>
              <Link
                className="px-6 py-3 bg-transparent border border-charcoal-gray hover:bg-charcoal-gray hover:text-white tracking-wider text-sm font-bold text-charcoal-gray uppercase transition-colors duration-500"
                href={"#"}
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeProductCard;
