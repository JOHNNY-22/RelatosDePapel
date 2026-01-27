import {Header} from "../components/Header.jsx"
import booksData from "../mocks/Films.json"
import {BookCard} from "../components/BookCard.jsx";
import "./Home.css"
import {useState} from "react";

export const Home = () => {

    const [textofiltro, setfiltrolibro] = useState("");

    const filterdebooks = textofiltro === "" ? booksData : booksData.filter((b) => b.title.toLocaleLowerCase().includes(textofiltro.toLowerCase()))

    return (
        <div className="home">
            <Header />
            <section className="home__search-container">
                <input
                    type="text"
                    placeholder="¿Qué libro buscas hoy?..."
                    className="home__search-input"
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