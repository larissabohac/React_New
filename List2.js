import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export default function List2() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <div
      className="card shadow p-4 mx-auto mt-4"
      style={{
        maxWidth: "650px",
        backgroundColor: "#f8d7e5",      // rosinha
        borderRadius: "15px",
        border: "2px solid #8a3a55"      // rosa escuro
      }}
    >
      <h1
        className="display-6 text-center mb-4"
        style={{ color: "#8a3a55" }}
      >
        List-2
      </h1>

      <h3 className="text-center mb-3" style={{ color: "#8a3a55" }}>
        Inspiring sculptors:
      </h3>

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
            className="list-group-item d-flex justify-content-between align-items-center"
            key={artist.id}
            style={{
              backgroundColor: "#ffe9f3",
              color: "#8a3a55",
              fontWeight: "600",
              borderBottom: "1px solid #8a3a55"
            }}
          >
            {artist.name}

            <button
              className="btn btn-sm"
              style={{
                backgroundColor: "#8a3a55",
                color: "white",
                borderRadius: "8px",
                padding: "4px 10px",
                fontWeight: "600"
              }}
              onClick={() => {
                setArtists(artists.filter(a => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}

        {artists.length === 0 && (
          <li
            className="list-group-item text-center"
            style={{
              backgroundColor: "#ffe9f3",
              color: "#8a3a55",
              border: "none",
              fontWeight: "600"
            }}
          >
            Nenhum artista restante.
          </li>
        )}
      </ul>
    </div>
  );
}
