import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <div
      className="card p-4 shadow mx-auto mt-4 text-center"
      style={{
        maxWidth: "600px",
        backgroundColor: "#f8d7e5",   // 🌸 rosinha claro igual aos cards
        borderRadius: "15px"
      }}
    >
      <h1 className="display-5 text-center" style={{ color: "#8a3a55" }}>
        Form
      </h1>

      <form
        className="d-flex flex-column gap-3 mt-3"
        onSubmit={handleSubmit}
      >

        <div className="text-start">
          <label className="form-label fw-semibold" style={{ color: "#8a3a55" }}>
            To:
          </label>
          <select
            className="form-select"
            style={{
              borderColor: "#8a3a55",
              backgroundColor: "#ffe9f3"
            }}
            value={to}
            onChange={e => setTo(e.target.value)}
          >
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </div>

        <div>
          <textarea
            className="form-control"
            placeholder="Message"
            rows="4"
            style={{
              borderColor: "#8a3a55",
              backgroundColor: "#ffe9f3"
            }}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: "#8a3a55",
            color: "white",
            borderRadius: "10px"
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
