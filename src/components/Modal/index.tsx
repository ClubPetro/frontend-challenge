import { ReactElement } from "react";
import { ModalStyles } from "./styles";

interface Props {
  handleClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  open: boolean;
  children: ReactElement;
}

export function Modal({ handleClose, open, children }: Props) {
  return (
    <ModalStyles
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </ModalStyles>
  );
}
