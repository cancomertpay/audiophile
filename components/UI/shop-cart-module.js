"use client";

//react
import { useEffect } from "react";
//next.js
import Image from "next/image";
import { usePathname } from "next/navigation";

//framer-motion
import { motion } from "framer-motion";
import { toggleNavVariants } from "@/lib/variants";
import { useCartContext } from "@/context/cart-context";

function ShopCartModule({
  children,
  toggler,
}) {
  const { isCartOpen, setIsCartOpen } = useCartContext();

  const pathname = usePathname();

  const toggleModule = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeModule = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    setIsCartOpen(false);
  }, [pathname]);

  useEffect(() => {
    setIsCartOpen(isCartOpen);
  }, [isCartOpen]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen, pathname]);

  

  return (
    <>
      {toggler && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleModule}
          className="cursor-pointer"
        >
          <Image
            src={toggler.src}
            alt={toggler.alt}
            width={toggler.width ?? 16}
            height={toggler.height ?? 17}
          />
        </motion.div>
      )}
      <motion.div
        variants={toggleNavVariants}
        initial={"hidden"}
        animate={isCartOpen ? "visible" : "hidden"}
        className={`absolute w-screen h-screen bg-black/30 overflow-hidden top-0 lg:top-[6.5rem] right-0`}
        onClick={closeModule}
      >
        <div
          className="lg:absolute lg:top-0 lg:right-36 lg:w-[377px] mt-[6.5rem] lg:mt-8 mx-6 lg:mx-0 p-7 bg-white rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </motion.div>
    </>
  );
}

export default ShopCartModule;
