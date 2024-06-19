# Trabalho_qualidade_TDD


<h1> Tutorial de Utilização e Instalação da Aplicação do backend </h1>

### Rodar os testes do back-end com Jest 
Os testes incluem a aplicação de diferentes técnicas de teste de integração (bottom-up, top-down e big-bang)

Implantar esse sistema localmente:

<strong> 1. Clonar o repositório do Trabalho_qualidade_TDD </strong>
```console
git clone https://github.com/rodrigoribeiro027/Trabalho_qualidade_TDD.git
```
<strong> 2. Peque seu link do banco MongoDB e crie um arquivo .env na raiz do backend</strong> 
```console
Deixamos um exemplo.env para ser seguido para conexão do banco
```
<strong> 3. entre na pasta do back-end</strong> 
```console
cd backend
```
<strong> 4. Instalar dependencias do Projeto </strong> 
```console
npm install
```
<strong> 5. Executar a aplicação </strong> 
```console
npm test
```
## Test Results

### Arquivo de Teste

| Arquivo                                             | Tempo (s) |
|-----------------------------------------------------|-----------|
| `src/controllers/__tests__/UsuarioController.test.ts` | 8.06      |

### Detalhes dos Testes

| Teste                           | Método    | Duração       |
|---------------------------------|-----------|---------------|
| `should login a user`           | Bottom-up | 1336 ms (1.336 s) |
| `should create a new user`      | Bottom-up | 11 ms         |
| `should get all users`          | Top-down  | 8 ms          |
| `should update a user`          | Big-bang  | 11 ms         |
| `should delete a user`          | Big-bang  | 8 ms          |

### Resumo

| Resumo      | Quantidade            |
|-------------|-----------------------|
| Test Suites | 1 passed, 1 total     |
| Tests       | 5 passed, 5 total     |
| Snapshots   | 0 total               |
| Tempo Total | 8.297 s               |


<h1> Tutorial de Utilização e Instalação da Aplicação do frontend </h1>

<strong> 1. Clonar o repositório do Trabalho_qualidade_TDD </strong>
```console
git clone https://github.com/rodrigoribeiro027/Trabalho_qualidade_TDD.git
```

<strong> 2. Peque seu link do banco MongoDB e crie um arquivo .env na raiz do backend</strong> 
```console
Deixamos um exemplo.env para ser seguido para conexão do banco
```
<strong> 3. entre na pasta do back-end</strong> 
```console
cd backend
```
<strong> 4. Instalar dependencias do Projeto </strong> 
```console
npm install
```
<strong> 5. Executar o backend do Projeto </strong> 
```console
npm run dev
```

### Em outro terminal

<strong> 1. entre na pasta do front-end</strong> 
```console
cd frontend
```
<strong> 2. Instalar dependencias do Projeto </strong> 
```console
npm install
```
<strong> 3. Executar o frontend do Projeto </strong> 
```console
npm start
```

### Em outro terminal
<strong> 1. entre na pasta do front-end</strong> 
```console
cd frontend
```
<strong> 2. Executar o cypress </strong> 
```console
npx cypress open
```

<strong> 3. Clique em E2E Testing </strong> 
![image](https://github.com/rodrigoribeiro027/Trabalho_qualidade_TDD/assets/90697121/6015dc64-8508-4a47-b106-0e9f0a0e3c5d)

<strong> 4. Selecione o seu navegador de internet (Preferencialmente o Chrome) </strong> 
![image](https://github.com/rodrigoribeiro027/Trabalho_qualidade_TDD/assets/90697121/3c586abd-73ce-434a-b9f2-47e691053bf2)

<strong> 5. Selecione o spec.cy.ts e o teste já irá acontecer automaticamente </strong> 
![image](https://github.com/rodrigoribeiro027/Trabalho_qualidade_TDD/assets/90697121/1935c8f5-aab1-43a6-aae8-b538bc8a582f)
