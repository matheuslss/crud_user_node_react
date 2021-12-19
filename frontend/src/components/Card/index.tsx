import { CardContainer, CardLayer, CardContent, CardAvatar } from "./styles";

export default function Card() {
  return (
    <CardContainer>
      <CardLayer></CardLayer>
      <CardContent>
        <CardAvatar>
          <img
            src="https://avatars.githubusercontent.com/u/47352591?v=4"
            width={60}
            height={60}
            alt="avatar_image"
          />
        </CardAvatar>
        <h2>Nome</h2>
        <p>Data de nascimento: 13/08/1994</p>
        <p>Código: 1</p>
      </CardContent>
    </CardContainer>
  );
}
