import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputContainer>
      <input {...props} />
    </InputContainer>
  );
}
