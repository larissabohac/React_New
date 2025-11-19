import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List4() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
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
        List-4
      </h1>

      <div className="text-center mb-3">
        <button
          onClick={handleClick}
          className="btn"
          style={{
            backgroundColor: "#8a3a55",
            color: "white",
            borderRadius: "8px",
            padding: "6px 18px",
            fontWeight: "600"
          }}
        >
          Reverse
        </button>
      </div>

      <ul className="list-group">
        {list.map((artwork) => (
          <li
            className="list-group-item"
            key={artwork.id}
            style={{
              backgroundColor: "#ffe9f3",
              border: "1px solid #8a3a55",
              color: "#8a3a55",
              fontWeight: "600",
            }}
          >
            {artwork.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
