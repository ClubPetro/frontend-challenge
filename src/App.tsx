import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';

import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
