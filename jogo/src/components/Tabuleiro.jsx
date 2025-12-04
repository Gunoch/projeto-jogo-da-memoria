import React from "react";
import Carta from "./Carta";

function Tabuleiro({ cartas, aoClicar }) {
    return (
        <div className="tabuleiro">
            {cartas.map((carta, indice) => (
                <Carta
                    key={carta.id}
                    carta={carta}
                    onClick={() => aoClicar(indice)}
                />
            ))}
        </div>
    );
}

export default Tabuleiro;