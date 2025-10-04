import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  document.title = "About | MovieZone";
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1F1E24] text-white p-6 md:p-12 relative">
      {/* Back button */}
      <i
        onClick={() => navigate(-1)}
        className="hover:text-[#6556CD] absolute top-4 left-4 text-4xl sm:text-5xl text-white ri-arrow-left-fill cursor-pointer"
      ></i>

      <div className="mt-12 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center sm:text-left">
          About MovieZone
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          Welcome to MovieZone, your ultimate destination for discovering the latest movies, trailers, and reviews. 
          We aim to provide a seamless experience for movie enthusiasts to explore films, watch trailers, and stay updated with the cinematic world.
        </p>
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg">
          Whether you’re looking for blockbuster hits or indie gems, MovieZone brings all your favorite films in one place.
        </p>
        <h1 className=" mt-8 text-[#6556CD]">Made by: Prashan-Patel</h1>
      </div>
    </div>
  );
};

export default About;
