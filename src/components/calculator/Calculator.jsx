import React from 'react';
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
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              AC
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              +/-
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              %
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              ÷
            </button>
          </div>
          <div className="calculator__keypad-row">
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              7
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              8
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              9
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              x
            </button>
          </div>
          <div className="calculator__keypad-row">
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              4
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              5
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              6
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              -
            </button>
          </div>
          <div className="calculator__keypad-row">
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              1
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              2
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              3
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              +
            </button>
          </div>
          <div className="calculator__keypad-row">
            <button
              onClick={this.handleClick}
              id="zero"
              type="button"
              className="calculator__keypad-button"
            >
              0
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              .
            </button>
            <button
              onClick={this.handleClick}
              type="button"
              className="calculator__keypad-button"
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
