import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; // Hollow bell icon
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from "../assests/kynlogo.png";

import AddIcon from '@mui/icons-material/Add'; // Plus icon
import Avatar from '@mui/joy/Avatar';

const Navbar = () => {
  // State to track the selected icon
  const [selected, setSelected] = useState('home');

  return (
    <nav className="mx-auto max-w-7xl flex items-center justify-between h-full px-6 py-2 bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <img className="w-11 h-11" src={Logo} alt="KYN Logo" />
        <div className="flex items-center bg-gray-200 px-3 py-2 rounded-md w-55">
          <LocationOnIcon className="text-gray-700" />
          <input
            type="text"
            placeholder="Anna nagar"
            className="outline-none bg-gray-200 text-gray-700 font-semibold ml-2 w-full"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center font-medium text-black space-x-6">
        <Link
          to="/home"
          className={`flex items-center space-x-2 cursor-pointer ${selected === 'home' ? 'text-red-500' : 'hover:text-red-500'}`}
          onClick={() => setSelected('home')}
        >
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link
          to="/live"
          className={`flex items-center space-x-2 cursor-pointer ${selected === 'live' ? 'text-red-500' : 'hover:text-red-500'}`}
          onClick={() => setSelected('live')}
        >
          <LiveTvIcon />
          <span>Live</span>
        </Link>
        <Link
          to="/videos"
          className={`flex items-center space-x-2 cursor-pointer ${selected === 'videos' ? 'text-red-500' : 'hover:text-red-500'}`}
          onClick={() => setSelected('videos')}
        >
          <VideoLibraryIcon />
          <span>Videos</span>
        </Link>
        <Link
          to="/klips"
          className={`flex items-center space-x-2 cursor-pointer ${selected === 'klips' ? 'text-red-500' : 'hover:text-red-500'}`}
          onClick={() => setSelected('klips')}
        >
          <MovieFilterIcon  />
          <span>Klips</span>
        </Link>
        <Link
          to="/eventcreation"
          className={`flex items-center space-x-2 cursor-pointer ${selected === 'Event Creation' ? 'text-red-500' : 'hover:text-red-500'}`}
          onClick={() => setSelected('Event Creation')}
        >
          <MovieFilterIcon  />
          <span>Event Creation</span>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button className="bg-white text-black border-black border px-5 py-2 rounded-full hover:bg-gray-200 flex items-center text-lg">
            <AddIcon className="mr-2  text-xl" /> {/* Plus icon inside the Create button */}
            Create
          </button>
        </div>
        <NotificationsNoneIcon className="cursor-pointer text-red-500 hover:text-red-200 text-3xl" /> {/* Big hollow bell icon */}
        <Avatar className="cursor-pointer text-2xl" /> {/* Avatar icon */}
      </div>
      
    </nav>
  );
};

export default Navbar;
