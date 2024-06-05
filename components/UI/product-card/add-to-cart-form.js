"use client";
import { useState } from "react";
import NumberField from "../form-elements/number-field";
import Button from "../button";

function AddToCartForm() {
  const [productAmount, setProductAmount] = useState(1);
  return (
    <form className="flex items-center justify-start gap-4">
      <NumberField productAmount={productAmount} setProductAmount={setProductAmount} />
      <Button type="submit">Add to cart</Button>
    </form>
  );
}

export default AddToCartForm;
