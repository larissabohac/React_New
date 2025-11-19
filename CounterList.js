import { useState } from 'react';

let initialCounters = [0, 0, 0];

export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      return i === index ? c + 1 : c;
    });
    setCounters(nextCounters);
  }

  return (
    <div
      className="card shadow p-4 mx-auto mt-4"
      style={{
        maxWidth: "500px",
        backgroundColor: "#f8d7e5",
        borderRadius: "15px",
        border: "2px solid #8a3a55"
      }}
    >
      <h1
        className="display-6 text-center mb-4"
        style={{ color: "#8a3a55" }}
      >
        CounterList
      </h1>

      <ul className="list-group">
        {counters.map((counter, i) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={i}
            style={{
              backgroundColor: "#ffe9f3",
              border: "1px solid #8a3a55",
              color: "#8a3a55",
              fontWeight: "600"
            }}
          >
            {counter}
            <button
              className="btn"
              style={{
                backgroundColor: "#8a3a55",
                color: "white",
                borderRadius: "8px",
                padding: "4px 12px"
              }}
              onClick={() => handleIncrementClick(i)}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
