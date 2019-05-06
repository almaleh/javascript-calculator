import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux';
import logo from './logo.svg';
import './App.css';
import Container from './Calculator.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Container />
        </Provider>
      </header>
    </div>
  );
}

export default App;
