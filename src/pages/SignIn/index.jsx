import { useState } from "react";
import "./signin.css";

import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-center">
      <div className="Login">
        <div className="Login-area">
          <img src={logo} alt="Logo de sistema de chamados" />
        </div>

        <form>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" value="Acessar" />
        </form>

        <Link to ="register">Criar uma conta</Link>
      </div>
    </div>
  );
}
