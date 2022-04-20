import React from 'react';
import Buttons from '../buttons/buttons';
import calculate from './logic/calculate';
import './calculator.scss';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: { total: null, next: null, operation: null },
      display: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.buttons = [
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
  }

  handleDisplayState(beforeCalcObj, afterCalcObj) {
    // Handle display UI state
    if (!afterCalcObj.operation && !afterCalcObj.next && afterCalcObj.total) {
      this.setState({ display: afterCalcObj.total });
    } else if (beforeCalcObj.operation && afterCalcObj.next) {
      this.setState({ display: afterCalcObj.next });
    } else if (afterCalcObj.total && afterCalcObj.operation) {
      this.setState({ display: afterCalcObj.total });
    } else if (!afterCalcObj.operation) {
      this.setState({ display: afterCalcObj.next });
    } else {
      this.setState({ display: 0 });
    }
  }

  handleClick(e) {
    // Handle calculator logic state
    const { calcObj } = this.state;
    const newCalcObj = calculate(calcObj, e.target.innerText);
    this.setState({ calcObj: newCalcObj });
    this.handleDisplayState(calcObj, newCalcObj);
  }

  render() {
    const { display, calcObj } = this.state;
    return (
      <div className="calculator">
        <div className="calculator__display">
          {display ?? calcObj.next ?? 0}
        </div>
        <div className="calculator__keypad">
          <div className="calculator__keypad-row">
            {this.buttons.splice(0, 4).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="calculator__keypad-row">
            {this.buttons.splice(0, 4).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="calculator__keypad-row">
            {this.buttons.splice(0, 4).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="calculator__keypad-row">
            {this.buttons.splice(0, 4).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="calculator__keypad-row">
            {this.buttons.splice(0, 4).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
