import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
