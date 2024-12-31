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
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-red-600 text-4xl font-bold">Kyn</h1>
          <button className="px-4 py-2 bg-red-600 text-white rounded">Sign In</button>
        </div>

        {/* Top Movies Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Top 10 Movies in India Today</h2>
            <button className="flex items-center text-white">
              See all <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {TOP_MOVIES.map((movie, index) => (
              <div key={movie.id} className="bg-zinc-900 rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105">
                <div className="relative">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-xs text-white px-2 py-1 rounded">
                    {movie.badge}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <span className="text-7xl font-bold opacity-40 absolute -left-2 bottom-2">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{movie.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-12">More reasons to join</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-zinc-900 rounded-lg">
                <feature.icon />
                <h3 className="text-xl font-semibold my-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
