import React from 'react';
import { useCart } from '../hooks/CartContext'; // Asegúrate de que la ruta es correcta
import './CartSidebar.css';

export const CartSidebar = () => {
    // Extraemos isOpen y closeCart del contexto global
    const { cart, removeFromCart, addToCart, isOpen, closeCart } = useCart();

    // Calculamos el precio total
    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        /* Usamos el isOpen que viene del contexto */
        <aside className={`cart-sidebar ${isOpen ? 'cart-sidebar--open' : ''}`}>
            <div className="cart-sidebar__header">
                <h2 className="cart-sidebar__title">Mi Cesta</h2>
                {/* Usamos closeCart del contexto para cerrar */}
                <button className="cart-sidebar__close" onClick={closeCart}>×</button>
            </div>

            <div className="cart-sidebar__content">
                {cart.length === 0 ? (
                    <p className="cart-sidebar__empty">Tu cesta está vacía 📖</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item__img" />
                            <div className="cart-item__details">
                                <h4 className="cart-item__name">{item.title}</h4>
                                <p className="cart-item__price">
                                    {item.quantity} x {item.price}€
                                </p>
                                <div className="cart-item__actions">
                                    <button onClick={() => removeFromCart(item.id)} className="cart-item__btn">-</button>
                                    <span className="cart-item__qty">{item.quantity}</span>
                                    <button onClick={() => addToCart(item)} className="cart-item__btn">+</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {cart.length > 0 && (
                <div className="cart-sidebar__footer">
                    <div className="cart-sidebar__total">
                        <span>Total:</span>
                        <span>{totalAmount.toFixed(2)} €</span>
                    </div>
                    <button className="cart-sidebar__checkout">Finalizar Compra</button>
                </div>
            )}
        </aside>
    );
};