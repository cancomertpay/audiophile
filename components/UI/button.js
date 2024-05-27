"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Button({
  buttonStyle = "primary",
  type = "button",
  href = "#",
  children,
}) {
  const [isHovered, setIsHovered] = useState(false);

  let buttonStyles;

  switch (buttonStyle) {
    case "primary":
      buttonStyles =
        "px-6 py-3 bg-primary-index hover:bg-primary-hover tracking-wider text-sm font-bold text-white uppercase transition-colors duration-200";
      break;
    case "secondary":
      buttonStyles =
        "px-6 py-3 border-2 border-black bg-white  hover:bg-black hover:text-white tracking-wider text-black font-bold uppercase transition-colors duration-200";
      break;
    case "basic":
      buttonStyles =
        "text-sm font-bold text-charcoal-gray/60 hover:text-primary-index tracking-wider uppercase transition-colors duration-200";
      break;
  }

  let buttonType =
    type === "link" ? (
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={buttonStyles}
        href={href}
      >
        {buttonStyle !== "basic" ? (
          children
        ) : (
          <span className="flex items-center gap-2">
            {children}
            <div>
              <Image
                className={`mb-[1px] transition-all duration-500 ease-in-out ${
                  isHovered ? "ml-2" : "ml-0"
                }`}
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right icon"
                width={8}
                height={12}
              />
            </div>
          </span>
        )}
      </Link>
    ) : (
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={buttonStyles}
        type={type}
      >
        {buttonStyle !== "basic" ? (
          children
        ) : (
          <span className="flex items-center gap-2">
            {children}
            <div>
              <Image
                className={`mb-[1px] transition-all duration-500 ease-in-out ${
                  isHovered ? "ml-2" : "ml-0"
                }`}
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right icon"
                width={8}
                height={12}
              />
            </div>
          </span>
        )}
      </button>
    );

  return { buttonType };
}

export default Button;
