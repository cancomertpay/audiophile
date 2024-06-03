import Link from "next/link";
import MobileNavbar from "./mobile-navbar/mobile-navbar";

function Navbar() {
  return (
    <nav>
      {/* sm & md */}
      <MobileNavbar />

      {/* lg */}
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-8">
          <li className="uppercase tracking-widest font-bold text-sm hover:text-primary-index transition-colors duration-300">
            <Link href={"/"}>Home</Link>
          </li>
          <li  className="uppercase tracking-widest font-bold text-sm hover:text-primary-index transition-colors duration-300">
            <Link href={"#"}>Headphones</Link>
          </li>
          <li className="uppercase tracking-widest font-bold text-sm hover:text-primary-index transition-colors duration-300">
            <Link href={"#"}>Speakers</Link>
          </li>
          <li className="uppercase tracking-widest font-bold text-sm hover:text-primary-index transition-colors duration-300">
            <Link href={"#"}>Earphones</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
