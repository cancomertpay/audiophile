// custom components
import Hero from "@/components/home/hero";
import HomeProductCard from "@/components/home/home-product-card";
import NavList from "@/components/header/nav-list";

export default function Home() {
  return (
    <main className={`w-full`}>
      {/* hero section */}
      <Hero />
      {/* navlist section */}
      <div className="mb-10 md:my-16 lg:my-24">
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
        href="#"
      />
      <HomeProductCard cardStyle="secondary" title="ZX7 SPEAKER" href="#" />
      <HomeProductCard cardStyle="splitted" title="YX1 EARPHONES" href="#" />
    </main>
  );
}
