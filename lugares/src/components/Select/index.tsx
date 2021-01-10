import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, SelectInput } from "./style";

interface CountrieProps {
  name: string;
  flag: string;
}

interface SelectProps {
  handleChange: Function;
}

const Select: React.FC<SelectProps> = ({ handleChange }) => {
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((countries) => countries.json())
      .then((countries) => {
        const countriesInfos = countries.map((countrie: CountrieProps) => {
          return { name: countrie.name, flag: countrie.flag };
        });

        SetCountries(countriesInfos);
      });
  }, []);

  const [countries, SetCountries] = useState([{}] as CountrieProps[]);

  function handleChangeSelect(event: ChangeEvent<HTMLSelectElement>): void {
    handleChange({
      name: event.target.value.split(",")[0],
      flag: event.target.value.split(",")[1],
    });
  }

  return (
    <Container>
      <label>País</label>
      <SelectInput
        onChange={(event) => handleChangeSelect(event)}
        id="pais"
        defaultValue="Selecione ..."
      >
        <option disabled defaultValue="Selecione ...">
          Selecione ...
        </option>
        {countries.map((countrie) => {
          return (
            <option
              key={`@${countrie.name}`}
              value={[countrie.name, countrie.flag]}
            >
              {countrie.name}
            </option>
          );
        })}
      </SelectInput>
    </Container>
  );
};

export default Select;
