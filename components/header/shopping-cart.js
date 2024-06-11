"use client";

import { useCartContext } from "@/context/cart-context";

import Button from "../UI/button";
import CartsProductList from "./carts-product-list";
import formatPrice from "@/utils/currency-formatter";
import ShopCartModule from "../UI/shop-cart-module";

function ShoppingCart() {
  const { cartList, clearShoppingCart } = useCartContext();

  const totalPrice = cartList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <ShopCartModule
      toggler={{
        src: "/assets/shared/desktop/icon-cart.svg",
        alt: "Shopping cart icon",
        width: 23,
        height: 20,
      }}
    >
      <div className="w-full flex items-center justify-between">
        <span className="text-black text-lg font-bold uppercase tracking-wider">
          Cart ({cartList.length})
        </span>
        {cartList.length > 0 && (
          <span
            className="text-black/60 underline text-[15px] hover:text-primary-index font-medium cursor-pointer transition-colors duration-200"
            onClick={clearShoppingCart}
          >
            Remove All
          </span>
        )}
      </div>

      {/* products here */}
      <CartsProductList />

      {/* total price here */}
      <div className="flex items-center justify-between">
        <span className="text-[15px] text-start text-black/60 uppercase tracking-wider py-5">
          Total
        </span>
        <span className="text-black font-bold text-lg text-center">
          {formatPrice(totalPrice)}
        </span>
      </div>
      <Button
        disabled={cartList.length < 1}
        type="link"
        href={cartList.length > 0 ? "/checkout" : ""}
      >
        Checkout
      </Button>
    </ShopCartModule>
  );
}

export default ShoppingCart;
