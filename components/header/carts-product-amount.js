"use client";

import { useCartContext } from "@/context/cart-context";

function CartsProductAmount({ quantity, productId }) {
  const { increaseProductsQty, decreaseProductsQty } = useCartContext();

  return (
    <div className="w-[96px] h-[32px] inline-flex items-center justify-around px-1 py-3 bg-off-white select-none">
      <span
        className="text-xs font-bold text-black hover:text-primary-index cursor-pointer"
        onClick={() => decreaseProductsQty(productId)}
      >
        -
      </span>
      <span className="w-[25px] text-center text-black font-bold text-[13px]">{quantity}</span>
      <span
        className="text-xs font-bold text-black hover:text-primary-index cursor-pointer"
        onClick={() => increaseProductsQty(productId)}
      >
        +
      </span>
    </div>
  );
}

export default CartsProductAmount;
