import React from "react";
import { Container } from "./styles";
import Button from "../../components/Button/index";
import Input from "../../components/InputText/index";
import closed from "../../assets/mdi_close.png";

interface ModalProps {
  isVisible: boolean;
  handleModalVisibility: Function;
  countryInfos: {
    id: string;
    country: {
      name: string;
      flag: string;
    };
    goal: string;
    location: string;
  };
}

const Modal: React.FC<ModalProps> = ({ isVisible, handleModalVisibility,countryInfos }) => {
  return (
    <Container isVisible={isVisible}>
      <header>
        <h2> Editar : Local e Meta</h2>
        <button onClick={() => handleModalVisibility((old:boolean) => !old)}>
          <img src={closed} alt="Edit" />
        </button>
      </header>

      <Input
        handleChange={() => {}}
        label="Local"
        placeholder="Digite o local que deseja conhecer"
        value={countryInfos.location}
      />
      <Input
        handleChange={() => {}}
        label="Meta"
        placeholder="mês/ano"
        InputSize="small"
        mask={true}
        value={countryInfos.goal}
      />

      <Button text="Editar" handleClick={() => {}} />
    </Container>
  );
};

export default Modal;
