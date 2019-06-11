import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductListClass from './components/ProductListClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProductListClass></ProductListClass>
      </header>
    </div>
  );
}

export default App;
