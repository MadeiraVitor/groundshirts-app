import { useEffect, useState } from "react";
import type { Product } from "../interfaces/product";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

export interface ProductCart extends Product {
  quantity: number;
}

const localStorageKey = "@GroundShirts:cart";

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductCart[]>(() => {
    const cartFromLocalStorage = localStorage.getItem(localStorageKey);
    return cartFromLocalStorage !== null ? JSON.parse(cartFromLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cart));
  }, [cart]);

  const addProductIntoCart = (product: Product): void => {
    const productExistsInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id,
    );

    let newCart;

    if (productExistsInCart) {
      newCart = cart.map((itemInCart) =>
        itemInCart.id === product.id
          ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
          : itemInCart,
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
  };

  const removeItemFromCart = (productId: number): void => {
    setCart(cart.filter((itemInCart) => itemInCart.id !== productId));
  };

  const increment = (product: ProductCart): void => {
    updateProductQuantity(product, product.quantity + 1);
  };

  const decrement = (product: ProductCart): void => {
    updateProductQuantity(product, product.quantity - 1);
  };

  const updateProductQuantity = (
    product: ProductCart,
    newQuantity: number,
  ): void => {
    if (newQuantity <= 0) return;

    const productExistsInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id,
    );

    if (!productExistsInCart) return;

    const newCart = cart.map((itemInCart) =>
      itemInCart.id === product.id
        ? { ...itemInCart, quantity: newQuantity }
        : itemInCart,
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductIntoCart,
        removeItemFromCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
