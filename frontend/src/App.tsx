// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem'
import './App.css';
import Atualizar from './pages/Atualizar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/atualizar/:id" element={<Atualizar />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
