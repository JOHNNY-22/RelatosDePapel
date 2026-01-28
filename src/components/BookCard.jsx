import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/CartContext'; // Importamos el hook que creamos
import './BookCard.css';

export const BookCard = ({ book }) => {
    const { addToCart } = useCart(); // Extraemos la función de añadir

    const handleAddToCart = (e) => {
        // 1. Evitamos que el Link se active al pulsar el botón
        e.preventDefault();
        // 2. Evitamos que el evento suba al padre (el Link)
        e.stopPropagation();

        // 3. Ejecutamos la lógica del carrito
        addToCart(book);
    };

    return (
        <Link to={`/book/${book.id}`} className="book-card__link">
            <article className="book-card">
                <img
                    src={book.image}
                    alt={book.title}
                    className="book-card__image"
                />
                <div className="book-card__content">
                    <h3 className="book-card__title">{book.title}</h3>
                    <p className="book-card__author">{book.author}</p>
                    <p className="book-card__price">{book.price} €</p>

                    {/* El botón ahora dispara nuestra función controlada */}
                    <button
                        className="book-card__button"
                        onClick={handleAddToCart}
                    >
                        Añadir a la cesta
                    </button>
                </div>
            </article>
        </Link>
    );
};