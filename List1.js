import { useState } from 'react';

let nextId = 0;

export default function List1() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div
      className="card shadow p-4 mx-auto mt-4"
      style={{
        maxWidth: "650px",
        backgroundColor: "#f8d7e5",    // rosinha
        borderRadius: "15px",
        border: "2px solid #8a3a55"    // rosa escuro
      }}
    >
      <h1
        className="display-6 text-center mb-4"
        style={{ color: "#8a3a55" }}
      >
        List-1
      </h1>

      <h3 className="text-center mb-3" style={{ color: "#8a3a55" }}>
        Inspiring sculptors:
      </h3>

      {/* Campo + botão */}
      <div className="d-flex gap-2 mb-3 justify-content-center">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-control"
          placeholder="Add a name..."
          style={{
            maxWidth: "300px",
            border: "2px solid #8a3a55",
            backgroundColor: "#ffe9f3"
          }}
        />

        <button
          className="btn fw-semibold"
          style={{
            backgroundColor: "#8a3a55",
            color: "white",
            borderRadius: "8px"
          }}
          onClick={() => {
            if (name.trim() === "") return;

            setArtists([
              ...artists,
              { id: nextId++, name: name }
            ]);

            setName('');
          }}
        >
          Add
        </button>
      </div>

      {/* Lista */}
      <ul
        className="list-group"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: "2px solid #8a3a55"
        }}
      >
        {artists.map(artist => (
          <li
            key={artist.id}
            className="list-group-item"
            style={{
              backgroundColor: "#ffe9f3",
              color: "#8a3a55",
              fontWeight: "600",
              borderBottom: "1px solid #8a3a55"
            }}
          >
            {artist.name}
          </li>
        ))}

        {artists.length === 0 && (
          <li
            className="list-group-item text-center"
            style={{
              backgroundColor: "#ffe9f3",
              color: "#8a3a55",
              border: "none"
            }}
          >
            Nenhum artista adicionado ainda.
          </li>
        )}
      </ul>
    </div>
  );
}
