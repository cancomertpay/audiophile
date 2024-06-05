import Image from "next/image";

function ProductGallery({ gallery, alt }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-5 ">
      <div className="lg:w-1/2 h-full flex flex-col items-center justify-center gap-5">
        {/* first image */}
        <div className="w-full h-full">
          <Image
            src={gallery.first.mobile}
            alt={alt + " gallery photo 1"}
            width={327}
            height={174}
            className="md:hidden w-full h-auto rounded-lg"
          />
          <Image
            src={gallery.first.tablet}
            alt={alt + " galler photo 1"}
            width={327}
            height={174}
            className="hidden md:block lg:hidden w-full h-full rounded-lg"
          />
          <Image
            src={gallery.first.desktop}
            alt={alt + " galler photo 1"}
            width={445}
            height={280}
            className="hidden lg:block w-full h-full rounded-lg"
          />
        </div>
        {/* second image */}
        <div className="w-full h-full">
          <Image
            src={gallery.second.mobile}
            alt={alt + " gallery photo 2"}
            width={327}
            height={174}
            className="md:hidden rounded-lg"
          />
          <Image
            src={gallery.second.tablet}
            alt={alt + " galler photo 2"}
            width={327}
            height={174}
            className="hidden md:block lg:hidden w-full h-full rounded-lg"
          />
          <Image
            src={gallery.second.desktop}
            alt={alt + " galler photo 2"}
            width={445}
            height={280}
            className="hidden lg:block w-full h-full rounded-lg"
          />
        </div>
      </div>
      {/* third image */}
      <div className="lg:w-1/2">
        <Image
          src={gallery.third.mobile}
          alt={alt + " gallery photo 3"}
          width={327}
          height={174}
          className="md:hidden w-full h-auto rounded-lg"
        />
        <Image
          src={gallery.third.tablet}
          alt={alt + " galler photo 3"}
          width={327}
          height={368}
          className="hidden md:block lg:hidden w-full h-full rounded-lg"
        />
        <Image
          src={gallery.third.desktop}
          alt={alt + " galler photo 3"}
          width={635}
          height={592}
          className="hidden lg:block w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default ProductGallery;
