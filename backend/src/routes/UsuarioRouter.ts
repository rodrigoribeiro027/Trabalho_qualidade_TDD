import { UsuarioCotroller } from "../controllers";
import { Router } from "express";

const routes = Router();

routes.post("/criar", UsuarioCotroller.createUsuario);
routes.get("/buscar", UsuarioCotroller.findAllUsuarios);
routes.get("/buscar/:id",UsuarioCotroller.buscarPorUmUsuario)
routes.put("/atualizar/:id",UsuarioCotroller.updateUsuario);
routes.delete("/excluir/:id",UsuarioCotroller.deleteUsuario);  
routes.post('/login', UsuarioCotroller.login);

export default routes;
