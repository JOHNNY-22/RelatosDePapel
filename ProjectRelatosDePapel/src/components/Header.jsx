
    import React from 'react';
    import './Header.css';

    export const Header = () => {
        return (
            <header className="header">
                <div className="header__container">
                    <h1 className="header__logo">Relatos de Papel</h1>
                    <div className="header__cart">
                        <span className="header__cart-text">Cesta</span>
                        <button className="header__cart-button">
                            🛒 <span className="header__cart-count">0</span>
                        </button>
                    </div>
                </div>
            </header>
        );
    };
