// CartContext.js
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);


  const addToCart = (product) => {
    setCart([...cart, { ...product, cantidad: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const toggleFavorite = (productId) => {
    const isFavorite = favorites.some((item) => item.id === productId);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((item) => item.id !== productId);
      setFavorites(updatedFavorites);
    } else {
      const productToAdd = cart.find((item) => item.id === productId);
      if (productToAdd) {
        setFavorites([...favorites, { ...productToAdd, favorite: true }]);
      } else {
        // Aquí puedes manejarlo si el producto no está en el carrito pero se marca como favorito
        // Por ejemplo, podrías hacer una llamada a una API o a un backend para guardar el favorito
        // Esto depende de cómo manejes la persistencia de datos.
        console.log("Producto no está en el carrito pero se marca como favorito:", productId);
      }
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.length;

  const value = {
    cart,
    favorites,
    addToCart,
    removeFromCart,
    toggleFavorite,
    clearCart,
    cartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
