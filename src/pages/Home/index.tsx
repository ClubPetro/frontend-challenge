import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentArea,
  Header,
  RegisterArea,
  Select,
  InputPlace,
  InputDate,
  AddButton,
} from './styles';
import getCountries from '../../services/restCountriesApi';
import dbApi from '../../services/dbApi';
import Logo from '../../assets/img/header/Logo.png';
import { ICountry, IGoal } from '../../Interfaces/index';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const [apiData, setApiData] = useState<ICountry[]>([]);
  const [goals, setGoals] = useState<IGoal[]>([]);
  const [goal, setGoal] = useState<IGoal>({
    country: {
      translations: {
        br: '',
      },
      flag: '',
    },
    spot: '',
    date: '',
    id: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setApiData(await getCountries());
      setGoals(await dbApi.getGoals());
    };
    fetchData();
  }, []);

  const handleAddGoal = async () => {
    await dbApi.createGoal(goal);
    window.location.reload();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;
    setGoal({
      ...goal,
      country: {
        ...goal.country,
        translations: {
          br: name === 'countryInfo' ? value : goal.country.translations.br,
        },
        flag:
          name === 'countryInfo'
            ? apiData.find(x => x.translations.br === value)?.flag || ''
            : goal.country.flag,
      },
      [name]: value,
    });
  };

  return (
    <Container>
      <Header>
        <img src={Logo} alt="" />
      </Header>
      <RegisterArea>
        <form>
          <div>
            <h1>País</h1>
            <Select
              name="countryInfo"
              value={goal?.country.translations.br}
              onChange={handleChange}
            >
              <option>Selecione...</option>
              {apiData.map(item => (
                <option value={item.translations.br}>
                  {item.translations.br}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <h1>Local</h1>
            <InputPlace
              name="spot"
              placeholder="Digite o local que deseja conhecer"
              value={goal?.spot}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>Meta</h1>
            <InputDate
              name="date"
              mask="99/9999"
              placeholder="mês/ano"
              value={goal?.date}
              onChange={handleChange}
            />
          </div>
          <AddButton type="button" onClick={handleAddGoal}>
            Adicionar
          </AddButton>
        </form>
      </RegisterArea>
      <ContentArea>
        {goals !== null ? (
          goals.map(item => (
            <Card
              id={item.id}
              country={item.country}
              spot={item.spot}
              date={item.date}
            />
          ))
        ) : (
          <h1>{null}</h1>
        )}
      </ContentArea>
    </Container>
  );
};

export default Home;
