import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();

routes.post("/users", new UserController().create);
routes.post("/users/avatar", new UserController().addUserAvatar);
routes.get("/users", new UserController().getAll);
routes.get("/users/:id", new UserController().getUser);
routes.delete("/users/:id", new UserController().delete);
routes.put("/users/:id", new UserController().update);

export { routes };
