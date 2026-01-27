import React from 'react';
import { useCart } from '../hooks/CartContext'; // Para el contador
import './Header.css';

export const Header = () => {
    const { openCart, cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="header">
            <h1 className="header__logo">Relatos de Papel</h1>
            <div className="header__cart" onClick={openCart}>
                <span>Cesta 🛒</span>
                {totalItems > 0 && <span className="header__badge">{totalItems}</span>}
            </div>
        </header>
    );
};