import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

/*simplifica el acceso al contexto del carrito en otros componentes.*/
export const useCart = () => useContext(CartContext);

/*componente que provee el contexto CartContext a sus componentes hijos. children representa cualquier componente hijo que esté envuelto por CartProvider y se declara el estado cart, que es inicializado como un array vacío.*/
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    /*Añade un producto al carrito o actualiza su cantidad si ya existe.*/
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

    /*Elimina un producto del carrito*/
    const removerCarrito = (productoId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productoId));
    };

    /*Actualiza la cantidad de un producto específico en el carrito.*/
    const actualizarCantidad = (productoId, nuevaCantidad) => {
        if (nuevaCantidad < 1) return; /* Evita cantidades negativas o cero*/
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === productoId) {
                    return { ...item, cantidad: nuevaCantidad, totalPrecio: nuevaCantidad * item.precio };
                }
                return item;
            });
        });
    };

    return (
        <CartContext.Provider value={{ cart, anadirCarrito, removerCarrito, actualizarCantidad }}>
            {children}
        </CartContext.Provider>
    );
};