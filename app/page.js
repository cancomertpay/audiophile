// custom components
import Hero from "@/components/home/hero";
import HomeProductCard from "@/components/home/home-product-card";
import NavList from "@/components/header/nav-list";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* navlist section */}
      <div className="my-24 md:my-16 lg:my-24 mx-5 md:mx-10 lg:mx-36">
        <NavList />
      </div>
      {/* product cards section */}
      <HomeProductCard
        cardStyle="primary"
        title={
          <>
            ZX9 <br /> SPEAKER
          </>
        }
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        href="speakers/zx9-speaker"
      />
      <HomeProductCard cardStyle="secondary" title="ZX7 SPEAKER" href="speakers/zx7-speaker" />
      <HomeProductCard cardStyle="splitted" title="YX1 EARPHONES" href="earphones/yx1-earphones" />
    </div>
  );
}
