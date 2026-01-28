import React from "react";
import "./Footer.css"


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <section className="footer__contact">
                    <p className="footer__text">
                        <b className="footer__label">Correo:</b> johnny.altes1@gmail.com
                    </p>
                    <p className="footer__text">
                        <b className="footer__label">Teléfono:</b> 606796768
                    </p>
                </section>

                <section className="footer__info">
                    {/* Aquí podrías poner enlaces o redes sociales más adelante */}
                </section>
            </div>
            <p className="footer__copyright">© 2026 Relatos de Papel - UNIR.</p>
        </footer>
    );
}