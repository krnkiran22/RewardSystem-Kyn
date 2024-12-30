import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Live from './pages/Live';
import Videos from './pages/Videos';
import Klips from './pages/Klips';
import "./styles/App.css"
import EventCreation from './pages/EventCreation';


const App = () => (
  <div className='App'>
  <Router>
    <Navbar />

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/live" element={<Live />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/klips" element={<Klips />} />
      <Route path="/eventcreation" element={<EventCreation />} />
    </Routes>
  </Router>
  </div>
);

export default App;
