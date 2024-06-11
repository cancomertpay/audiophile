"use client";

import { useCartContext } from "@/context/cart-context";
import Image from "next/image";

import CartsProductAmount from "./carts-product-amount";
import formatPrice from "@/utils/currency-formatter";
import { removeKeywords } from "@/utils/remove-keywords";

function CartsProductList({ checkout }) {
  const { cartList } = useCartContext();

  return (
    <ul className="mt-5 max-h-[45vh] overflow-auto">
      {cartList.map((product) => (
        <li
          key={product.id}
          className="w-full flex items-center justify-between gap-3 mb-6"
        >
          <Image
            src={product.image.mobile}
            alt={product.name}
            width={64}
            height={64}
            className="!w-[64px] !h-[64px] rounded-lg"
          />
          <div className="w-full inline-flex items-center justify-between gap-2">
            <div className="w-1/2 flex flex-col gap-2">
              <span className="text-black font-bold text-[15px] uppercase">
                {removeKeywords(product.name)}
              </span>
              <span className="text-black/50 font-bold text-[14px]">
                {formatPrice(product.price)}
              </span>
            </div>
            <div className="w-1/2 flex justify-end text-end">
              {checkout ? (
                <span className="text-black/50 font-bold text-[15px]">
                  x{product.quantity}
                </span>
              ) : (
                <CartsProductAmount
                  productId={product.id}
                  quantity={product.quantity}
                />
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CartsProductList;
