import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import booksData from '../mocks/Films.json';
import { Header } from '../components/Header.jsx';
import { useCart } from '../hooks/CartContext'; // Importamos el hook del carrito
import './BookDetail.css';

// 1. Recibimos onCartClick como prop
export const BookDetail = ({ onCartClick }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart(); // Extraemos la función para añadir

    // Buscamos el libro que coincida con el ID
    const book = booksData.find((b) => b.id === id);

    if (!book) {
        return (
            <div className="book-detail__error">
                <p>Libro no encontrado</p>
                <button onClick={() => navigate('/home')}>Volver a la tienda</button>
            </div>
        );
    }

    return (
        <div className="book-detail">
            {/* 2. Ahora onCartClick ya está definido */}
            <Header onCartClick={onCartClick} />

            <main className="book-detail__container">
                <button className="book-detail__back" onClick={() => navigate('/home')}>
                    ← Volver
                </button>

                <section className="book-detail__content">
                    <img src={book.image} alt={book.title} className="book-detail__image" />

                    <div className="book-detail__info">
                        <h1 className="book-detail__title">{book.title}</h1>
                        <p className="book-detail__author">Por: {book.author}</p>
                        <span className="book-detail__category">{book.category}</span>
                        <p className="book-detail__description">{book.description}</p>
                        <p className="book-detail__price">{book.price} €</p>

                        {/* 3. Conectamos el botón al carrito */}
                        <button
                            className="book-detail__add"
                            onClick={() => addToCart(book)}
                        >
                            Añadir a la cesta
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};