import React from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends React.PureComponent {
  render() {
    const { name, handleClick } = this.props;
    return (
      <button
        onClick={handleClick}
        type="button"
        className="calculator__keypad-button"
      >
        {name}
      </button>
    );
  }
}

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
