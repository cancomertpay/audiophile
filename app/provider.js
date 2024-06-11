import CartContextProvider from "@/context/cart-context";

function Provider({ children }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}

export default Provider;
