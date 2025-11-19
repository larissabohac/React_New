import { useState } from 'react';

export default function Form2() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return (
    <div
      className="card shadow p-4 mx-auto mt-4"
      style={{
        maxWidth: "600px",
        backgroundColor: "#f8d7e5", // rosinha
        borderRadius: "15px",
        border: "2px solid #8a3a55"
      }}
    >
      <h1
        className="display-6 text-center mb-4"
        style={{ color: "#8a3a55" }}
      >
        Form-2
      </h1>

      <div className="d-flex flex-column gap-3">

        <label className="fw-semibold" style={{ color: "#8a3a55" }}>
          First name:
          <input
            className="form-control mt-1"
            value={person.firstName}
            onChange={handleFirstNameChange}
            style={{
              border: "2px solid #8a3a55",
              backgroundColor: "#ffe9f3"
            }}
          />
        </label>

        <label className="fw-semibold" style={{ color: "#8a3a55" }}>
          Last name:
          <input
            className="form-control mt-1"
            value={person.lastName}
            onChange={handleLastNameChange}
            style={{
              border: "2px solid #8a3a55",
              backgroundColor: "#ffe9f3"
            }}
          />
        </label>

        <label className="fw-semibold" style={{ color: "#8a3a55" }}>
          Email:
          <input
            className="form-control mt-1"
            value={person.email}
            onChange={handleEmailChange}
            style={{
              border: "2px solid #8a3a55",
              backgroundColor: "#ffe9f3"
            }}
          />
        </label>

        <p
          className="text-center fw-bold mt-3"
          style={{ color: "#8a3a55", background: "#ffe9f3", padding: "10px", borderRadius: "10px" }}
        >
          {person.firstName} {person.lastName} ({person.email})
        </p>

      </div>
    </div>
  );
}
