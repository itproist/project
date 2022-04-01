import React from 'react';
import './App.css';
import Cards from './Cards';

const App = () => {
  return (
    <div className="app">
      <Cards title="Маленькое черное платье" price="₽ 1999" />
      <Cards title="Маленькое черное платье" price="₽ 2999" />
      <Cards title="Маленькое черное платье" price="₽ 3999" />
    </div>
  );
};

export default App;
