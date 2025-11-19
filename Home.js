import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "#ffe6f2", // rosinha claro de fundo
      }}
    >
      <div
        className="card shadow p-5 text-center"
        style={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "20px",
          background: "#fff0f7", // card rosa bem clarinho
        }}
      >
        <h2 className="mb-4" style={{ color: "#d63384" }}>
          Página Inicial
        </h2>

        <nav>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action">
              <Link to="/Atv01" className="text-decoration-none text-dark">
                <h5>Atividade 1</h5>
              </Link>
            </li>

            <li className="list-group-item list-group-item-action">
              <Link to="/Atv02" className="text-decoration-none text-dark">
                <h5>Atividade 2</h5>
              </Link>
            </li>

            <li className="list-group-item list-group-item-action">
              <Link to="/Atv03" className="text-decoration-none text-dark">
                <h5>Atividade 3</h5>
              </Link>
            </li>

            <li className="list-group-item list-group-item-action">
              <Link to="/Atv04" className="text-decoration-none text-dark">
                <h5>Atividade 4</h5>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
