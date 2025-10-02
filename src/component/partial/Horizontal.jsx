import React from "react";
import Dropdown from "./Dropdown";
import { data, Link } from "react-router-dom";
import noimg from "../../../public/noimg.png";
const Horizontal = ({card}) => {
  console.log(card);
  return (
    <div className="w-full h-[50vh] p-3 mb-2 ">
      

 <div className="w-full h-full overflow-x-auto flex mb-2 gap-4">
  {   card.length>0? card.map((s, i) => (
    <Link to={`/${s.media_type}/details/${s.id}`}
      key={i}
      className="w-[16%]  h-full shrink-0 bg-zinc-900 rounded-lg overflow-hidden flex flex-col"
    >
     
     <img
  className="w-full h-1/2 object-cover"
  src={s.backdrop_path || s.profile_path 
       ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` 
       : "noimg.png"}
  alt={s.title || s.name || s.original_name || s.original_title}
/>



      <div className="p-2 flex-1 flex flex-col justify-between">
        <h1 className="text-lg font-bold text-white">
          {s.name || s.title || s.original_name || s.original_title}
        </h1>
        <p className="text-sm text-white line-clamp-4 mt-1 mb-0.5">
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
