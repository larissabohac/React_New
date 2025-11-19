import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div
      className="card p-4 shadow mx-auto mt-4 text-center"
      style={{
        maxWidth: "600px",
        backgroundColor: "#f8d7e5",  // 🌸 rosinha claro
        borderRadius: "15px"
      }}
    >
      <h1 className="display-5 text-center" style={{ color: "#8a3a55" }}>
        MovingDot
      </h1>

      <div
        onPointerMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }}
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          marginTop: "20px",
          backgroundColor: "#ffe9f3",   // fundo rosinha mais claro
          border: "2px solid #8a3a55",
          borderRadius: "12px",
          overflow: "hidden",
          cursor: "crosshair"
        }}
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#8a3a55', // bolinha rosa escuro
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)"
          }}
        />
      </div>
    </div>
  );
}
