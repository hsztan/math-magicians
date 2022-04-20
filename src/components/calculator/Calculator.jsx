import React from 'react';
import calculate from './logic/calculate';
import operate from './logic/operate';
import './calculator.scss';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div className="calculator__display">0</div>
        <div className="calculator__keypad">
          <div className="calculator__keypad-row">
            <button type="button" className="calculator__keypad-button">
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
