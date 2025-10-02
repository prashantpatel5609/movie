import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import noimg from "/noimg.png"

const Topnav = () => {
  const [query, setquery] = useState("");
      const[search,setsearch] = useState([]);

    
  const GetSearch = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results)
      
    } catch (error) {
      console.log("error :", error);
    }
  };

  useEffect(() => {
    GetSearch();
  }, [query]);

  return (
    <div className=" w-1/2 h-[10vh] ml-[10%] flex justify-start  items-center relative">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="text-zinc-300 w-[60%] mx-4 p-5 outline-none border-none  text-xl"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-3xl ri-close-line"
        ></i>
      )}

      <div className="w-[80%] max-h-[50vh] bg-[#1f1e24] top-[100%] absolute overflow-auto rounded-xl z-[9999]">
        {search.map((s,i)=> <Link to={`${s.media_type}/details/${s.id}`} key={i} className="hover:text-black hover:bg-zinc-800 duration-300 font-semibold text-zinc-600 w-[100%] h-[10vh] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img className=" shadow- h-[10vh] w-[10vh] object-cover mr-5 rounded" src={ s.backdrop_path || s.profile_path ?`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimg}  alt="" />
          <span>{s.name || s.title || s.orignal_name || s.original_title}</span>
        </Link>)}
       
      </div>
    </div>
  );
};

export default Topnav;
