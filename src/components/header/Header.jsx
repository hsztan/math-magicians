import './styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link id="logo" to="/">
      Math Magicians
    </Link>
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Header;
