import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}
