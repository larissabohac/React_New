import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((artwork) =>
        artwork.id === artworkId
          ? { ...artwork, seen: nextSeen }
          : artwork
      )
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((artwork) =>
        artwork.id === artworkId
          ? { ...artwork, seen: nextSeen }
          : artwork
      )
    );
  }

  return (
    <div
      className="p-4 mb-4 rounded-4"
      style={{
        background: "pink",
        boxShadow: "0 0 15px rgba(255,105,180,0.6)",
      }}
    >
      <h1 className="text-center mb-4 fw-bold">BucketList</h1>

      <h2 className="fw-semibold">My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />

      <h2 className="fw-semibold mt-4">Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </div>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul className="list-group mt-2">
      {artworks.map((artwork) => (
        <li
          key={artwork.id}
          className="list-group-item d-flex align-items-center"
          style={{
            background: "#ffe4ec",
            border: "1px solid #ff9ac2",
          }}
        >
          <input
            className="me-2"
            type="checkbox"
            checked={artwork.seen}
            onChange={(e) =>
              onToggle(artwork.id, e.target.checked)
            }
          />
          {artwork.title}
        </li>
      ))}
    </ul>
  );
}
