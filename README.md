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
<strong> 2. entre na pasta do back-end</strong> 
```console
Cd backend
```
<strong> 3. Instalar dependencias do Projeto </strong> 
```console
Npm install
```
<strong> 5. Executar a aplicação </strong> 
```console
Npm test
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
