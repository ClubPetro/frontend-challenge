import React, { createContext, useState, useContext, useEffect } from "react";
import crudController from "../Controllers/CrudController";

interface CountryCardProps {
  id: string;
  country: {
    name: string;
    flag: string;
  };
  goal: string;
  location: string;
}

interface ContextProps {
  countries: CountryCardProps[];
  handleAddCountry: Function;
  handleDelete: Function;
  handleUpdateCard: Function;
}

interface countriesProps {
  name: string;
  flag: string;
}

const CardContext = createContext<ContextProps>({
  countries: [] as CountryCardProps[],
  handleAddCountry: () => {},
  handleDelete: () => {},
  handleUpdateCard: () => {},
});

export const CardProvider: React.FC = ({ children }) => {

 async function handleAddCountry(
    country: countriesProps,
    location: string,
    goal: string,
    setMessage: Function
  ) {
    if (!country.name || location === "" || goal === "") {
      setMessage({
        type: "error",
        text: "Todos os campos devem ser preenchidos",
      });
      return;
    }

    const countryValues = await crudController.create({
      country,
      location,
      goal,
    });

    setCountryCard((old) =>  [...old, countryValues]);

    setMessage({ type: "info", text: "Cadastro feito com Sucesso!" });
    setTimeout(() => {
      setMessage({ type: "hide", text: "" });
    }, 3000);
  }

  async function handleDelete(id: string) {
    window.confirm("Você tem certeza que quer excluir?") &&
      (await crudController.delete(id));

      const newValues = countryCard.filter(values => values.id !== id);

      setCountryCard(newValues);

      
  }

  async function handleUpdateCard(
    countryInfos: CountryCardProps,
    goal: string,
    location: string,
    setInfo: Function,
    callback?: Function
  ) {
    if (goal === "" && location === "") {
      setInfo("os campos não podem ficar em branco");
      setTimeout(() => {
        setInfo("");
      }, 2000);

      return;
    }

   const countryUpdatedInfos = await crudController.update(countryInfos.id, {
      goal: goal !== "" ? goal : countryInfos.goal,
      location: location !== "" ? location : countryInfos.location,
    });

   const newValue = countryCard.map(country => {
    return country.id !== countryInfos.id 
    ? country
    : countryUpdatedInfos
   });

   setCountryCard(newValue);


    callback && callback();
  }

  const [countryCard, setCountryCard] = useState<CountryCardProps[]>(
    [] as CountryCardProps[]
  );


  useEffect(() => {

    async function GetValues() {
      const response = await crudController.index();
      setCountryCard(response);
    }

    GetValues();
  }, []);

  return (
    <CardContext.Provider
      value={{
        countries: countryCard,
        handleAddCountry: handleAddCountry,
        handleDelete: handleDelete,
        handleUpdateCard: handleUpdateCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export function useCardContext() {
  const cardConext = useContext(CardContext);

  if (!cardConext) {
    throw new Error("Context must be used within an Provider");
  }

  return cardConext;
}
