import { useState, useEffect } from "react";
import {
  CardContainer,
  CardLayer,
  CardContent,
  CardAvatar,
  CardIcons,
} from "./styles";
import { User } from "../../@Types/User";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import useUser from "../../hooks/useUser";

export default function Card(user: User) {
  const { selectCurrentUser } = useUser();

  const [img, setImage] = useState("");

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

  const handleSelectUser = (user) => {
    selectCurrentUser({ ...user, url_img: img });

    return user;
  };

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
          <FaTrashAlt />
        </CardIcons>
      </CardContent>
    </CardContainer>
  );
}
