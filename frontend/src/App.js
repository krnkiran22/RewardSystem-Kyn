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
import RedemptionPage from './pages/RedemptionPage';
import GetAllEvents from './pages/GetAllEvents';
import AdminPanel from './pages/AdminPanel';

const App = () => (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/live" element={<Live />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/klips" element={<Klips />} />
        <Route path="/eventcreation" element={<EventCreation />} />
        <Route path="/getallevents" element={<GetAllEvents />} />
        <Route path="/reedem" element={<RedemptionPage />} />
        <Route path='/attendence' element = {<AdminPanel/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

);

export default App;
