import { DialogHTMLAttributes } from "react";
import { DialogContainer } from "./styles";

export default function Dialog(props: DialogHTMLAttributes<HTMLDialogElement>) {
  return (
    <DialogContainer>
      <dialog {...props} />
    </DialogContainer>
  );
}
