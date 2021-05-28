import React, {useState} from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import Selector from '../Selector/Selector';


function App() {
  
  const initialListValue: any[] = [{
    id: 1,
    country:'Brazil',
    city: 'Fortaleza'
  }];
  const [flightList, setFlightList] = React.useState(initialListValue);
  const [serialValue, setSerialValue] = React.useState(1);
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


  return (
    <div>
      <Header></Header>
      <Selector onSentFlightData={addFlightOnList}></Selector>
      <CardContainer listOfCards={flightList} removeFlightEvent={removeFlightOnList}/>
    </div>
  );
}

export default App;
