import React, { useEffect, useState } from "react";
import { Container, Header, FormGroup, CardContainer } from "./style";
import Logo from "../../assets/Lugares 1.png";
import Select from "../../components/Select";
import Button from "../../components/Button/index";
import Input from "../../components/InputText/index";
import crudController from "../../Controllers/CrudController";
import Message from "../../components/Message/index";
import Card from "../../components/Card/index";

interface countriesProps {
  name: string;
  flag: string;
}

interface CountryProps {
  id: string;
  country: {
    name: string;
    flag: string;
  };
  goal: string;
  location: string;
}

type CurrentCard = Omit<CountryProps, "id">;

const App: React.FC = () => {
  const [country, SetCountrie] = useState<countriesProps>({} as countriesProps);
  const [location, setLocation] = useState("");
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState({ type: "hide", text: "" });
  const [countryCard, setCountryCard] = useState<CountryProps[]>(
    [] as CountryProps[]
  );
  const [currentCard, setCurrentCard] = useState<CurrentCard>(
    {} as CurrentCard
  );

  useEffect(() => {
    async function GetValues() {
      const response = await crudController.index();
      setCountryCard(response);
    }

    GetValues();
  }, [currentCard]);

  function handleAddAPlace() {
    if (!country.name || location === "" || goal === "") {
      setMessage({
        type: "error",
        text: "Todos os campos devem ser preenchidos",
      });
      return;
    }

    setCurrentCard({
      country,
      location,
      goal,
    });

    crudController.create({
      country,
      location,
      goal,
    });

    setMessage({ type: "info", text: "Cadastro feito com Sucesso!" });
    setTimeout(() => {
      setMessage({ type: "hide", text: "" });
    }, 3000);
  }

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Lugares Logo" />
      </Header>
      <FormGroup>
        <Message type={message.type}>{message.text}</Message>

        <Select handleChange={SetCountrie} />
        <Input
          handleChange={setLocation}
          label="Local"
          placeholder="Digite o local que deseja conhecer"
        />
        <Input
          handleChange={setGoal}
          label="Meta"
          placeholder="mês/ano"
          InputSize="small"
          mask={true}
        />

        <Button text="Adicionar" handleClick={handleAddAPlace} />
      </FormGroup>
      <CardContainer>
        {countryCard.length > 0 &&
          countryCard.map((country) => {
            return <Card key={country.id} countryInfos={country} />;
          })}
      </CardContainer>
    </Container>
  );
};

export default App;
