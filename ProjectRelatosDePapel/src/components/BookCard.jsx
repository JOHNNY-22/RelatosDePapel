import React from 'react';
import './BookCard.css';

export const BookCard = ({ book }) => {
    return (
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
            </div>
        </article>
    );
};