"use client";

const { useContext, createContext, useState, useEffect } = require("react");

const CartContext = createContext();

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCartContext hook must be within CartContextProvider.");
  }
  return ctx;
};

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addProductIntoShoppingCart = (product) => {
    setCartList((prev) => {
      const index = prev.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        const updatedCartList = prev.map((item, i) => {
          if (i === index) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });
        return updatedCartList;
      } else {
        return [...prev, product];
      }
    });
  };

  const removeProductIntoShoppingCart = (productId) => {
    setCartList((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearShoppingCart = () => {
    setCartList([]);
  };

  const increaseProductsQty = (productId) => {
    setCartList((prev) => {
      const updatedCartList = prev.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedCartList;
    });
  };

  const decreaseProductsQty = (productId) => {
    setCartList((prev) => {
      const updatedCartList = prev.map((item) => {
        if (item.id === productId) {
          if (item.quantity === 1) {
            return null;
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });

      const newCartList = updatedCartList.filter((item) => item !== null);

      return newCartList;
    });
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  useEffect(() => {
    if (isCartOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isCartOpen]);

  const totalPrice = cartList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const salesTaxRate = 0.2;
  const shippingCost = 50;
  const totalWithTax = totalPrice + totalPrice * salesTaxRate;
  const grandTotal = totalPrice + shippingCost;

  const values = {
    cartList,
    addProductIntoShoppingCart,
    removeProductIntoShoppingCart,
    clearShoppingCart,
    increaseProductsQty,
    decreaseProductsQty,
    isCartOpen,
    openCart,
    setIsCartOpen,
    cartSummary: {
      totalPrice,
      salesTaxRate,
      shippingCost,
      totalWithTax,
      grandTotal,
    },
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
