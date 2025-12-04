import React, { useState, useEffect } from "react";
import Tabuleiro from "./components/Tabuleiro";

function App() {
  const [cartas, setCartas] = useState([]);
  const [primeira, setPrimeira] = useState(null);
  const [segunda, setSegunda] = useState(null);
  const [travado, setTravado] = useState(false);
  const [jogadas, setJogadas] = useState(0);
  const [pares, setPares] = useState(0);

  function criarBaralho() {
    const emojis = ["🐸", "🐱", "🐶", "🐼"];
    const baralho = [];

    emojis.forEach((emoji, indice) => {
      baralho.push(
        { id: `${indice}-a`, emoji, virada: false, combinada: false },
        { id: `${indice}-b`, emoji, virada: false, combinada: false }
      );
    });

    for (let i = baralho.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
    }
    return baralho;
  }

  function novoJogo() {
    setCartas(criarBaralho());
    setPrimeira(null);
    setSegunda(null);
    setTravado(false);
    setJogadas(0);
    setPares(0);
  }

  useEffect(() => {
    novoJogo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function aoClicarNaCarta(indice) {
    if (travado) return;

    const cartaAtual = cartas[indice];
    if (!cartaAtual || cartaAtual.virada || cartaAtual.combinada) return;

    const novasCartas = cartas.slice();
    novasCartas[indice] = { ...cartaAtual, virada: true };
    setCartas(novasCartas);

    if (primeira === null) {
      setPrimeira(indice);
      return;
    }

    if (segunda === null) {
      setSegunda(indice);
      setTravado(true);
      setJogadas((j) => j + 1);

      const primeiraIndice = primeira;
      const segundaIndice = indice;

      setTimeout(() => {
        const cartaA = novasCartas[primeiraIndice];
        const cartaB = novasCartas[segundaIndice];

        if (cartaA.emoji === cartaB.emoji) {
          const atualizadas = novasCartas.slice();
          atualizadas[primeiraIndice] = { ...cartaA, combinada: true };
          atualizadas[segundaIndice] = { ...cartaB, combinada: true };
          setCartas(atualizadas);
          setPares((p) => p + 1);
        } else {
          const atualizadas = novasCartas.slice();
          atualizadas[primeiraIndice] = { ...cartaA, virada: false };
          atualizadas[segundaIndice] = { ...cartaB, virada: false };
          setCartas(atualizadas);
        }

        setPrimeira(null);
        setSegunda(null);
        setTravado(false);
      }, 800);
    }
  }

  return (
    <div className="App">
      <h1>Jogo da Memória</h1>
      <Tabuleiro cartas={cartas} aoClicar={aoClicarNaCarta} />
      <div style={{ marginTop: 12 }}>
        Jogadas: {jogadas} | Pares: {pares}
      </div>
      <button onClick={novoJogo} style={{ marginTop: 8 }}>
        Novo Jogo
      </button>
    </div>
  );
}

export default App;

