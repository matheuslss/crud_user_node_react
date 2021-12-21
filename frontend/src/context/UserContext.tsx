import { createContext, useState } from "react";
import { User } from "../@Types/User";
import {
  getUsers,
  createUser,
  updateUser,
  removeUser,
} from "../services/UserService";

import { useNavigate } from "react-router-dom";

interface UserContextData {
  users?: User[] | Error;
  user?: User;
  userSelected?: string | null;
  getAllUsers: () => Promise<User[] | Error>;
  createNewUser: (user: User) => Promise<User | Error>;
  editUser: (user: User) => Promise<User | Error>;
  deleteUser: (id: string) => Promise<Error>;
  selectCurrentUser: (user: User) => User;
  resetUser: () => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([] as User[] | Error);
  const [user, setUser] = useState({} as User);

  const getAllUsers = async () => {
    const users = await getUsers();

    setUsers(users);

    return users;
  };

  const createNewUser = async (user: User) => {
    const newUser = await createUser(user);

    if (newUser) {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    }

    if (!newUser) {
      alert("Não foi possível cadastrar o usuário!");
    }

    return newUser;
  };

  const editUser = async (user: User) => {
    const userEdited = await updateUser(user);

    if (userEdited) {
      alert("Usuário editado com sucesso!");
      navigate("/");
    }

    if (!userEdited) {
      alert("Não foi possível editar o usuário!");
    }

    return userEdited;
  };

  const deleteUser = async (id: string) => {
    const resp = await removeUser(id);

    await getAllUsers();
    return resp;
  };

  const selectCurrentUser = (user: User) => {
    setUser(user);

    return user;
  };

  const resetUser = () => {
    setUser({} as User);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        getAllUsers,
        createNewUser,
        editUser,
        deleteUser,
        selectCurrentUser,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
