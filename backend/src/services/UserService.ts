import { getRepository } from "typeorm";
import User from "../entities/User";

type UserRequest = {
  name: string;
  birth_date: Date;
};

export class UserService {
  async createUser({ name, birth_date }: UserRequest): Promise<User | Error> {
    const repo = getRepository(User);
    const user = repo.create({
      name,
      birth_date,
    });

    const newUser = await repo.save(user);
    if (!newUser) {
      return new Error("Unable to create user!");
    }

    return newUser;
  }

  async getUsers(): Promise<User[] | Error> {
    const repo = getRepository(User);

    const users = await repo.find();

    if (!users) {
      return new Error("Unable to get users!");
    }

    return users;
  }

  async getUser(id: string): Promise<User | Error> {
    const repo = getRepository(User);

    const user = await repo.findOne(id);

    if (!user) {
      return new Error("User does not exists!");
    }

    return user;
  }

  async deleteUser(id: string): Promise<Error> | null {
    const repo = getRepository(User);

    const user = await repo.findOne(id);

    if (!user) {
      return new Error("User does not exists!");
    }

    await repo.delete(id);
  }

  async updateUser({ id, name, birth_date }: User): Promise<User | Error> {
    const repo = getRepository(User);

    const user = await repo.findOne(id);

    if (!user) {
      return new Error("User does not exists!");
    }

    user.name = name ? name : user.name;
    user.birth_date = birth_date ? birth_date : user.birth_date;

    return await repo.save(user);
  }
}
