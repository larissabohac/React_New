import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContadorPessoas() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const navigate = useNavigate();

  const total = homens + mulheres;

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body, html {
          width: 100%;
          height: 100%;
        }

        /* BOTÃO VOLTAR (corrigido — não fica dentro do container central) */
        .voltar-container {
          width: 100%;
          padding: 20px;
        }

        .voltar-btn {
          background: #ffb3d9;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(255, 153, 204, 0.3);
        }
        
        .voltar-btn:hover {
          background: #ff99cc;
        }

        /* CONTEÚDO DA PÁGINA */
        .app {
          font-family: "Segoe UI", Roboto, Arial, sans-serif;
          background: #ffe6f2;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .counter-card {
          width: 340px;
          background: #ffffff;
          border-radius: 16px;
          padding: 22px;
          border: 2px solid #ffb3d9;
          box-shadow: 0 8px 20px rgba(255, 153, 204, 0.25);
          position: relative;
          text-align: center;
        }

        .refresh-btn {
          position: absolute;
          right: 14px;
          top: 14px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: #ffb3d9;
          cursor: pointer;
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          transition: 0.2s;
        }

        .refresh-btn:hover {
          background: #ff99cc;
          transform: rotate(10deg);
        }

        .header-title {
          font-size: 20px;
          font-weight: 700;
          color: #cc0066;
          margin-bottom: 10px;
        }

        .total-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
        }

        .total-value {
          margin-top: 8px;
          min-width: 96px;
          padding: 10px 18px;
          font-size: 26px;
          font-weight: 700;
          border-radius: 10px;
          border: 2px solid #ffb3d9;
          background: #ffe6f2;
          color: #99004d;
          box-shadow: 0 3px 6px rgba(255, 153, 204, 0.3);
          text-align: center;
        }

        .people-row {
          display: flex;
          gap: 12px;
          justify-content: space-between;
        }

        .person {
          width: calc(50% - 6px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .avatar img {
          width: 120px;
          height: auto;
          margin-bottom: 6px;
          filter: drop-shadow(0 6px 12px rgba(255, 153, 204, 0.35));
        }

        .controls {
          display: flex;
          gap: 10px;
          margin: 6px 0;
        }

        .circle-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(255, 153, 204, 0.35);
          transition: 0.2s;
        }

        .btn-plus {
          background: #ff66b3;
        }

        .btn-plus:hover {
          background: #ff4da6;
        }

        .btn-minus {
          background: #ff99cc;
        }

        .btn-minus:hover {
          background: #ff80bf;
        }

        .person-label {
          margin-top: 6px;
          font-weight: 600;
          color: #cc0066;
        }

        .individual-value {
          margin-top: 8px;
          padding: 8px 14px;
          border-radius: 8px;
          border: 2px solid #ffb3d9;
          min-width: 56px;
          font-weight: 700;
          background: #ffe6f2;
          color: #99004d;
          text-align: center;
          box-shadow: 0 2px 6px rgba(255, 153, 204, 0.25);
        }

      `}</style>

      {/* Botão Voltar fora do card, agora no topo da página */}
      <div className="voltar-container">
        <button className="voltar-btn" onClick={() => navigate(-1)}>
          ← Voltar
        </button>
      </div>

      {/* Conteúdo central */}
      <div className="app">
        <div className="counter-card">
          <button className="refresh-btn" title="Zerar contagem" onClick={resetar}>
            &#x21bb;
          </button>

          <div className="header-title">Total</div>

          <div className="total-display">
            <div className="total-value">{total}</div>
          </div>

          <div className="people-row">

            <div className="person">
              <div className="avatar">
                <img src="https://cdn-icons-png.flaticon.com/512/1154/1154473.png" alt="Homens" />
              </div>

              <div className="controls">
                <button className="circle-btn btn-plus" onClick={() => setHomens(homens + 1)}>+</button>
                <button className="circle-btn btn-minus" onClick={() => setHomens(Math.max(0, homens - 1))}>−</button>
              </div>

              <div className="person-label">Homens</div>
              <div className="individual-value">{homens}</div>
            </div>

            <div className="person">
              <div className="avatar">
                <img src="https://cdn-icons-png.flaticon.com/512/1154/1154478.png" alt="Mulheres" />
              </div>

              <div className="controls">
                <button className="circle-btn btn-plus" onClick={() => setMulheres(mulheres + 1)}>+</button>
                <button className="circle-btn btn-minus" onClick={() => setMulheres(Math.max(0, mulheres - 1))}>−</button>
              </div>

              <div className="person-label">Mulheres</div>
              <div className="individual-value">{mulheres}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
