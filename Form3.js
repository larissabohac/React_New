import { useState } from 'react';

export default function Form3() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <div
      className="card shadow p-4 mx-auto mt-4"
      style={{
        maxWidth: "650px",
        backgroundColor: "#f8d7e5",     // rosinha
        borderRadius: "15px",
        border: "2px solid #8a3a55"     // rosa escuro
      }}
    >
      <h1
        className="display-6 text-center mb-4"
        style={{ color: "#8a3a55" }}
      >
        Form-3
      </h1>

      {/* Inputs */}
      <div className="d-flex flex-column gap-3">

        <label className="fw-semibold" style={{ color: "#8a3a55" }}>
          Name:
          <input
            className="form-control mt-1"
            value={person.name}
            onChange={handleNameChange}
            style={{
              border: "2px solid #8a3a55",
              backgroundColor: "#ffe9f3"
            }}
          />
        </label>

        <label className="fw-semibold" style={{ color: "#8a3a55" }}>
          Title:
          <input
            className="form-control mt-1"
            value={person.artwork.title}
            onChange={handleTitleChange}
            style={{
              border: "2px solid #8a3a55",
              backgroundColor: "#ffe9f3"
            }}
          />
        </label>

        <label className="fw-semibold" style={{ color: "#8a3a55" }}>
          City:
          <input
            className="form-control mt-1"
            value={person.artwork.city}
            onChange={handleCityChange}
            style={{
              border: "2px solid #8a3a55",
              backgroundColor: "#ffe9f3"
            }}
          />
        </label>

        <label className="fw-semibold" style={{ color: "#8a3a55" }}>
          Image:
          <input
            className="form-control mt-1"
            value={person.artwork.image}
            onChange={handleImageChange}
            style={{
              border: "2px solid #8a3a55",
              backgroundColor: "#ffe9f3"
            }}
          />
        </label>
      </div>

      {/* Texto formatado */}
      <p
        className="text-center fw-bold mt-4"
        style={{
          color: "#8a3a55",
          background: "#ffe9f3",
          padding: "10px",
          borderRadius: "10px"
        }}
      >
        <i>{person.artwork.title}</i> by {person.name}
        <br />
        (located in {person.artwork.city})
      </p>

      {/* Imagem */}
      <div className="text-center mt-3">
        <img
          src={person.artwork.image}
          alt={person.artwork.title}
          style={{
            width: "70%",
            borderRadius: "12px",
            border: "3px solid #8a3a55",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        />
      </div>
    </div>
  );
}
