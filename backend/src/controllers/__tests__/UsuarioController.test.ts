import request from 'supertest';
import app from '../../index';
import UsuarioController from '../../controllers/UsuarioCotroller';
import UsuarioService from '../../services/UsuarioService';

jest.mock("../../services/UsuarioService");

const mockUsuarios = [
    {
        _id: "666dd34aa54e13d52d3391ae",
        nome: "1adwada",
        email: "asdadwdaw@gmail.com",
        senha: "1234312412",
        dataCriacao: new Date().toISOString()
    },
    {
        _id: "66722fcb114a34090d93bf8f",
        nome: "kevin",
        email: "kevin@gmail.com",
        senha: "123",
        dataCriacao: new Date().toISOString()
    },
];


UsuarioService.createUsuario = jest.fn().mockResolvedValue({
    _id: "newGeneratedId", 
    nome: "enos123",
    email: "enos123@gmail.com",
    senha: "1234312412",
    dataCriacao: new Date().toISOString()
});

UsuarioService.findAllUsuario = jest.fn().mockResolvedValue(mockUsuarios);

UsuarioService.updateUsuario = jest.fn().mockResolvedValue({
    ...mockUsuarios[0],
    nome: "enos",
    email: "enos@gmail.com",
    senha: "1234312412",
    dataCriacao: new Date().toISOString()
});

UsuarioService.deleteUsuario = jest.fn().mockResolvedValue({
    id: mockUsuarios[0]._id,
    message: "User deleted successfully"
});

describe("UsuarioController Tests", () => {
    beforeAll(() => {
        jest.clearAllMocks();
    });

    // Testes Bottom-up
    describe('Bottom-up', () => {
        it('should login a user', async () => {
            const mockUser = { email: "asdadwdaw@gmail.com", senha: '1234312412' };
            const mockResponse = { message: 'Login realizado com sucesso...' };

            jest.spyOn(UsuarioController, 'login')

            const res = await request(app)
                .post('/usuarios/login')
                .send(mockUser);

            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockResponse);
        });

        it('should create a new user', async () => {
            const newUser = { nome: "enos123", email: "enos123@gmail.com", senha: "1234312412" };

            const res = await request(app).post("/usuarios/criar").send(newUser);

            expect(res.status).toBe(201);
            expect(res.body).toEqual(expect.objectContaining({
                nome: newUser.nome,
                email: newUser.email,
                senha: newUser.senha,
                _id: expect.any(String), 
                dataCriacao: expect.any(String) 
            }));
            expect(UsuarioService.createUsuario).toHaveBeenCalledWith(newUser);
        });
    });

    // Testes Top-down
    describe("Top-down", () => {
        it("should get all users", async () => {
            const res = await request(app).get("/usuarios/buscar");
            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockUsuarios);
        });
    });


    // Testes Big-bang
    describe('Big-bang', () => {
        it('should update a user', async () => {
            const updatedUser = { nome: "enos", email: "enos@gmail.com", senha: "1234312412" };
            const userId = "666dd34aa54e13d52d3391ae"; 

            const res = await request(app).put(`/usuarios/atualizar/${userId}`).send(updatedUser);

            expect(res.status).toBe(200);
            expect(res.body).toEqual(expect.objectContaining({
                nome: updatedUser.nome,
                email: updatedUser.email,
                senha: updatedUser.senha,
                _id: expect.any(String),
                dataCriacao: expect.any(String) 
            }));
            expect(UsuarioService.updateUsuario).toHaveBeenCalledWith(userId, updatedUser);
        });

        it("should delete a user", async () => {
            const mockResponse = { id: mockUsuarios[0]._id, message: "User deleted successfully" };

            (UsuarioService.deleteUsuario as jest.Mock).mockResolvedValueOnce(mockResponse);

            const res = await request(app).delete(`/usuarios/excluir/${mockUsuarios[0]._id}`);

            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockResponse);
        });
    });
});