import React from 'react';
import calculate from './logic/calculate';
import './calculator.scss';

export default class Calculator extends React.PureComponent {
  constructor() {
    super();
    this.state = { calcObj: { total: null, next: null, operation: null } };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.state);
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick(e) {
    const { calcObj } = this.state;
    const newCalcObj = calculate(calcObj, e.target.innerText);
    this.setState({ calcObj: newCalcObj });
  }

  render() {
    const { calcObj } = this.state;
    return (
      <div className="calculator">
        <div className="calculator__display">{calcObj.total}</div>
        <div className="calculator__keypad">
          <div className="calculator__keypad-row">
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              AC
            </button>
            <button type="button" className="calculator__keypad-button">
              +/-
            </button>
            <button type="button" className="calculator__keypad-button">
              %
            </button>
            <button type="button" className="calculator__keypad-button">
              &divide;
            </button>
          </div>
          <div className="calculator__keypad-row">
            <button type="button" className="calculator__keypad-button">
              7
            </button>
            <button type="button" className="calculator__keypad-button">
              8
            </button>
            <button type="button" className="calculator__keypad-button">
              9
            </button>
            <button type="button" className="calculator__keypad-button">
              &times;
            </button>
          </div>
          <div className="calculator__keypad-row">
            <button type="button" className="calculator__keypad-button">
              4
            </button>
            <button type="button" className="calculator__keypad-button">
              5
            </button>
            <button type="button" className="calculator__keypad-button">
              6
            </button>
            <button type="button" className="calculator__keypad-button">
              -
            </button>
          </div>
          <div className="calculator__keypad-row">
            <button type="button" className="calculator__keypad-button">
              1
            </button>
            <button type="button" className="calculator__keypad-button">
              2
            </button>
            <button type="button" className="calculator__keypad-button">
              3
            </button>
            <button type="button" className="calculator__keypad-button">
              +
            </button>
          </div>
          <div className="calculator__keypad-row">
            <button
              id="zero"
              type="button"
              className="calculator__keypad-button"
            >
              0
            </button>
            <button type="button" className="calculator__keypad-button">
              .
            </button>
            <button type="button" className="calculator__keypad-button">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
