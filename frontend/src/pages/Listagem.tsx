// src/pages/UserList.tsx
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { api } from '../service/api';
import { useParams } from 'react-router-dom';

interface User {
  id: number;
  nome: string;
  email: string;
}

const Container = styled.div`
  max-width: 600px;
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

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { id } = useParams();

  async function getAllUsers() {
    const response = await api.get<User[]>("/usuarios/buscar");
    setUsers(response.data);
}

const deleteUser = useCallback(async (id: string) => {
  await api
      .delete(`/usuarios/excluir/${id}`)
      .then(function (response) {
          if (response) {
              console.log(response)
          }
      })
      .catch((err) => {
          console.log(err);
      });
}, []);


useEffect(() => {
  getAllUsers();
}, []);

  return (
    <Container>
      <Title>Lista de Usuários</Title>
      <UserListContainer>
        {users.map(user => (
          <UserListItem key={user.id}>
            <UserName>{user.nome}</UserName> - <UserEmail>{user.email}</UserEmail>
            <button onClick={deleteUser(String(users?.id))} icon="pi pi-trash"></button>
          </UserListItem>
        ))}
      </UserListContainer>
    </Container>
  );
};

export default UserList;
