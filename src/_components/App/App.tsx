import React, {useState} from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import Selector from '../Selector/Selector';


function App() {
  
  const initialListValue: any[] = [{
    country:'Brazil',
    city: 'Fortaleza'
  }];
  const [initialList, setInitialList] = React.useState(initialListValue);
  const addFlightOnList = (value: any)=>{
    console.log(value);
    let actualListValue = initialList;
    actualListValue.push(value);
    console.log(initialList);
    setInitialList(actualListValue);
  }


  return (
    <div>
      <Header></Header>
      <Selector onSentFlightData={addFlightOnList}></Selector>
      <CardContainer listOfCards={initialList}/>
    </div>
  );
}

export default App;
