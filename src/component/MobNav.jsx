import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
const MobNav = () => {

   const [open, setopen] = useState(false);
   console.log(open);
   

  return (
   <div>
      <div className="md:hidden  h-[80vh] w-full flex items-center justify-between  md:p-4">
        <h1 className="text-white text-5xl font-bold">
          <i className=" text-[#6556CD] ri-tv-fill mr-2"></i>
          <span className="text-2xl">Movie</span>
        </h1>
        <i onClick={()=>setopen(!open)} className=" text-white ri-menu-line text-5xl m-1"></i>
      </div>


      <div className={`md:hidden w-[81%] fixed top-20 right-0  bg-gray-800 text-white  z-40  sm:block  h-full border-r-2 border-zinc-400 p-3 transform transition-transform duration-500 ease-in-out    ${open ? "translate-x-0" : "translate-x-full"}`}>
        <h1  className="text-white font-bold">
          <i class="mr-2 text-zinc-200 text-2xl ri-account-circle-fill"></i>
          
          <span className="text-2xl">Prashant</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className="text-xl text-white font-semibold mt-8 mb-5">
            New Feeds
          </h1>

          <Link
            to="/trending"
            className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3"
          >
            <i className="mr-2 ri-fire-fill"></i>
            Trending
          </Link>
          <Link
            to="/popular"
            className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3"
          >
            <i className="mr-2 ri-bard-fill"></i>
            Popular
          </Link>
          <Link
            to="/movie"
            className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3"
          >
            <i className=" mr-2 ri-movie-2-fill"></i>
            Movies
          </Link>
          <Link
            to="/tv"
            className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3"
          >
            <i className="mr-2 ri-tv-2-fill"></i>
            TV Show
          </Link>
          <Link
            to="/person"
            className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3"
          >
            <i className="mr-2 ri-team-fill"></i>
            People
          </Link>
        </nav>

        <hr className="border-none bg-zinc-400 h-[1px]" />

        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className="text-xl text-white font-semibold mt-6 mb-1">
            Website Information
          </h1>

          <Link to="/about" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3">
            <i className="mr-2 ri-information-2-fill"></i>
            About SCSDB
          </Link>
          <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3">
            <i className="mr-2 ri-phone-fill"></i>
            Contact Us
          </Link>
        </nav>
      </div>
      </div>
    
  )
}

export default MobNav
