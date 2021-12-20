import { createContext, useEffect, useState, useCallback } from "react";
import { User } from "../@Types/User";
import { getUsers, createUser, updateUser } from "../services/UserService";

interface UserContextData {
  users?: User[] | [];
  user?: User;
  userSelected?: string | null;
  getAllUsers: () => Promise<User[] | Error>;
  createNewUser: (user: User) => Promise<User | Error>;
  //   getUser?: () => Promise<User | Error>;
  editUser: (user: User) => Promise<User | Error>;
  //   deleteUser?: () => Promise<Error>;
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
    console.log("CTX", user);
    const userEdited = await updateUser(user);

    return userEdited;
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
        getAllUsers,
        createNewUser,
        editUser,
        selectCurrentUser,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
