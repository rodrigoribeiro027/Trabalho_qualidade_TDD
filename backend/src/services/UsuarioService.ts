import { Usuarios } from "../models/Usuarios";

class UsuarioService {
    generateToken(user: { nome: string; email: string; dataCriacao: Date; tipoUsuario?: number; _id: import("mongoose").Types.ObjectId; }) {
        throw new Error('Method not implemented.');
    }
    public async createUsuario(usuario) {
        try {
            if (!usuario.nome || !usuario.email || !usuario.senha) {
                throw new Error("Todos os campos (nome, email, senha ) são obrigatórios.");
            }
            const user = await Usuarios.create(usuario);
            return user.toObject(); // Converte para um objeto plano para garantir a serialização correta
        } catch (error) {
            throw error;
        }
    }

    public async findAllUsuario() {
        try {
            const usuarios = await Usuarios.find();
            return usuarios.map(user => user.toObject()); // Converte para objetos planos
        } catch (error) {
            throw error;
        }
    }

    public async findUsuariosById(id: string) {
        try {
            const usuario = await Usuarios.findById(id, '-__v').lean(); // Use lean para converter para objeto puro
            if (!usuario) {
                throw new Error(`Usuário ${id} não encontrado.`);
            }
            return usuario;
        } catch (error) {
            throw error;
        }
    }

    public async updateUsuario(id: string, usuarioData: any) {
        try {
            const usuario = await Usuarios.findByIdAndUpdate(id, usuarioData, { new: true }).lean();
            if (!usuario) {
                throw new Error(`Usuário ${id} não encontrado.`);
            }
            return usuario;
        } catch (error) {
            throw error;
        }
    }

    public async deleteUsuario(id: string) {
        try {
            const deleteUsuario = await Usuarios.findByIdAndDelete(id).lean();
            if (!deleteUsuario) {
                throw new Error(`Usuário ${id} não encontrado.`);
            }
            return { id: deleteUsuario._id, message: "User deleted successfully" };
        } catch (error) {
            throw error;
        }
    }
}

export default new UsuarioService();
