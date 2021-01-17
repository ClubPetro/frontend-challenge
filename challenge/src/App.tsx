import React from 'react';
import './App.css';
import Header from './components/Header'
import AddLocation from './components/AddLocation'
import Locations from './components/Locations'

const App = () => (
  <div>
    <Header />
    <AddLocation />
    <Locations />
  </div>
)

export default App;
