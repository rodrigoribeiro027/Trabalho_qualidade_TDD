// src/pages/Signup.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Cadastro: React.FC = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Cadastro</h2>
      <form className="auth-form">
        <div className="auth-form-group">
          <label>Nome:</label>
          <input type="text" required className="auth-input" />
        </div>
        <div className="auth-form-group">
          <label>Email:</label>
          <input type="email" required className="auth-input" />
        </div>
        <div className="auth-form-group">
          <label>Senha:</label>
          <input type="password" required className="auth-input" />
        </div>
        <button type="submit" className="auth-button">Cadastrar</button>
      </form>
      <p className="auth-link">
        Já tem uma conta? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Cadastro;
