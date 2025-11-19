import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });

    setShapes(nextShapes);
  }

  return (
    <div
      className="card shadow p-4 mx-auto mt-4"
      style={{
        maxWidth: "650px",
        backgroundColor: "#f8d7e5",
        borderRadius: "15px",
        border: "2px solid #8a3a55"
      }}
    >
      <h1
        className="display-6 text-center mb-4"
        style={{ color: "#8a3a55" }}
      >
        ShapeEditor
      </h1>

      <div className="text-center">
        <button
          className="btn"
          style={{
            backgroundColor: "#8a3a55",
            color: "white",
            borderRadius: "10px",
            fontWeight: "600",
            padding: "8px 16px"
          }}
          onClick={handleClick}
        >
          Move circles down!
        </button>
      </div>

      <div
        style={{
          position: "relative",
          height: 500,
          marginTop: "25px",
          border: "2px solid #8a3a55",
          borderRadius: "10px",
          backgroundColor: "#ffe9f3"
        }}
      >
        {shapes.map(shape => (
          <div
            key={shape.id}
            style={{
              background: "#8a3a55",
              position: "absolute",
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === "circle" ? "50%" : "5px",
              width: 25,
              height: 25,
            }}
          />
        ))}
      </div>
    </div>
  );
}
