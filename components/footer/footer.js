import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative p-6 pt-0 flex flex-col items-center justify-center w-full bg-charcoal-gray text-white md:items-start md:p-10 lg:px-44">
      <div className="w-[25%] md:w-[15%] lg:w-[8%] border-t-4 border-primary-index absolute top-0" />
      <div className="w-full flex flex-col items-center justify-center md:items-start md:justify-start lg:flex-row lg:justify-between">
        <Image
          src={"/assets/shared/desktop/logo.svg"}
          alt="Audiophile logo"
          className="my-14 md:mt-5 md:mb-8"
          width={143}
          height={25}
        />
        <ul className="flex flex-col items-center justify-center gap-5 md:flex-row md:justify-start">
          <li className="tracking-widest uppercase text-white font-bold text-sm hover:text-primary-index transition-colors duration-300">
            <Link href={"#"}>Home</Link>
          </li>
          <li className="tracking-widest uppercase text-white font-bold text-sm hover:text-primary-index transition-colors duration-300">
            <Link href={"#"}>HEADPHONES</Link>
          </li>
          <li className="tracking-widest uppercase text-white font-bold text-sm hover:text-primary-index transition-colors duration-300">
            <Link href={"#"}>SPEAKERS</Link>
          </li>
          <li className="tracking-widest uppercase text-white font-bold text-sm hover:text-primary-index transition-colors duration-300">
            <Link href={"#"}>EARPHONES</Link>
          </li>
        </ul>
      </div>
      <div className="lg:flex lg:items-stretch lg:justify-between">
        <p className="text-white/50 text-[15px] font-medium text-center my-10 md:text-start lg:w-1/2 lg:pr-10">
          Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we&apos;re open 7 days a week.
        </p>
        <div className="hidden lg:w-1/2"></div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between my-10 md:mb-0">
        <p className="text-white/50 text-[15px] font-medium text-center">
          Copyright 2021. All Rights Reserved
        </p>
        <ul className="flex items-center justify-center gap-4 lg:-mt-60">
          <li>
            <a href="#">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="Facebook link icon"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="Twitter link icon"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="Instagram link icon"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
