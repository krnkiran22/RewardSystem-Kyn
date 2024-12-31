import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Loader from '../components/Loader'; // Import the truck loader component

import FollowList from "../components/FollowList";
import AdBanner from "../components/AdBanner";
import PostCard from "../components/PostCard";
import ExclusiveList from "../components/ExclusiveList";
const Home = () => {
  return (
    <div>
        <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
      {/* Left Sidebar */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <FollowList />
      </div>

      {/* Main Content */}
      <div style={{ flex: 2, marginRight: "20px" }}>
        <AdBanner />
        <PostCard />




        
      </div>

      {/* Right Sidebar */}
      <div style={{ flex: 1 }}>
        <ExclusiveList />
      </div>
    </div>
    </div>
  );
};

export default Home;
