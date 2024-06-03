import React from "react";

function ProductTitle({ children, color = "text-white" }) {
  if (!color.includes("text")) {
    throw new Error("Please only use tailwind's text color picker classes.");
  }
  return (
    <h2
      className={`text-center lg:text-start uppercase tracking-wider font-bold text-4xl md:text-[56px] md:leading-[3.5rem] mb-8 ${color}`}
    >
      {children}
    </h2>
  );
}

export default ProductTitle;
