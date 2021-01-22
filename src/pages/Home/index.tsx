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
import api from '../../services/api';
import Lugares from '../../assets/img/header/Lugares.png';

const Home: React.FC = () => {
  const [apiData, setApiData] = useState<any[]>([]);

  useEffect(() => {
    async function getCountries() {
      const response = await api.get('/all');
      setApiData(response.data);
    }
    getCountries();
  }, []);

  const handleAddMeta = () => {
    console.log('aaaa');
  };

  // const handleChange = (e: any) => {
  //   const { name, value } = e.currentTarget;
  //   setCountries({
  //       ...countries,
  //       [name]: value,
  //     });
  //   };

  return (
    <Container>
      <Header>
        <img src={Lugares} alt="" />
      </Header>
      <SearchArea>
        <form>
          <Select>
            <option>Selecione...</option>
            {apiData.map((item: any, index: any) => (
              <option value={item.translations.br}>
                {item.translations.br}
              </option>
            ))}
          </Select>
          <InputPlace placeholder="Digite o local que deseja conhecer" />
          <InputDate mask="99/9999" maskPlaceholder="mês/ano" />
          <AddButton>Adicionar</AddButton>
        </form>
      </SearchArea>
    </Container>
  );
};

export default Home;
