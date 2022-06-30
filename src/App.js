import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Travel from './pages/Travel';
import About from './pages/About';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Budget from './pages/budget';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;