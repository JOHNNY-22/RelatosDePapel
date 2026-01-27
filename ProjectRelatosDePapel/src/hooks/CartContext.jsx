import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false); // <--- Nuevo estado global

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    const toggleCart = () => setIsOpen(!isOpen);

    const addToCart = (book) => {
        setCart((prevCart) => {
            const isBookInCart = prevCart.find((item) => item.id === book.id);
            if (isBookInCart) {
                return prevCart.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...book, quantity: 1 }];
        });
    };

    const removeFromCart = (bookId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== bookId));
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            isOpen,
            openCart,
            closeCart,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);