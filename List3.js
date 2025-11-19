import { useState } from 'react';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export default function List3() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <div
      className="card shadow p-4 mx-auto mt-4"
      style={{
        maxWidth: "500px",
        backgroundColor: "#f8d7e5",
        borderRadius: "15px",
        border: "2px solid #8a3a55",
      }}
    >
      <h1
        className="display-6 text-center mb-4"
        style={{ color: "#8a3a55" }}
      >
        List-3
      </h1>

      <h4 className="text-center mb-3" style={{ color: "#8a3a55" }}>
        Inspiring sculptors:
      </h4>

      <div className="d-flex gap-2 justify-content-center mb-3">
        <input
          className="form-control"
          style={{
            maxWidth: "250px",
            border: "1px solid #8a3a55",
            backgroundColor: "#ffe9f3",
            color: "#8a3a55",
            fontWeight: "600"
          }}
          placeholder="New artist..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="btn"
          style={{
            backgroundColor: "#8a3a55",
            color: "white",
            borderRadius: "8px",
            padding: "4px 14px",
          }}
          onClick={handleClick}
        >
          Insert
        </button>
      </div>

      <ul className="list-group">
        {artists.map((artist) => (
          <li
            className="list-group-item"
            key={artist.id}
            style={{
              backgroundColor: "#ffe9f3",
              border: "1px solid #8a3a55",
              color: "#8a3a55",
              fontWeight: "600",
            }}
          >
            {artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
