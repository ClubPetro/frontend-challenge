import React, { useState } from "react";
import { Container } from "./styles";
import Button from "../../components/Button/index";
import Input from "../../components/InputText/index";
import closed from "../../assets/mdi_close.png";
import { useCardContext } from "../../Context/CardContext";

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

const Modal: React.FC<ModalProps> = ({
  isVisible,
  handleModalVisibility,
  countryInfos,
}) => {
  const [location, setLocation] = useState<string>("");
  const [goal, setGoal] = useState("");
  const [info, setInfo] = useState("");

  const { handleUpdateCountry } = useCardContext();

  const ClearForm = () => {
    setLocation("");
    setGoal("");
    handleModalVisibility((old: boolean) => !old);
  };

  return (
    <Container isVisible={isVisible}>
      <header>
        <h2> Editar : Local e Meta</h2>
        <button onClick={() => handleModalVisibility((old: boolean) => !old)}>
          <img src={closed} alt="Edit" />
        </button>
      </header>

      <div className="oldValues">
        <p>
          <b>Local:</b>
          {countryInfos.location}
        </p>
        <p>
          <b>Meta:</b>
          {countryInfos.goal}
        </p>
      </div>
      <p className="info">{info}</p>
      <Input
        onChange={(e) => setLocation(e.target.value)}
        handleChange={() => {}}
        label="Novo Local"
        placeholder="Digite o local que deseja conhecer"
        value={location}
      />
      <Input
        onChange={(e) => setGoal(e.target.value)}
        handleChange={() => {}}
        label="Nova Meta"
        placeholder="mês/ano"
        InputSize="small"
        mask={true}
        value={goal}
      />

      <Button
        text="Editar"
        onClick={() =>
          handleUpdateCountry(countryInfos, goal, location, setInfo, ClearForm)
        }
      />
    </Container>
  );
};

export default Modal;
