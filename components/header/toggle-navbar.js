"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Toggle({ onClick, id }) {
  return (
    <motion.div id={id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Image
        src="/assets/shared/tablet/icon-hamburger.svg"
        alt="hamburger icon"
        width={16}
        height={15}
        onClick={onClick}
      />
    </motion.div>
  );
}

export default Toggle;
