import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      nombre: "Producto 1",
      precio: 10,
      cantidad: 1,
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 20,
      cantidad: 1,
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 20,
      cantidad: 1,
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      nombre: "Producto 4",
      precio: 20,
      cantidad: 1,
      imagen: "https://via.placeholder.com/150",
    },
  ]);

  const addToCart = (product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].cantidad += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.length;

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    cartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};