import "./Auth.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Sign = () => {
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
          <h1>Реєстрація</h1>
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
              <label>
                Повторіть пароль:
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
              <button type="submit">Зареєструватися</button>
            </form>
            <h3>
              Вже маєте аккаунт? <Link to="/login">Увійти</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
