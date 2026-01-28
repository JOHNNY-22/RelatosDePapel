import { Header } from "../components/Header.jsx"
import booksData from "../mocks/books.json"
import { BookCard } from "../components/BookCard.jsx";
import "./Home.css"
import { useState } from "react";

// CORRECCIÓN: Recibe onCartClick como prop aquí
export const Home = () => {

    const [textofiltro, setfiltrolibro] = useState("");

    const filterdebooks = textofiltro === ""
        ? booksData
        : booksData.filter((b) => b.title.toLowerCase().includes(textofiltro.toLowerCase()));

    return (
        <div className="home">
            {/* El Header ya gestiona el carrito internamente */}
            <Header />

            <section className="home__search-container">
                <input
                    type="text"
                    placeholder="¿Qué libro buscas hoy?..."
                    className="home__search-input"
                    value={textofiltro}
                    onChange={(e) => setfiltrolibro(e.target.value)}
                />
            </section>

            <main className="home__books">
                {filterdebooks.length > 0 ? (
                    filterdebooks.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    ))
                ) : (
                    <div className="home__no-results">
                        <p>No se encontraron libros con ese título 😔</p>
                    </div>
                )}
            </main>
        </div>
    )
}