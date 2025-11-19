import React, { useState, useEffect } from 'react';

export default function Relogio() {
  const [horaAtual, setHoraAtual] = useState('');

  useEffect(() => {
    function atualizarHora() {
      const agora = new Date();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');

      setHoraAtual(`${horas}:${minutos}:${segundos}`);
    }

    const intervalo = setInterval(atualizarHora, 1000);
    atualizarHora();

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="d-flex justify-content-center mt-5">
      <div
        className="p-4 rounded shadow text-center"
        style={{
          backgroundColor: "#ffe6f2",
          maxWidth: "350px",
          width: "100%",
          border: "2px solid #ffb3d9",
        }}
      >
        <h2 style={{ color: "#cc0066" }}>Relógio Digital</h2>

        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#99004d",
            marginTop: "20px",
          }}
        >
          {horaAtual}
        </h1>
      </div>
    </section>
  );
}
