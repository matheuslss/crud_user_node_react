import { createContext, useEffect, useState, useCallback } from "react";
import { User } from "../@Types/User";
import {
  getUsers,
  createUser,
  updateUser,
  removeUser,
} from "../services/UserService";

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
  const [users, setUsers] = useState([] as User[] | Error);
  const [user, setUser] = useState({} as User);

  const getAllUsers = async () => {
    const users = await getUsers();

    setUsers(users);

    return users;
  };

  const createNewUser = async (user: User) => {
    const newUser = await createUser(user);

    return newUser;
  };

  const editUser = async (user: User) => {
    const userEdited = await updateUser(user);

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
