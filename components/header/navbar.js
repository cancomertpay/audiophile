import Link from "next/link";
import MobileNavbar from "./mobile-navbar/mobile-navbar";
import NavListText from "./nav-list-text";

function Navbar() {
  return (
    <nav>
      {/* sm & md */}
      <MobileNavbar />

      {/* lg */}
      <div className="hidden lg:flex">
        <NavListText />
      </div>
    </nav>
  );
}

export default Navbar;
