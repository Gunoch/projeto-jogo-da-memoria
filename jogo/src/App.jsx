import React, { useState, useEffect } from "react";
import Tabuleiro from "./components/Tabuleiro";

function App() {
  const [cartas, setCartas] =useState([]);
  const [primeira, setPrimeira] = useState(null);
  const [segunda, setSegunda] = useState(null);
  const [travado, setTravado] = useState(0);
  const [jogadas, setJogadas] = setState(0);
  const [pares, setPares] = useState(0);

  function criarBaralho() {
    const emojis = ["🐸", "🐱", "🐶", "🐼"];
    const baralho = [];

    emojis.forEach((emoji, indice) => {
      baralho.push(
        { id: `${indice}-a`, emoji, virada: false, combinada: false},
        { id: `${indice}-b`, emoji, virada: false, combinada: false}
      );
    });

    for (let i = baralho.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
    }
    return baralho;

    function novoJogo() {
      setCartas(criarBaralho());
      setPrimeira(null);
      setSegunda(null);
      setTravado(false);
      setJogadas(0);
      setPares(0)
    }
    useEffect(() => {
      novoJogo();
    }, []);

    function aoClicarNaCarta(indice) {
      if (travado) return;

      const cartaAtual = cartas[indice];
      if (cartaAtual.virada || cartaAtual.combinada) return;

      const novasCartas = cartas.slice();
      novasCartas[indice] = { ...cartaAtual, virada: true }
      setCartas(novasCartas)
    }

  }
}

