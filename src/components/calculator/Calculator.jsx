import { useState } from 'react';
import Buttons from '../buttons/buttons';
import calculate from './logic/calculate';
import './calculator.scss';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [display, setDisplay] = useState(null);

  const buttons = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const handleDisplayState = (beforeCalcObj, afterCalcObj) => {
    // Handle display UI state
    if (!afterCalcObj.operation && !afterCalcObj.next && afterCalcObj.total) {
      setDisplay(afterCalcObj.total);
    } else if (beforeCalcObj.operation && afterCalcObj.next) {
      setDisplay(afterCalcObj.next);
    } else if (afterCalcObj.total && afterCalcObj.operation) {
      setDisplay(afterCalcObj.total);
    } else if (!afterCalcObj.operation) {
      setDisplay(afterCalcObj.next);
    } else {
      setDisplay(0);
    }
  };

  const handleClick = (e) => {
    // Handle calculator logic state
    const newCalcObj = calculate(calcObj, e.target.innerText);
    setCalcObj(newCalcObj);
    handleDisplayState(calcObj, newCalcObj);
  };

  return (
    <div className="calculator">
      <div className="calculator__display">{display ?? calcObj.next ?? 0}</div>
      <div className="calculator__keypad">
        <div className="calculator__keypad-row">
          {buttons.slice(0, 4).map((btn) => (
            <Buttons key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
        <div className="calculator__keypad-row">
          {buttons.slice(4, 8).map((btn) => (
            <Buttons key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
        <div className="calculator__keypad-row">
          {buttons.slice(8, 12).map((btn) => (
            <Buttons key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
        <div className="calculator__keypad-row">
          {buttons.slice(12, 16).map((btn) => (
            <Buttons key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
        <div className="calculator__keypad-row">
          {buttons.slice(16, 19).map((btn) => (
            <Buttons key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
