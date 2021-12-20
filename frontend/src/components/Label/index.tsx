import { LabelHTMLAttributes } from "react";
import { LabelContainer } from "./styles";

export default function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <LabelContainer>
      <label {...props} />
    </LabelContainer>
  );
}
