import Image from "next/image";
import Navbar from "./navbar";

function Header() {
  return (
    <div className="lg:px-44 fixed top-0 right-0 w-full z-50 bg-charcoal-gray/90">
      <header className="py-7 lg:py-10 px-10 lg:px-0 text-white border-b-2 border-white/10 ">
        {/* sm */}
        <div className="md:hidden flex items-center justify-between">
          <Navbar />
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="audiophile logo"
            width="148"
            height="25"
            priority
          />
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart icon"
            width={23}
            height={20}
          />
        </div>
        {/* md */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          <div className="flex items-center gap-10">
            <Navbar />
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="audiophile logo"
              width="148"
              height="25"
              priority
            />
          </div>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart icon"
            width={23}
            height={20}
          />
        </div>
        {/* lg */}
        <div className="hidden lg:flex items-center justify-between">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="audiophile logo"
            width="148"
            height="25"
            priority
          />
          <Navbar />
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart icon"
            width={23}
            height={20}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
