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
    atualizarHora(); // inicializa sem esperar

    return () => clearInterval(intervalo);
  }, []);

  return <h1>{horaAtual}</h1>;
}

export default function Relogio() {
    return (
        <>
        <h1>Meu Relógio</h1>
        </>
    );

}
