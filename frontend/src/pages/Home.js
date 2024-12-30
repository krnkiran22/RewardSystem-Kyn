import React from 'react';
import Snowfall from 'react-snowfall';
import '../styles/Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div>
      <div className="background-div ">
        <Snowfall />
      </div>
    </div>
  );
};

export default Home;
