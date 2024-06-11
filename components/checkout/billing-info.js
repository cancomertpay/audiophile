"use client";

import { useCartContext } from "@/context/cart-context";
import Button from "../UI/button";
import formatPrice from "@/utils/currency-formatter";

function BillingInfo() {
  const { cartList, cartSummary } = useCartContext();
  
  return (
    <>
      {cartList.length > 0 ? (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[15px] font-medium uppercase tracking-wider text-black/60">
              Total
            </span>
            <span className="text-lg font-bold text-black tracking-wider">
              {formatPrice(cartSummary.totalPrice)}
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[15px] font-medium uppercase tracking-wider text-black/60">
              Shipping
            </span>
            <span className="text-lg font-bold text-black tracking-wider">
              {formatPrice(cartSummary.shippingCost)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-medium uppercase tracking-wider text-black/60">
              Vat (Included)
            </span>
            <span className="text-lg font-bold text-black tracking-wider">
              {formatPrice(cartSummary.totalWithTax - cartSummary.totalPrice)}
            </span>
          </div>
          <div className="flex items-center justify-between my-5">
            <span className="text-[15px] font-medium uppercase tracking-wider text-black/60">
              Grand Total
            </span>
            <span className="text-lg font-bold text-primary-index tracking-wider">
              {formatPrice(cartSummary.grandTotal)}
            </span>
          </div>
          <div className="w-full mt-10">
            <Button type="submit">CONTINUE & PAY</Button>
          </div>
        </div>
      ) : (
        <div className="text-black/50 text-2xl font-extralight">There is no product yet.</div>
      )}
    </>
  );
}

export default BillingInfo;
