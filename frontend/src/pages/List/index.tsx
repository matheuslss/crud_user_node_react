import { useEffect, useState, useCallback } from "react";
import { ListContainer } from "./styles";
import Card from "../../components/Card";
import Dialog from "../../components/Dialog";

import { User } from "../../@Types/User";
import useUser from "../../hooks/useUser";

export default function UserList() {
  const { getAllUsers, resetUser, deleteUser, user, users } = useUser();
  const [usersList, setUsersList] = useState<User[] | [] | Error>([]);

  const handleGetUsers = useCallback(async () => {
    const data = await getAllUsers();
    setUsersList(data);
  }, []);

  useEffect(() => {
    handleGetUsers();
    resetUser();
  }, [users]);

  return (
    <ListContainer>
      {usersList &&
        Object.values(usersList).map((user: User) => (
          <Card key={user.id} {...user} />
        ))}
    </ListContainer>
  );
}
