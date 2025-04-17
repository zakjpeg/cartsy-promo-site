import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Features from './pages/Features';
import './css/fonts.css';
import './css/styles__header.css';
import './App.css';

function App() {
  return (
      <HashRouter>
      <div className="header">
        <div className="spacer-left"></div>
        <Link to="/"><img src="./public/cartsyLogoName.png" alt="" /></Link>
        <nav className="nav__top">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path='/features' element={<Features />}></Route>
        </Routes>
      </HashRouter>

  );
}

export default App;