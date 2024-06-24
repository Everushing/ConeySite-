import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';


const App = () => (
  

  <div className="App">
    <Navbar/>
  <Routes>
    {/* <Switch> */}
    <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/home/:symbol" element={<Home/>} /> 
        <Route path="/contact" element={<Contact/>}/>
       </Routes>
      {/* </Switch> */}
      <Footer />
    </div>

);

export default App;



