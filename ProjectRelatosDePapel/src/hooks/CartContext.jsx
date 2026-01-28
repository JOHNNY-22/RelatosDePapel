import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Inicializamos el estado leyendo del localStorage si existe
    const [cart, setCart] = useState(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error("Error al leer del localStorage:", error);
            return [];
        }
    });

    const [isOpen, setIsOpen] = useState(false);

    // Guardamos en localStorage cada vez que el carrito cambie
    React.useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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
        setCart((prevCart) => {
            const itemExist = prevCart.find(item => item.id === bookId);

            if (itemExist.quantity > 1) {
                // Si hay más de uno, restamos 1 a la cantidad
                return prevCart.map(item =>
                    item.id === bookId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                // Si solo queda uno (o por error cero), lo eliminamos del array
                return prevCart.filter(item => item.id !== bookId);
            }
        });
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