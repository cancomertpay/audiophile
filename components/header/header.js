import Image from "next/image";
import Navbar from "./navbar";
import Container from "./container";
import Link from "next/link";
import ShoppingCart from "./shopping-cart";

function Header() {
  return (
    <Container>
      <header className="py-7 lg:py-10 px-5 lg:px-0 text-white border-b-2 border-white/10">
        {/* sm */}
        <div className="md:hidden flex items-center justify-between">
          <Navbar />
          <Link href={"/"}>
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="audiophile logo"
              width="148"
              height="25"
              priority
            />
          </Link>
          <ShoppingCart />
        </div>
        {/* md */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          <div className="flex items-center gap-10">
            <Navbar />
            <Link href={"/"}>
              <Image
                src="/assets/shared/desktop/logo.svg"
                alt="audiophile logo"
                width="148"
                height="25"
                priority
              />
            </Link>
          </div>
          <ShoppingCart />
        </div>
        {/* lg */}
        <div className="hidden lg:flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="audiophile logo"
              width="148"
              height="25"
              priority
            />
          </Link>
          <Navbar />
          <ShoppingCart />
        </div>
      </header>
    </Container>
  );
}

export default Header;
