import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useCallback } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { api } from '../service/api';
import './Auth.css';

interface Cadastro {
  id: string;
  nome: string;
  email: string;
}

const Atualizar: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<Cadastro | null>(null);

  const getUser = useCallback(async () => {
    try {
      const response = await api.get<Cadastro>(`/usuarios/buscar/${id}`);
      setUser(response.data);
      console.log('api',response.data)
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id, getUser]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<Cadastro>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Cadastro> = async (data) => {
    try {
      await api.put(`/usuarios/atualizar/${id}`, data);
      navigate('/listagem');
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="auth-container">
      <h2 className="auth-title">Editar Usuário</h2>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth-form-group">
          <label>Nome:</label>
          <input
            type="text"
            className="auth-input"
            {...register('nome', { required: 'Nome é obrigatório' })}
            defaultValue={user.nome}
          />
          {errors.nome && <span>{errors.nome.message}</span>}
        </div>
        <div className="auth-form-group">
          <label>Email:</label>
          <input
            type="email"
            className="auth-input"
            {...register('email', { required: 'Email é obrigatório' })}
            defaultValue={user.email}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit" className="auth-button">Atualizar</button>
      </form>
    </div>
  );
};

export default Atualizar;