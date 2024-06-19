// src/pages/Signup.tsx
import { Link } from 'react-router-dom';
import './Auth.css';
import { useNavigate } from "react-router";
import React, { useCallback } from "react";
import axios from 'axios';
import { api } from "../service/api";
import { useForm } from "react-hook-form";


interface Cadastro {
  nome: String,
  email: String;
  senha: String,
}

const Cadastro: React.FC = () => {

  const navigate = useNavigate();

    const cadastroUsuario = useCallback(async (data: Cadastro) => {
        await api
            .post<Cadastro>(`/usuarios/criar`, {
                nome: data.nome,
                email: data.email,
                senha: data.senha, 
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    const onSubmit = useCallback(async (data: Cadastro) => {
        cadastroUsuario(data);
        navigate("/")
    }, []);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Cadastro>({
        mode: "onBlur",
    });

  return (
    <div className="auth-container">
      <h2 className="auth-title">Cadastro</h2>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth-form-group">
          <label>Nome:</label>
          <input type="text" required className="auth-input" {...register("nome")} />
        </div>
        <div className="auth-form-group">
          <label>Email:</label>
          <input type="email" required className="auth-input" {...register("email")} />
        </div>
        <div className="auth-form-group">
          <label>Senha:</label>
          <input type="password" required className="auth-input" {...register("senha")} />
        </div>
        <button type="submit" className="auth-button" onSubmit={() => navigate(`/`)}>Cadastrar</button>
      </form>
      <p className="auth-link">
        Já tem uma conta? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Cadastro;
