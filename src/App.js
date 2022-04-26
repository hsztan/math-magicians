import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
