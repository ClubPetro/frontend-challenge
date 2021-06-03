import Modal from "react-modal";
import * as S from "./styles";
import CloseButtonImg from "assets/close/close.svg";
import { FormEvent, useEffect, useState } from "react";
// import { useTransaction } from "hooks/useDestination";
import InputMask from "react-input-mask";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Input = (props: any) => (
  <InputMask
    mask="99/9999"
    maskPlaceholder={null}
    value={props.value}
    onChange={props.onChange}
  >
    {(inputProps: any) => <input {...inputProps} placeholder="mês/ano" />}
  </InputMask>
);

export function EditDestinationModal({ isOpen, onRequestClose }: ModalProps) {
  const [place, setPlace] = useState<string>("");

  const [goal, setGoal] = useState<string>("");

  // const { CreateTransaction } = useTransaction();
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setGoal(event.target.value);
  };
  const handleEditDestination = async (event: FormEvent) => {
    event.preventDefault();

    // await CreateTransaction({ place, type, goal, value });

    // setGoal("");
    // setPlace("");

    onRequestClose();
  };

  useEffect(() => {
    console.log("Goal: ", goal);
  }, [goal]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button>
        <img
          src={CloseButtonImg}
          alt="CloseButton"
          className="close-button-modal"
          onClick={onRequestClose}
        />
      </button>

      <S.Container onSubmit={handleEditDestination}>
        <h2>Editar destino</h2>
        <input
          type="text"
          placeholder="Local"
          value={place}
          onChange={(event) => setPlace(event.target.value)}
        />

        {/* <input
          type="text"
          placeholder="Meta"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
        /> */}

        <Input value={goal} onChange={handleChange} />

        <button type="submit">Editar</button>
      </S.Container>
    </Modal>
  );
}
