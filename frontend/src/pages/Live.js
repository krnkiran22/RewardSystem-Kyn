import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Loader from '../components/Loader'; // Import the truck loader component

const Live = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center py-28 justify-center text-lg font-bold px-20">
      <Loader /> {/* Add the loader animation here */}
     <label className="text-title2 text-primary-black" htmlFor="">
        Just a Quiet Day
      </label>
      <label className="text-body text-center text-primary-black w-[374px]" htmlFor="">
        No Events! Your neighbourhood is unusually quiet but stay tuned, the excitement is brewing!
      </label>
    </div>
  );
};

export default Live;
