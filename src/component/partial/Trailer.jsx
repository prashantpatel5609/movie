import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";
// import plugin from "tailwindcss";

function Trailer() {
  document.title = `Trailer | Godcrfts`;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.video);
  
  console.log(ytvideo.key);
  return (
    <div className="absolute  p-12 w-[100%] h-[70%] flex items-center justify-center bg-[rgba(0,0,0,0.9)] z-[100] top-0 left-0 ">
      <Link
        onClick={() => navigate(-1)}
        className="hover:text-[#6556CD] absolute text-2xl top-[5%] right-[5%] ri-close-fill"
      ></Link>
    {ytvideo ? 
    // <ReactPlayer
    //     controls={true}
    //     url={`https://www.youtube.com/watch?v=${ytvideos.key}`}
    //     // height={500}
    //     // width={1100}
    //     className="w-full"
    //   />
    <iframe src={`https://www.youtube.com/embed/${ytvideo.key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameborder="0" allowfullscreen className="w-full h-full m-2"></iframe>
      :(
        <NotFound/>
      )}
    
    </div>
  )
}

export default Trailer;