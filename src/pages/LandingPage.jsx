import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimer } from '../hooks/useTimer'; // Asegúrate de que la ruta sea correcta
import "./LandingPage.css"

export const LandingPage = () => {
const navigate = useNavigate();
const timeLeft = useTimer(5);
useEffect(() => {
    if (timeLeft === 0) {
        navigate('/Home');
    }
}, [timeLeft]);
    return (
        <main className={"landing"}>
            <section className={"landing__foto"}>
              <div className={"landing__content"}>
                  <h1 className="landing__title">Relatos de Papel</h1>
                  <p className="landing__description">Descubre tu próxima aventura literaria</p>
                  <button className="landing__button">Explorar Catálogo</button>
                  <p>Tiempo restante {timeLeft} </p>
              </div>
            </section>
        </main>
    );
};

