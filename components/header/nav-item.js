"use client";

// react
import { useState } from "react";

// next.js
import Image from "next/image";
import Link from "next/link";

// framer-motion
import { motion } from "framer-motion";

function NavItem({ id, image, title, href, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const imageVariants = {
    start: { y: -30 },
    finish: { y: 0 },
  };
  return (
    <li
      id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="w-full h-full"
    >
      <Link
        href={href}
        className="flex flex-col items-center justify-center w-full h-full p-5 rounded-md bg-off-white relative mt-10"
      >
        <motion.div
          variants={imageVariants}
          animate={isHovered ? "start" : "finish"}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="-mt-20 !w-[147px] !h-[133px]"
          />
        </motion.div>
        <h3 className="text-black text-center font-bold uppercase tracking-wider mb-4">
          {title}
        </h3>
        <motion.div
          animate={isHovered ? { color: "#D87D4A" } : {}}
          className="w-full flex items-center justify-center gap-2 text-sm font-bold text-charcoal-gray/60 tracking-wider uppercase"
        >
          Shop
          <motion.span animate={isHovered ? { x: 10 } : { x: 0 }}>
            <Image
              className={`mb-[1px]`}
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="arrow right icon"
              width={8}
              height={12}
            />
          </motion.span>
        </motion.div>
      </Link>
    </li>
  );
}

export default NavItem;
