import { createContext, useEffect, useState, useCallback } from "react";
import { User } from "../@Types/User";
import { getUsers, createUser } from "../services/UserService";

interface UserContextData {
  users?: User[] | [];
  user?: User | null;
  userSelected?: string | null;
  getAllUsers: () => Promise<User[] | Error>;
  createNewUser: (user: User) => Promise<User | Error>;
  //   getUser?: () => Promise<User | Error>;
  //   editUser?: () => Promise<User | Error>;
  //   deleteUser?: () => Promise<Error>;
  // getImageByUserId: (id: string) => string;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState([] as User[] | Error);
  const getAllUsers = async () => {
    const users = await getUsers();

    setUsers(users);

    return users;
  };

  const createNewUser = async (user: User) => {
    const newUser = await createUser(user);

    return newUser;
  };

  return (
    <UserContext.Provider value={{ getAllUsers, createNewUser }}>
      {children}
    </UserContext.Provider>
  );
};
