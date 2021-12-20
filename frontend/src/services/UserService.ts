import { api } from "./api";
import { User } from "../@Types/User";
import { toDateBr } from "../utils/date";

export const getUsers = async (): Promise<User[] | Error> => {
  const res = await api.get("/users");

  const users: User[] = res.data;

  if (!users) {
    return new Error("Não foi possĩvel obter a lista de usuários");
  }

  return Object.values(users).map((user: User) => ({
    ...user,
    birth_date_string: toDateBr(user.birth_date),
  }));
};

export const getUser = async (id: string): Promise<User | Error> => {
  const user: User = await api.get(`/user/${id}`);

  if (!user) {
    return new Error("Não foi possĩvel obter o usuário");
  }

  return user;
};

export const createUser = async (user: User): Promise<User | Error> => {
  const data = new FormData();

  data.append("name", user.name);
  data.append("birth_date", user.birth_date_string);
  data.append("file", user.image, user.image.name);

  const resp: User | Error = await api.post("/users", data);

  if (!resp || resp instanceof Error) {
    return new Error("Não foi possĩvel cadastrar o usuário");
  }

  return user;
};

export const updateUser = async (user: User): Promise<User | Error> => {
  console.log(user);
  try {
    const resp: User | Error = await api.put(`/users/${user.id}`, user);
    if (!resp || resp instanceof Error) {
      return new Error("Não foi possĩvel cadastrar o usuário");
    }
  } catch (e) {
    console.log(e);
  }

  return user;
};
