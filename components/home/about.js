import React from "react";
import Container from "./container";
import Image from "next/image";

function About() {
  return (
    <Container>
      <div className="w-full lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:h-[588px] gap-10">
        <div className="lg:w-1/2">
          <Image
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="Happy customer image"
            className="md:hidden w-full h-[300px] rounded-lg"
            width={327}
            height={300}
          />
          <Image
            src="/assets/shared/tablet/image-best-gear.jpg"
            alt="Happy customer image"
            className="hidden md:block lg:hidden w-full h-[300px] rounded-lg mb-5"
            width={689}
            height={300}
          />
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Happy customer image"
            className="hidden lg:block !w-[540px] h-[588px] rounded-lg"
            width={540}
            height={588}
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="my-8 font-bold text-[28px] md:text-[40px] md:mx-20 lg:mx-0 md:leading-[3rem] text-center lg:text-start text-charcoal-gray uppercase">
            Bringing you the <span className="text-primary-index">best</span> {" "}
            audio gear
          </h1>
          <p className="px-2 md:px-10 font-normal text-charcoal-gray/60 text-center text-base lg:text-start lg:px-0 lg:pr-24">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default About;
