// src/pages/UserList.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface User {
  id: number;
  name: string;
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

  useEffect(() => {
    // Simulação de carregamento de usuários (substituir com lógica real)
    const mockUsers: User[] = [
      { id: 1, name: 'Usuário 1', email: 'usuario1@example.com' },
      { id: 2, name: 'Usuário 2', email: 'usuario2@example.com' },
      { id: 3, name: 'Usuário 3', email: 'usuario3@example.com' },
    ];
    setUsers(mockUsers);
  }, []);

  return (
    <Container>
      <Title>Lista de Usuários</Title>
      <UserListContainer>
        {users.map(user => (
          <UserListItem key={user.id}>
            <UserName>{user.name}</UserName> - <UserEmail>{user.email}</UserEmail>
          </UserListItem>
        ))}
      </UserListContainer>
    </Container>
  );
};

export default UserList;
