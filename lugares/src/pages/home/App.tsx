import React, { useState } from "react";
import { Container, Header, FormGroup, CardContainer } from "./style";
import Logo from "../../assets/Lugares 1.png";
import Select from "../../components/Select";
import Button from "../../components/Button/index";
import Input from "../../components/InputText/index";
import Modal from "../../components/Modal/index";
import Message from "../../components/Message/index";
import Card from "../../components/Card/index";
import { useCardContext } from "../../Context/CardContext";

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

const App: React.FC = () => {
  const [country, SetCountrie] = useState<countriesProps>({} as countriesProps);
  const [location, setLocation] = useState("");
  const [goal, setGoal] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState({ type: "hide", text: "" });

  const { countries, handleAddCountry } = useCardContext();

  const [countryCardEdit, setcountryCardEdit] = useState<CountryProps>(
    {} as CountryProps
  );

  return (
    <Container>
      <Modal
        countryInfos={countryCardEdit}
        isVisible={isModalVisible}
        handleModalVisibility={setIsModalVisible}
      />
      <Header id="header">
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

        <Button
          text="Adicionar"
          onClick={() => handleAddCountry(country, location, goal, setMessage)}
        />
      </FormGroup>
      <CardContainer>
        {countries.length > 0 &&
          countries.map((country) => {
            return (
              <Card
                key={country.id}
                countryInfos={country}
                handleModalVisibility={setIsModalVisible}
                hadnleEditCard={setcountryCardEdit}
              />
            );
          })}
      </CardContainer>
    </Container>
  );
};

export default App;
