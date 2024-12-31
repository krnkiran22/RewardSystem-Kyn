import React from "react";
import { ChevronRight } from "lucide-react";

const TOP_MOVIES = [
  {
    id: 1,
    title: "Lucky Baskhar",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
    badge: "TOP 10"
  },
  {
    id: 2,
    title: "Carry On",
    image: "https://images.unsplash.com/photo-1597002973885-8c90683fa6e0?w=800&auto=format&fit=crop",
    badge: "Recently added"
  },
  {
    id: 3,
    title: "Maran",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
    badge: "Recently added"
  },
  {
    id: 4,
    title: "Lucky Video",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
    badge: "Recently added"
  },
  {
    id: 5,
    title: "Yo Yo Honey Singh Famous",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop",
    badge: "Recently added"
  }
];

const FEATURES = [
  {
    title: "Enjoy on your TV",
    description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: () => <span className="material-icons text-red-600">tv</span>
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favourites easily and always have something to watch.",
    icon: () => <span className="material-icons text-red-600">download</span>
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: () => <span className="material-icons text-red-600">devices</span>
  },
  {
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: () => <span className="material-icons text-red-600">child_care</span>
  }
];

function HomePage() {
  return (
    <div className=''>
       
    </div>
  );
};

export default Home;
