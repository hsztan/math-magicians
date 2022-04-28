import PropTypes from 'prop-types';

const Buttons = ({ name, handleClick }) => (
  <button
    id={name === '0' ? 'zero' : ''}
    onClick={handleClick}
    type="button"
    className="calculator__keypad-button"
  >
    {name}
  </button>
);

export default Buttons;

// export default class Buttons extends React.PureComponent {
//   render() {
//     const { name, handleClick } = this.props;
//     return (
//       <button
//         id={name === '0' ? 'zero' : ''}
//         onClick={handleClick}
//         type="button"
//         className="calculator__keypad-button"
//       >
//         {name}
//       </button>
//     );
//   }
// }

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
