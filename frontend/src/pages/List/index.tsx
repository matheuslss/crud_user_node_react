import { useEffect, useState, useCallback } from "react";
import { ListContainer } from "./styles";
import Card from "../../components/Card";
import Dialog from "../../components/Dialog";

import { User } from "../../@Types/User";
import useUser from "../../hooks/useUser";

export default function UserList() {
  const { getAllUsers } = useUser();
  const [users, setUsers] = useState<User[] | [] | Error>([]);

  const handleGetUsers = useCallback(async () => {
    const data = await getAllUsers();
    setUsers(data);
  }, []);

  useEffect(() => {
    handleGetUsers();
  }, [setUsers]);

  return (
    <ListContainer>
      {users &&
        Object.values(users).map((user: User) => (
          <Card key={user.id} {...user} />
        ))}
      <Dialog open={false}>
        <h2>Excluír Usuário</h2>
        <p>Essa ação não poderá ser revertida!</p>
        <p>Deseja continuar?</p>
        <div>
          <button>Sim</button>
          <button>Não</button>
        </div>
      </Dialog>
    </ListContainer>
  );
}
