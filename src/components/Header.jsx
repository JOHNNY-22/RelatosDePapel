import React from 'react';
import { useCart } from '../hooks/CartContext';
import './Header.css';

export const Header = () => {
    // Extraemos toggleCart en lugar de openCart para que funcione como interruptor
    const { toggleCart, cart } = useCart();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="header">
            <h1 className="header__logo">Relatos de Papel</h1>
            {/* Ahora al clicar, se abre o se cierra según el estado actual */}
            <div className="header__cart" onClick={toggleCart} style={{ cursor: 'pointer' }}>
                <span>Cesta 🛒</span>
                {totalItems > 0 && <span className="header__badge">{totalItems}</span>}
            </div>
        </header>
    );
};