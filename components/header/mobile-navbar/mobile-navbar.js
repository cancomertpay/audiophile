"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Toggle from "../toggle-navbar";
import { toggleNavVariants } from "@/lib/variants";
import NavList from "../nav-list";


function MobileNavbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavbarOpen]);

  return (
    <div className="lg:hidden">
      <Toggle id="toggle-navbar" onClick={toggleNavbar} />
      <motion.div
        variants={toggleNavVariants}
        initial={"hidden"}
        animate={isNavbarOpen ? "visible" : "hidden"}
        id="overlay"
        className="fixed top-20 right-0 w-screen h-screen bg-black/30 overflow-auto"
      >
        <div className="bg-white rounded-b-lg">
          <NavList toggleNavbar={toggleNavbar} />
        </div>
      </motion.div>
    </div>
  );
}

export default MobileNavbar;
