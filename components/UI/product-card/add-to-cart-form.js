"use client";
import { useState } from "react";
import NumberField from "../form-elements/number-field";
import Button from "../button";
import { useCartContext } from "@/context/cart-context";

function AddToCartForm({ product }) {
  const { addProductIntoShoppingCart, openCart } = useCartContext();
  const [productAmount, setProductAmount] = useState(product.quantity);

  const handleClick = (e) => {
    e.preventDefault();
    addProductIntoShoppingCart({ ...product, quantity: productAmount });
    openCart();
  };
  return (
    <div className="flex items-stretch justify-start gap-4">
      <NumberField
        productAmount={productAmount}
        setProductAmount={setProductAmount}
      />
      <Button onClick={handleClick}>Add to cart</Button>
    </div>
  );
}

export default AddToCartForm;
