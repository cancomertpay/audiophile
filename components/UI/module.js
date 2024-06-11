"use client";

//react
import { useEffect, useState } from "react";
//next.js
import Image from "next/image";
import { usePathname } from "next/navigation";

//framer-motion
import { motion } from "framer-motion";
import { toggleNavVariants } from "@/lib/variants";

function Module({
  children,
  toggler,
  modulePosition = { top: 0, right: 0 },
  center = false,
  open,
}) {
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const pathname = usePathname();


  const toggleModule = () => {
    setIsModuleOpen((prev) => !prev);
  };

  const closeModule = () => {
    setIsModuleOpen(false);
  };

  useEffect(() => {
    setIsModuleOpen(false);
  }, [pathname]);

  useEffect(() => {
    setIsModuleOpen(open);
  }, [open]);

  useEffect(() => {
    if (isModuleOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModuleOpen, pathname, open]);

  return (
    <>
      {toggler && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleModule}
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
        animate={isModuleOpen ? "visible" : "hidden"}
        className={`absolute w-screen h-screen bg-black/30 overflow-hidden`}
        style={{
          top: modulePosition?.top,
          right: modulePosition?.right,
          left: modulePosition?.left,
          bottom: modulePosition?.bottom,
        }}
        onClick={closeModule}
      >
        <div
          className={
            center ? "flex items-center justify-center h-full w-full" : ""
          }
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </motion.div>
    </>
  );
}

export default Module;
