import Module from "@/components/UI/module";
import NavList from "../nav-list";

function MobileNavbar() {
  return (
    <div className="lg:hidden">
      <Module
        toggler={{
          src: "/assets/shared/tablet/icon-hamburger.svg",
          alt: "Navbar toggle icon",
        }}
        modulePosition={{ top: "5.2rem", right: "0" }}
      >
        <div className="bg-white rounded-b-lg px-5 md:px-10 pt-16 pb-10 md:py-16 max-h-[80vh] overflow-y-auto">
          <NavList />
        </div>
      </Module>
    </div>
  );
}

export default MobileNavbar;
