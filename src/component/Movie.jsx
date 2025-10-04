import React from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./partial/Dropdown";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "./../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import MobNav from "./MobNav";

const Movie = () => {
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
  document.title = "SCSDB | Movie";

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setpage(page + 1);
        setmovie((prev) => [...prev, ...data.results]);
      } else {
        sethasMore(false);
      }

      console.log(movie);
    } catch (error) {
      console.log("error :", error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setpage(1);
      setmovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
    const navigate = useNavigate();
  return movie.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className=" max-sm:pt-4 px-[4%] w-full flex max-sm:justify-between max-sm:pr-12 items-center max-sm:mb-4">
        <h1 className="text-2xl font-semibold text-zinc-400 ">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 ri-arrow-left-line hover:text-[#6557cc]"
          ></i>
          <h1 className="max-sm:flex max-sm:flex-col">
          Movie <small className="ml-3 text-sm">({category})</small>
          </h1>
        </h1>
          <div className="max-sm:hidden w-[65%]"><Topnav />
       </div> 
        
        <Dropdown
          title="Category"
          options={["popular", "top_rated", "upcoming", "now_playing"]}
          func={(e) => setcategory(e.target.value)}
      
        />
     
      
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h4 className="bg-[#1f1e24]">Loading...</h4>}
      >
        {" "}
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movie;
