import {Header} from "../components/Header.jsx"
import booksData from "../mocks/Films.json"
import {BookCard} from "../components/BookCard.jsx";
import "./Home.css"
import {useState} from "react";

// CORRECCIÓN: Recibe onCartClick como prop aquí
export const Home = ({ onCartClick }) => {

    const [textofiltro, setfiltrolibro] = useState("");

    const filterdebooks = textofiltro === ""
        ? booksData
        : booksData.filter((b) => b.title.toLowerCase().includes(textofiltro.toLowerCase()));

    return (
        <div className="home">
            {/* Ahora onCartClick ya existe porque viene de App.jsx */}
            <Header onCartClick={onCartClick} />

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
                {filterdebooks.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                    />
                ))}
            </main>
        </div>
    )
}