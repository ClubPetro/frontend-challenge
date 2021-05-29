import React, {useState, useEffect} from 'react';
import Country from '../../_models/Country';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import Selector from '../Selector/Selector';


function App() {
  
  const initialListValue: any[] = [{
    id: 1,
    country: {name: 'Brasil'} as Country,
    city: 'Fortaleza'
  }];
  const [flightList, setFlightList] = React.useState(initialListValue);
  const [serialValue, setSerialValue] = React.useState(1);
  const initialValue: Country[] = [];

  const [listOfCountries, setListOfCountries] = useState(initialValue)


  useEffect(()=>{
        if(listOfCountries.length < 1){
            fetchCountries();
        }
    }, [listOfCountries])

  const fetchCountries = async ()=>{
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json();
    setListOfCountries(data as Country[]);
  }

  const addFlightOnList = (value: any)=>{
    value.id = serialValue + 1;
    setSerialValue(serialValue+1);
    setFlightList([...flightList, value]);
  }

  const removeFlightOnList = (value: any)=>{
    setFlightList(flightList.filter((flight)=>{
      return flight.id !== value;
    }));

  }


  const editFlightOnList  = (id: number, city: string, date: any)=>{
    const copyArray = [...flightList];
    let f = copyArray.find(flight=>{
      return flight.id === id; 
    })

    if(f){
      f.city = city;
      f.date = date;
      setFlightList(copyArray);
    }
    
  }


  return (
    <div>
      <Header></Header>
      <Selector onSentFlightData={addFlightOnList} listOfCountries={listOfCountries}></Selector>
      <CardContainer listOfCards={flightList} removeFlightEvent={removeFlightOnList} editFlightEvent={editFlightOnList}/>
    </div>
  );
}

export default App;
