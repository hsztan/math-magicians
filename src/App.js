import React from 'react';
import './App.css';
import Calculator from './components/calculator/Calculator';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
