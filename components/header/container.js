"use client";

import { usePathname } from "next/navigation";

function Container({ children }) {
  const pathname = usePathname();
  return (
    <div
      className={`md:px-5 lg:px-36 w-full z-40 ${
        pathname === "/" ? "bg-transparent absolute top-0 right-0" : "bg-black"
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
