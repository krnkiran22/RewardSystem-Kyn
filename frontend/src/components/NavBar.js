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
  const [selected, setSelected] = useState('home');
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  const toggleAvatarDropdown = () => {
    setIsAvatarDropdownOpen((prev) => !prev);
  };

  return (
    <>
    <style>
        {`
        button {
          outline: none;
          cursor: pointer;
          border: none;
          padding: 0.9rem 2rem;
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          position: relative;
          display: inline-block;
          letter-spacing: 0.05rem;
          font-weight: 700;
          font-size: 17px;
          border-radius: 500px;
          overflow: hidden;
          background: #ed3544;
          color: ghostwhite;
        }

        button span {
          position: relative;
          z-index: 10;
          transition: color 0.4s;
        }

        button:hover span {
          color: black;
        }

        button::before,
        button::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        button::before {
          content: "";
          background: #000;
          width: 120%;
          left: -10%;
          transform: skew(30deg);
          transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
        }

        button:hover::before {
          transform: translate3d(100%, 0, 0);
        }
        `}
  </style>
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
          <MovieFilterIcon />
          <span>Klips</span>
        </Link>
        
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Link to="/eventcreation">
            <button >
              <span>Create Event</span>
            </button>
          </Link>
        </div>
        <NotificationsNoneIcon className="cursor-pointer text-red-500 hover:text-red-200 text-3xl" /> {/* Big hollow bell icon */}
        
        {/* Avatar icon with dropdown */}
        <div className="relative">
          <Avatar
            className="cursor-pointer text-2xl"
            onClick={toggleAvatarDropdown}
          />
          {isAvatarDropdownOpen && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-40 py-2">
              <Link to="/login" className="block px-4 py-2 text-black hover:bg-gray-100">
                Login
              </Link>
              <Link to="/signup" className="block px-4 py-2 text-black hover:bg-gray-100">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
