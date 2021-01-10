import React, { useState } from "react";
import { Container } from "./styles";
import Button from "../../components/Button/index";
import Input from "../../components/InputText/index";
import closed from "../../assets/mdi_close.png";
import crudController from "../../Controllers/CrudController";

interface ModalProps {
  isVisible: boolean;
  handleModalVisibility: Function;
  handleRefreshCardList: Function;
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
  handleRefreshCardList,
  countryInfos,
}) => {
  const [location, setLocation] = useState<string>("");
  const [goal, setGoal] = useState("");
  const [info, setInfo] = useState("");

  const handleUpdateCard = async () => {
    if (goal === "" && location === "") {
      setInfo("os campos não podem ficar em branco");
      setTimeout(() => {
        setInfo("");
      }, 2000);

      return;
    }

    await crudController.update(countryInfos.id, {
      goal: goal !== "" ? goal : countryInfos.goal,
      location: location !== "" ? location : countryInfos.location,
    });

    setLocation("");
    setGoal("");

    handleRefreshCardList({
      country: {
        name: countryInfos.country.name,
        flag: countryInfos.country.flag,
      },
      goal: countryInfos.goal,
      location: countryInfos.location,
    });

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

      <Button text="Editar" handleClick={handleUpdateCard} />
    </Container>
  );
};

export default Modal;
