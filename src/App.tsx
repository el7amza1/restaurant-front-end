
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import "./style.scss"
import CartForm from './pages/CartForm';
import Sucsses from './pages/sucsses';
import { useState } from 'react';
function App() {
  const [timein, setTimein] = useState(false)

  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/cart' element={<CartForm setTimein={setTimein} timein={timein}></CartForm>} />
        <Route path={'/sucses'} element={<Sucsses />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
