import { useState, useEffect, useCallback } from "react";
import {
  CardContainer,
  CardLayer,
  CardContent,
  CardAvatar,
  CardIcons,
} from "./styles";
import AlertDialog from "../Dialog";
import { User } from "../../@Types/User";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import useUser from "../../hooks/useUser";

export default function Card(user: User) {
  const { selectCurrentUser, deleteUser } = useUser();

  const [img, setImage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleDeleteUser = useCallback(async () => {
    await deleteUser(user.id);
  }, []);

  const handleSelectUser = (user) => {
    console.log("user", user);
    selectCurrentUser({ ...user, url_img: img });

    return user;
  };

  const handleDialog = () => {
    setShowDialog((oldValue) => !oldValue);
    handleSelectUser(user);
  };

  useEffect(() => {
    if (user.url_img) {
      const fileName = user.url_img.split("images/")[1].split(".")[0];
      const extension = user.url_img.split("images/")[1].split(".")[1];

      import(`../../assets/images/${fileName}.${extension}`).then((img) =>
        setImage(img.default)
      );
    } else {
      import("../../assets/images/avatar.png").then((img) =>
        setImage(img.default)
      );
    }
  }, []);

  return (
    <CardContainer>
      <CardLayer />
      <CardContent>
        <CardAvatar>
          <img src={img} width={100} height={100} alt="avatar_image" />
        </CardAvatar>
        <h2>{user.name}</h2>
        <p>{user.birth_date_string}</p>
        <p>Código: {user.code}</p>
        <CardIcons>
          <Link to="/signup" onClick={() => handleSelectUser(user)}>
            <FaEdit />
          </Link>

          <AlertDialog
            show={showDialog}
            title="Excluir Usuário"
            text1="Essa ação não poderá ser desfeita!"
            deleleUser={handleDeleteUser}
          >
            <FaTrashAlt onClick={() => handleDialog()} />
          </AlertDialog>
        </CardIcons>
      </CardContent>
    </CardContainer>
  );
}
