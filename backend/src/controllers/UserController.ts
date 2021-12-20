import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import multer from "multer";
import multerConfig from "../config/multer";

export class UserController {
  async create(request: Request, response: Response) {
    const upload = multer(multerConfig).single("file");
    const service = new UserService();

    upload(request, response, async (err) => {
      const { name, birth_date } = request.body;

      if (err != null) {
        return response.status(400).json(err.message);
      }

      const result = await service.createUser({
        name,
        birth_date: new Date(birth_date),
        url_img: request.file.path,
      });

      if (result instanceof Error) {
        return response.status(400).json(result.message);
      }

      return response.status(200).json(result);
    });
  }

  async getAll(request: Request, response: Response) {
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

    const user = await service.getUser(request.params.id);

    if (user instanceof Error) {
      return response.status(400).json("User not found");
    }

    const result = await service.updateUser({
      id: request.params.id,
      name,
      birth_date,
    });

    console.log(result);
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  async updateAvatar(request: Request, response: Response) {
    const upload = multer(multerConfig).single("file");
    const service = new UserService();

    upload(request, response, async (err) => {
      const { name, birth_date } = request.body;

      if (err != null) {
        return response.status(400).json(err.message);
      }

      const oldUser = await service.getUser(request.params.id);

      console.log("oldUser", oldUser);

      const data = {
        id: request.params.id,
        name,
        birth_date,
        url_img: request.file.path,
      };

      console.log("data", data);

      // const result = await service.updateUser(data);

      // if (result instanceof Error) {
      //   return response.status(400).json(result.message);
      // }

      // return response.status(200).json(result);
    });
  }
}
