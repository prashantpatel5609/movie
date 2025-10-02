import React from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./partial/Dropdown";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "./../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);


   document.title = "SCSDB | Trending";

  const GetTrend = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
     
      if(data.results.length > 0){
        setpage(page + 1);
      settrending((prev) => [...prev, ...data.results]);
        
      }
      else{
        sethasMore(false);
      }
      
      
      console.log(trending);
      
      

    } catch (error) {
      console.log("error :", error);
    }
  };

  const refreshHandler = () =>{
    if(trending.length ===0){
      GetTrend();
    }
    else{
      setpage(1);
      settrending([]);
       GetTrend();
    }
  }


  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  const navigate = useNavigate();
  return trending.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className=" px-[4%] w-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 ri-arrow-left-line hover:text-[#6557cc]"
          ></i>
          Trending
        </h1>

        <Topnav />
        <Dropdown
          title="Category"
          options={["tv", "movie", "all"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%] "></div>
        <Dropdown
          title="Duration"
          options={["week", "day"]}
          func={(e) => setduration(e.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrend}
        hasMore={hasMore}
        loader={<h4 className="bg-[#1f1e24]">Loading...</h4>}
      >
        {" "}
        <Cards data={trending} title={category}/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
