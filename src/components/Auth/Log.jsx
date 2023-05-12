import "./Auth.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ваша логика проверки и отправки данных
  };
  return (
    <div className="auth">
      <div className="container">
        <div className="auth_wrapper">
          <h1>Вхід</h1>
          <div className="auth_form">
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label>
                Пароль:
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              <button type="submit">Ввійти</button>
            </form>
            <h3>
              Немаєте аккаунту? <Link to="/sign-up">Зареєструйтесь</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
