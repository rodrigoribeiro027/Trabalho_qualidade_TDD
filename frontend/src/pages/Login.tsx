// src/pages/Login.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login: React.FC = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form">
        <div className="auth-form-group">
          <label>Email:</label>
          <input type="email" required className="auth-input" />
        </div>
        <div className="auth-form-group">
          <label>Senha:</label>
          <input type="password" required className="auth-input" />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p className="auth-link">
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;
