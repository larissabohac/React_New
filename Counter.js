import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div
      className="card p-4 shadow mx-auto mt-4 text-center"
      style={{
        maxWidth: "600px",
        backgroundColor: "#f8d7e5",   // 🌸 rosinha claro do padrão
        borderRadius: "15px"
      }}
    >
      <h1 className="display-5 text-center" style={{ color: "#8a3a55" }}>
        Counter
      </h1>

      <h2
        style={{
          color: "#8a3a55",
          backgroundColor: "#ffe9f3",
          display: "inline-block",
          padding: "10px 25px",
          borderRadius: "12px",
          border: "2px solid #8a3a55",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        {number}
      </h2>

      <br />

      <button
        type="button"
        className="btn"
        onClick={() => {
          setNumber(n => n + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}
        style={{
          backgroundColor: "#8a3a55",
          color: "white",
          borderRadius: "10px",
          padding: "10px 25px",
          fontWeight: "bold"
        }}
      >
        +3
      </button>
    </div>
  );
}
