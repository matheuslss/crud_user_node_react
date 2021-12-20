import { useState, useEffect } from "react";
import { Container, Card } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { User } from "../../@Types/User";

import useUser from "../../hooks/useUser";
import Upload from "../../components/Upload";

export default function Signup() {
  const { createNewUser } = useUser();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [image, setImage] = useState({} as File);
  const [imageInfo, setImageInfo] = useState("Teste");

  const handleSignUp = async () => {
    const user: User = {
      name: name,
      birth_date: new Date(birthDate),
      birth_date_string: birthDate,
      image: image,
    };

    await createNewUser(user);
  };

  const handleUpload = (file) => {
    setImage(file[0]);
  };

  useEffect(() => {
    setImageInfo(image.name);
  }, [image.name]);

  return (
    <Container>
      <Card>
        <h1>Cadastro de Usuário</h1>
        <h2>Nome</h2>
        <Input
          placeholder="NOME"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <h2>DATA DE NASCIMENTO</h2>
        <Input
          placeholder="DATA DE NASCIMENTO"
          type="date"
          value={birthDate}
          onChange={(event) => {
            console.log(event.target.value);
            setBirthDate(event.target.value);
          }}
        />
        <h2>AVATAR</h2>

        <Upload onUpload={handleUpload} />

        <div>
          {imageInfo ? "Imagem selecionada:" : "Nenhuma imagem selecionada!"}{" "}
          {imageInfo}
        </div>

        <Button onClick={handleSignUp}>Salvar</Button>
      </Card>
    </Container>
  );
}

type ImageInfoProps = {
  fileName: string;
  onChangeImage?: (file: any) => void;
};
