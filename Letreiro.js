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
    }, 200);

    return () => clearTimeout(timeout);
  }, [indice]);

  return (
    <div className="letreiro-container">
      <style>{`
        .letreiro-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .letreiro-text {
          font-family: "Segoe UI", Roboto, Arial, sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #cc0066; 
          background: #ffe6f2;
          padding: 14px 26px;
          border-radius: 12px;
          border: 2px solid #ffb3d9;
          box-shadow: 0 6px 14px rgba(255, 153, 204, 0.35);
          text-align: center;
          min-width: 260px;
        }
      `}</style>

      <h1 className="letreiro-text">{textoAtual}</h1>
    </div>
  );
}
