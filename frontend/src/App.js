import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Live from './pages/Live';
import Videos from './pages/Videos';
import Klips from './pages/Klips';
import EventCreation from './pages/EventCreation';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import Dashboard from './components/Dashboard'; 



import GetAllEvents from './pages/GetAllEvents';

const App = () => (
  <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/live" element={<Live />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/klips" element={<Klips />} />
        <Route path="/eventcreation" element={<EventCreation />} />
        <Route path="/getallevents" element={<GetAllEvents />} />
        
        
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </div>
);

export default App;
