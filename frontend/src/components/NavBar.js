import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from "../assests/kynlogo.png";
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/joy/Avatar';

const Navbar = () => {
  const [selected, setSelected] = useState('home');
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  const toggleAvatarDropdown = () => {
    setIsAvatarDropdownOpen((prev) => !prev);

    if (!isAvatarDropdownOpen) {
      setTimeout(() => {
        setIsAvatarDropdownOpen(false);
      }, 3000); // Close dropdown after 3 seconds
    }
  };

  return (
      <nav className="mx-auto max-w  flex items-center justify-between h-full px-6 py-2 bg-white">
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
          <Link
            to="/getallevents"
            className={`flex items-center space-x-2 cursor-pointer ${selected === 'Events' ? 'text-red-500' : 'hover:text-red-500'}`}
            onClick={() => setSelected('Events')}
          >
            <MovieFilterIcon />
            <span>Events</span>
          </Link>
          <Link
            to="/attendance"
            className={`flex items-center space-x-2 cursor-pointer ${selected === 'Attendance' ? 'text-red-500' : 'hover:text-red-500'}`}
            onClick={() => setSelected('Attendance')}
          >
            <MovieFilterIcon />
            <span>Attendance</span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link to="/eventcreation">
              <button className="border-2 rounded-xl px-4 py-2 font-semibold hover:border-red-400 hover:bg-red-400">
                Create Event
              </button>
            </Link>
          </div>
          <NotificationsNoneIcon className="cursor-pointer text-red-500 hover:text-red-200 text-3xl" />
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
                <Link to="/dashboard" className="block px-4 py-2 text-black hover:bg-gray-100">
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
