import React from 'react';
import './App.css';
import NameComponent from './NameComponent';

const App = () => {
  return (
    <div>
      <h1>React APP</h1>
      <NameComponent firstName="Misha" lastName="Sklyanin" />
      <NameComponent firstName="Misha" lastName="Sklyanin" />
      <NameComponent firstName="Misha" lastName="Sklyanin" />
      <NameComponent firstName="Misha" lastName="Sklyanin" />
      <NameComponent firstName="Misha" lastName="Sklyanin" />
    </div>
  );
};

export default App;
