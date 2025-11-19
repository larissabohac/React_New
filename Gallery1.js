import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery1() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length); // volta para o início ao chegar no fim
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];

  return (
    <div
      style={{
        maxWidth: "600px",                 // igual ao Counter
        backgroundColor: "#f8d7e5",       // rosinha claro do Counter
        borderRadius: "15px",             // bordas arredondadas
        padding: "20px",
        margin: "20px auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // sombra suave
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#8a3a55", fontSize: "2rem", marginBottom: "16px" }}>
        Gallery 1
      </h1>

      <button
        onClick={handleNextClick}
        style={{
          backgroundColor: "#8a3a55",
          color: "white",
          borderRadius: "10px",
          padding: "10px 25px",
          fontWeight: "bold",
          border: "none",
          marginBottom: "12px",
          cursor: "pointer",
        }}
      >
        Next
      </button>

      <h2 style={{ color: "#8a3a55", fontWeight: "600", margin: "12px 0" }}>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>

      <h3 style={{ color: "#8a3a55", fontWeight: "500", marginBottom: "12px" }}>
        ({index + 1} of {sculptureList.length})
      </h3>

      <button
        onClick={handleMoreClick}
        style={{
          backgroundColor: "#8a3a55",
          color: "white",
          borderRadius: "10px",
          padding: "10px 25px",
          fontWeight: "bold",
          border: "none",
          marginBottom: "16px",
          cursor: "pointer",
        }}
      >
        {showMore ? "Hide" : "Show"} details
      </button>

      {showMore && (
        <p
          style={{
            backgroundColor: "#ffe9f3",
            padding: "12px",
            borderRadius: "12px",
            border: "2px solid #8a3a55",
            color: "#8a3a55",
            fontWeight: "500",
            marginBottom: "16px",
          }}
        >
          {sculpture.description}
        </p>
      )}

      <img
        src={sculpture.url}
        alt={sculpture.alt}
        style={{
          width: "100%",
          borderRadius: "12px",
          border: "2px solid #8a3a55",
          boxShadow: "0 6px 16px rgba(138, 58, 85, 0.35)",
        }}
      />
    </div>
  );
}
