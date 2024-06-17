import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

/* Simplifies access to the cart context in other components. */
export const useCart = () => useContext(CartContext);

/* Component that provides the CartContext to its child components. Children represent any child component wrapped by CartProvider, and the cart state is initialized as an empty array. */
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    /* Adds a product to the cart or updates its quantity if it already exists. */
    const anadirCarrito = (producto, cantidad) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex((item) => item.id === producto.id);
            if (existingProductIndex >= 0) {
                const newCart = [...prevCart];
                newCart[existingProductIndex].cantidad += cantidad;
                newCart[existingProductIndex].totalPrecio = newCart[existingProductIndex].cantidad * newCart[existingProductIndex].precio;
                return newCart;
            } else {
                return [...prevCart, { ...producto, cantidad, totalPrecio: cantidad * producto.precio }];
            }
        });
    };

    /* Removes a product from the cart */
    const removerCarrito = (productoId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productoId));
    };

    /* Updates the quantity of a specific product in the cart. */
    const actualizarCantidad = (productoId, nuevaCantidad) => {
        if (nuevaCantidad < 1) return; /* Prevents negative or zero quantities */
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === productoId) {
                    return { ...item, cantidad: nuevaCantidad, totalPrecio: nuevaCantidad * item.precio };
                }
                return item;
            });
        });
    };

    /* Creates an order with the current cart contents */
    const createOrder = async (cart) => {
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cart }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating order:', error);
            return { success: false, message: error.message };
        }
    };

    return (
        <CartContext.Provider value={{ cart, anadirCarrito, removerCarrito, actualizarCantidad, createOrder }}>
            {children}
        </CartContext.Provider>
    );
};
