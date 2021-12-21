import { useState, useEffect } from "react";
import { Container, Card } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Link } from "react-router-dom";

import { User } from "../../@Types/User";

import useUser from "../../hooks/useUser";
import Upload from "../../components/Upload";

import { toDate } from "../../utils/date";

export default function Signup() {
  const { createNewUser, editUser, user } = useUser();

  const [name, setName] = useState(user ? user.name : "");
  const [birthDate, setBirthDate] = useState(
    user.birth_date ? toDate(user.birth_date) : ""
  );
  const [image, setImage] = useState({} as File);
  const [imageInfo, setImageInfo] = useState(user ? user.url_img : "");

  const handleSignUp = async () => {
    const user: User = {
      name: name,
      birth_date: new Date(birthDate),
      birth_date_string: birthDate,
      image: image,
    };

    await createNewUser(user);
  };

  const handleUpdate = async () => {
    const data: User = {
      id: user.id,
      name: name,
      birth_date: new Date(birthDate),
      birth_date_string: birthDate,
      image: image,
    };

    await editUser(data);
  };

  const handleUpload = (file) => {
    setImage(file[0]);
  };

  useEffect(() => {
    setImageInfo(user.id ? user.url_img : image.name);
  }, [image.name]);

  return (
    <Container>
      <Card>
        <h1>Cadastro de Usuário</h1>
        <h2>Nome</h2>
        <Input
          required
          placeholder="NOME"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <h2>DATA DE NASCIMENTO</h2>
        <Input
          required
          placeholder="DATA DE NASCIMENTO"
          type="date"
          value={birthDate}
          onChange={(event) => {
            console.log(event.target.value);
            setBirthDate(event.target.value);
          }}
        />
        <h2>AVATAR</h2>
        {!user.id && (
          <>
            <Upload onUpload={handleUpload} />

            <div>
              {imageInfo
                ? "Imagem selecionada:"
                : "Nenhuma imagem selecionada!"}{" "}
              {imageInfo}
            </div>
          </>
        )}
        {user.id && (
          <div>
            Não é possível alterar o avatar no momento. Tente novamente mais
            tarde!
          </div>
        )}
        {/* <Link to="/"> */}
        <Button onClick={user.id ? handleUpdate : handleSignUp}>Salvar</Button>
        {/* </Link> */}
      </Card>
    </Container>
  );
}
