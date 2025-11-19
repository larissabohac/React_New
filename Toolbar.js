function Button({ onClick, children }) {
  return (
    <button
      type="button"
      className="custom-btn"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
      <style>{`
        .custom-btn {
          background-color: #8a3a55;  /* cor do botão do Counter */
          color: white;
          border-radius: 10px;
          padding: 10px 25px;
          font-weight: bold;
          cursor: pointer;
          border: none;
          margin: 8px;
          transition: 0.2s;
        }

        .custom-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .custom-btn:active {
          transform: scale(0.97);
        }
      `}</style>
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className="toolbar-card"
      onClick={() => alert("You clicked on the toolbar!")}
      style={{
        maxWidth: "600px",               // mesmo tamanho do Counter
        backgroundColor: "#f8d7e5",      // rosinha claro do Counter
        borderRadius: "15px",
        padding: "20px",
        margin: "20px auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "#8a3a55", fontSize: "2rem", marginBottom: "16px" }}>
        Toolbar
      </h1>

      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
