import Image from "next/image";
import heroImg from "@/public/assets/home/mobile/image-header.jpg";
import mdHeroImg from "@/public/assets/home/tablet/image-header.jpg";
import lgHeroImg from "@/public/assets/home/desktop/image-hero.jpg";

function HeroImage() {
  return (
    <>
      <Image
        src={heroImg}
        alt="Header headphone image"
        className="md:hidden mb-5 w-full min-h-[600px] max-h-[650px]"
        priority
      />
      <Image
        src={mdHeroImg}
        alt="Header headphone image"
        className="hidden md:block lg:hidden mb-5 w-full min-h-[729px] max-h-[760px]"
        priority
      />
      <Image
        src={lgHeroImg}
        alt="Header headphone image"
        className="hidden lg:block mb-5 w-full min-h-[729px] max-h-[760px]"
        priority
      />
    </>
  );
}

export default HeroImage;
