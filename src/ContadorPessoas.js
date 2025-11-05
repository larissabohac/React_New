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
    <div className="app">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .app {
          font-family: "Segoe UI", Roboto, Arial, sans-serif;
          background: #f3f4f6;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .counter-card {
          width: 340px;
          background: #ffffff;
          border-radius: 12px;
          padding: 20px 20px 18px;
          box-shadow: 0 8px 22px rgba(20, 20, 20, 0.12);
          position: relative;
          text-align: center;
        }
        .refresh-btn {
          position: absolute;
          right: 14px;
          top: 14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .refresh-btn:hover { transform: rotate(10deg); }
        .header-title { font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 8px; }
        .total-display { display: flex; flex-direction: column; align-items: center; margin-bottom: 14px; }
        .total-value {
          margin-top: 8px; min-width: 96px; padding: 10px 18px;
          font-size: 22px; font-weight: 700; border-radius: 10px;
          border: 2px solid #e6e7ea; background: #fff;
          box-shadow: 0 2px 6px rgba(10, 10, 10, 0.04);
          text-align: center;
        }
        .people-row { display: flex; gap: 12px; justify-content: space-between; }
        .person { width: calc(50% - 6px); display: flex; flex-direction: column; align-items: center; }
        .avatar img {
          width: 120px; height: auto; display: block; margin-bottom: 6px;
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.08));
        }
        .controls { display: flex; gap: 10px; margin: 6px 0; }
        .circle-btn {
          width: 46px; height: 46px; border-radius: 50%;
          border: none; display: inline-flex; align-items: center;
          justify-content: center; font-size: 22px; font-weight: 700;
          color: #fff; cursor: pointer;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
        }
        .btn-plus { background: #4caf50; }
        .btn-minus { background: #e84b4b; }
        .person-label { margin-top: 6px; font-weight: 600; color: #333; }
        .individual-value {
          margin-top: 8px; padding: 8px 14px; border-radius: 8px;
          border: 2px solid #e6e7ea; min-width: 56px; text-align: center;
          font-weight: 700; background: #fff;
          box-shadow: 0 2px 6px rgba(10, 10, 10, 0.03);
        }
      `}</style>

      <button className="voltar-btn" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="counter-card">
        <button className="refresh-btn" title="Zerar contagem" onClick={resetar}>
          &#x21bb;
        </button>

        <div className="header-title">Total</div>

        <div className="total-display">
          <div className="total-value">{total}</div>
        </div>

        <div className="people-row">
          {/* Homens */}
          <div className="person">
            <div className="avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1154/1154473.png"
                alt="Homens"
              />
            </div>
            <div className="controls">
              <button
                className="circle-btn btn-plus"
                onClick={() => setHomens(homens + 1)}
              >
                +
              </button>
              <button
                className="circle-btn btn-minus"
                onClick={() => setHomens(Math.max(0, homens - 1))}
              >
                −
              </button>
            </div>
            <div className="person-label">Homens</div>
            <div className="individual-value">{homens}</div>
          </div>

          {/* Mulheres */}
          <div className="person">
            <div className="avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1154/1154478.png"
                alt="Mulheres"
              />
            </div>
            <div className="controls">
              <button
                className="circle-btn btn-plus"
                onClick={() => setMulheres(mulheres + 1)}
              >
                +
              </button>
              <button
                className="circle-btn btn-minus"
                onClick={() => setMulheres(Math.max(0, mulheres - 1))}
              >
                −
              </button>
            </div>
            <div className="person-label">Mulheres</div>
            <div className="individual-value">{mulheres}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
