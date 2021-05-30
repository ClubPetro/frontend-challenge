import React, {useState, useEffect} from 'react';
import Country from '../../_models/Country';
import Flight from '../../_models/Flight';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import Selector from '../Selector/Selector';
import { MainContainer } from './App.style';


function App() {
  
  const initialListValue: any[] = [];
  const [flightList, setFlightList] = React.useState(initialListValue);
  const [serialValue, setSerialValue] = React.useState(0);
  const initialValue: Country[] = [];

  const [listOfCountries, setListOfCountries] = useState(initialValue)


  useEffect(()=>{
        if(listOfCountries.length < 1){
            fetchCountries();
        }
    }, [listOfCountries])


  /**
   * Função que obtém a lista de países na API RestCountries.
   */
  const fetchCountries = async ()=>{
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json();
    setListOfCountries(data as Country[]);
  }

  /**
   * Função que adiciona uma meta de viagem, no array de viagens.
   * @param value - Viagem a ser adicionada.
   */
  const addFlightOnList = (value: Flight)=>{
    value.id = serialValue + 1;
    setSerialValue(serialValue+1);
    setFlightList([...flightList, value]);
  }

  /**
   * Função que remove uma viagem na lista.
   * @param value - Id da viagem a ser removida.
   */
  const removeFlightOnList = (value: any)=>{
    setFlightList(flightList.filter((flight: Flight)=>{
      return flight.id !== value;
    }));

  }

  /**
   * Função de edição de um card de viagem.
   * @param id  - Id da viagem a ser editado
   * @param city - Novo valor de cidade.
   * @param date  - Novo valor de data.
   */

  const editFlightOnList  = (id: number, city: string, date: any)=>{
    const copyArray = [...flightList];
    let f = copyArray.find((flight: Flight)=>{
      return flight.id === id; 
    })

    if(f){
      f.city = city;
      f.date = date;
      setFlightList(copyArray);
    }
    
  }


  return (
    <MainContainer>
      <Header></Header>
      <Selector onSentFlightData={addFlightOnList} listOfCountries={listOfCountries}></Selector>
      <CardContainer listOfCards={flightList} removeFlightEvent={removeFlightOnList} editFlightEvent={editFlightOnList}/>
    </MainContainer>
  );
}

export default App;
