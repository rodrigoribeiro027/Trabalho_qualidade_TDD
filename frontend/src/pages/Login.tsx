// src/pages/Login.tsx
import { Link } from 'react-router-dom';
import './Auth.css';
import React, { useState } from "react";
import axios from 'axios';
import { api } from "../service/api";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

interface UserLogin {
  email: string;
  senha: string;
}

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (event: any) => {
      event.preventDefault();
      await axios.post("http://localhost:3004/usuarios/login", {
          email: email,
          senha: password,
      }).then((res) => {
          console.log(res)
          setEmail("")
          setPassword("")
          navigate("/listagem")
      }
      ).catch((erro) => {
          event.preventDefault();
          console.error('Erro', erro.response)
      })
  }


  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form">
        <div className="auth-form-group">
          <label>Email:</label>
          <input type="email" required className="auth-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="auth-form-group">
          <label>Senha:</label>
          <input type="password" required className="auth-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="auth-button" onClick={login}>Login</button>
      </form>
      <p className="auth-link">
        Não tem uma conta? <Link className='cadastrar' to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;
