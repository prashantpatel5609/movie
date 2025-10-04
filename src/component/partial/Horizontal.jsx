import React from "react";
import Dropdown from "./Dropdown";
import { data, Link } from "react-router-dom";
import noimg from "../../../public/noimg.png";
const Horizontal = ({card}) => {
  console.log(card);
  return (
    <div className="w-full h-[50vh] p-3 mb-2 px-3 ">
      

 <div className="min-w-full flex max-sm:flex-col overflow-x-auto mb-3 px-2 max-sm:gap-2">
  {   card.length>0? card.map((s, i) => (
    <Link to={`/${s.media_type}/details/${s.id}`}
      key={i}
      className="sm:min-w-[30%] max-sm:w-[100%] md:mr-3 p-1 rounded-lg "
    >
     
     <img
  className="min-w-full min-h-1/2 object-cover rounded-md"
  src={s.backdrop_path || s.profile_path 
       ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` 
       : "noimg.png"}
  alt={s.title || s.name || s.original_name || s.original_title}
/>



      <div className="p-2 flex-1 flex flex-col justify-between">
        <h1 className="text-lg font-bold text-white">
          {s.name || s.title || s.original_name || s.original_title}
        </h1>
        <p className="text-sm text-zinc-300 line-clamp-4 mt-1 mb-0.5">
          {s.overview || "No description available"}{" "}
          <span className="text-purple-600">more..</span>
        </p>
      </div>
    </Link>
  )) : <h1 className="text-3xl text-white font-black text-center mt-6 ">Nothig to Show</h1>}
</div>


      
    </div>
  );
};

export default Horizontal;
