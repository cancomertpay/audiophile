"use client";

import { useCartContext } from "@/context/cart-context";
import CartsProductList from "../header/carts-product-list";
import BillingInfo from "./billing-info";

function Summary() {
  const { cartList } = useCartContext();
  return (
    <div className="bg-white p-5 rounded-lg mt-8 lg:mt-0 lg:w-4/12">
      <h2 className="uppercase tracking-wider text-black text-[28px] md:text-[18px] font-bold mb-8">
        Summary
      </h2>

      {cartList.length > 0 ? (
        <>
          {/* selected products */}
          <div>
            <CartsProductList checkout />
          </div>

          <BillingInfo />
        </>
      ) : (
        <div className="text-base text-black/50 font-medium">No products</div>
      )}
    </div>
  );
}

export default Summary;
