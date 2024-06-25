import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [productsForSale, setProductsForSale] = useState([]); 

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const toggleFavorite = (product) => {
    const isFavorite = favorites.some((item) => item.id === product.id);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((item) => item.id !== product.id);
      setFavorites(updatedFavorites);
    } else {
      setFavorites([...favorites, { ...product, favorite: true }]);
    }
  };

  const addProductForSale = (product) => {
    setProductsForSale([...productsForSale, product]);
  };

  const removeProductFromSale = (productId) => {
    const updatedProductsForSale = productsForSale.filter((item) => item.id !== productId);
    setProductsForSale(updatedProductsForSale);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.length;

  const value = {
    cart,
    favorites,
    productsForSale,
    addToCart,
    removeFromCart,
    toggleFavorite,
    addProductForSale,
    removeProductFromSale,
    clearCart,
    cartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
