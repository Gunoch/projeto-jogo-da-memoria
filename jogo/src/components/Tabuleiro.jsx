import React from "react";
import Carta from "./Carta"

function Tabuleiro ({ cartas, aoClicarCarta }) {
    return (
        <div className="tabuleiro">
            {cartas.map((carta, indice) => (
                <Carta
                    key={carta.id}
                    carta={carta}
                    onClick={() => aoClicarCarta(indice)}
                />
            ))}
        </div>
    );
}