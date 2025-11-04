import React, { useState, useEffect } from 'react';

export default function Letreiro() {
  const texto = 'Conheça a Fatec';
  const [indice, setIndice] = useState(0);
  const [textoAtual, setTextoAtual] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (indice < texto.length) {
        setTextoAtual((prev) => prev + texto[indice]);
        setIndice(indice + 1);
      } else {
        setTextoAtual('');
        setIndice(0);
      }
    }, 200); // velocidade da "digitação"

    return () => clearTimeout(timeout);
  }, [indice, texto]);

  return <h1>{textoAtual}</h1>;
}
