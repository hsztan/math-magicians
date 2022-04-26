import './styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link to="/">Math Magicians</Link>
    <ul className="nav">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </ul>
  </div>
);

export default Header;
