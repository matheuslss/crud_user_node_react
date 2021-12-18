import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import multer from "multer";
import multerConfig from "../config/multer";

export class UserController {
  async create(request: Request, response: Response) {
    const { name, birth_date } = request.body;

    const service = new UserService();

    const result = service.createUser({ name, birth_date });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  async addUserAvatar(request: Request, response: Response) {
    const upload = multer(multerConfig).single("file");

    upload(request, response, (err) => {
      if (err != null) {
        return response.status(400).json(err.message);
      }

      return response.status(200).json("Upload successfully");
    });
  }

  async getAll(response: Response) {
    const service = new UserService();

    const result = await service.getUsers();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  async getUser(request: Request, response: Response) {
    const service = new UserService();

    const result = await service.getUser(request.params.id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const service = new UserService();

    const result = await service.deleteUser(request.params.id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).end();
  }

  async update(request: Request, response: Response) {
    const service = new UserService();
    const { name, birth_date } = request.body;

    const result = await service.updateUser({
      id: request.params.id,
      name,
      birth_date,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
