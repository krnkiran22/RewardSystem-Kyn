import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Loader from '../components/Loader'; // Import the truck loader component
import "../styles/underdevbutton.css"
const Klips = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center py-28 justify-center text-lg font-bold px-20">
      <Loader />
         <div className="loader">
          <span className='loader-text'></span>
          <span class="load"></span>
        </div>
      
      
      <label className="text-body text-center text-primary-black w-[374px]" htmlFor="">
        No Events! Your neighbourhood is unusually quiet but stay tuned, the excitement is brewing!
      </label>
    </div>
  );
};

export default Klips;
