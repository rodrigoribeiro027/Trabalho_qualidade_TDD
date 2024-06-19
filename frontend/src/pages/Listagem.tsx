import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { api } from '../service/api';
import { useNavigate } from 'react-router-dom';

interface User {
  _id: string;
  nome: string;
  email: string;
}

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #00008b;
  text-align: center;
`;

const UserListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const UserListItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.strong`
  color: #00008b;
`;

const UserEmail = styled.span`
  color: #666;
`;

const Button1 = styled.button`
  color: #fa1616;
  border-radius: 4px;
  padding: 10px;
  margin-left: 10px;
  font-weight: bold;
`;

const Button2 = styled.button`
  color: #f2cc33;
  border-radius: 4px;
  padding: 10px;
  margin-left: 10px;
  font-weight: bold;
`;

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const response = await api.get<User[]>("/usuarios/buscar");
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const deleteUser = useCallback(async (id: string) => {
    try {
      const response = await api.delete(`/usuarios/excluir/${id}`);
      console.log(response);
      navigate(0); // Atualiza a lista após a exclusão
    } catch (err) {
      console.error('Erro ao excluir usuário:', err);
    }
  }, [navigate]);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Container>
      <Title>Lista de Usuários</Title>
      <UserListContainer>
        {users.map(user => (
          <UserListItem key={user._id}>
            <UserName>{user.nome}</UserName> - <UserEmail>{user.email}</UserEmail>
            <Button1 type="button" onClick={() => deleteUser(user._id)}>Excluir</Button1>
            <Button2 type="button" onClick={() => navigate(`/atualizar/${user._id}`)}>Editar</Button2>
          </UserListItem>
        ))}
      </UserListContainer>
    </Container>
  );
};

export default UserList;