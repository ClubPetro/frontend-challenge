import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentArea,
  Header,
  SearchArea,
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
  const [country, setCountry] = useState<IGoal>({
    country: {
      translations: {
        br: '',
      },
      flag: '',
    },
    spot: '',
    date: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setApiData(await getCountries());
      setGoals(await dbApi.getGoals());
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(country);
  }, [country]);

  const handleAddGoal = async () => {
    await dbApi.createGoal(country);
    window.location.reload();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;
    setCountry({
      ...country,
      country: {
        ...country.country,
        translations: {
          br:
            name === 'countryInfo'
              ? value.split(',')[0]
              : country.country.translations.br,
        },
        flag:
          name === 'countryInfo' ? value.split(',')[1] : country.country.flag,
      },
      [name]: value,
    });
  };

  return (
    <Container>
      <Header>
        <img src={Logo} alt="" />
      </Header>
      <SearchArea>
        <form>
          <div>
            <h1>País</h1>
            <Select
              name="countryInfo"
              value={country?.country.translations.br}
              onChange={handleChange}
            >
              <option>Selecione...</option>
              {apiData.map(item => (
                <option value={[item.translations.br, item.flag]}>
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
              value={country?.spot}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>Meta</h1>
            <InputDate
              name="date"
              mask="99/9999"
              maskPlaceholder="mês/ano"
              value={country?.date}
              onChange={handleChange}
            />
          </div>
          <AddButton type="button" onClick={handleAddGoal}>
            Adicionar
          </AddButton>
        </form>
      </SearchArea>
      <div className="content-area">
        {goals.map(item => (
          <Card
            id={item.id}
            country={item.country}
            spot={item.spot}
            date={item.date}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
