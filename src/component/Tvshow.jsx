import React from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./partial/Dropdown";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "./../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshow = () => {
  const [category, setcategory] = useState("popular");
  const [tvshow, settvshow] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
  document.title = "SCSDB | TV Shows";

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        setpage(page + 1);
        settvshow((prev) => [...prev, ...data.results]);
      } else {
        sethasMore(false);
      }

      console.log(tvshow);
    } catch (error) {
      console.log("error :", error);
    }
  };

  const refreshHandler = () => {
    if (tvshow.length === 0) {
      GetTv();
    } else {
      setpage(1);
      settvshow([]);
      GetTv();
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvshow.length > 0 ? (
    <div className="w-screen h-screen">
      <div className=" w-[82%] flex items-center  gap-16 justify-between ml-6 md:ml-12 mt-1.5">
        <div className="text-2xl font-semibold text-zinc-400 max-sm:mb-4">
          <i
            onClick={() => navigate(-1)}
            className="mr-5 ri-arrow-left-line hover:text-[#6557cc]"
          ></i>
          <h1 className="max-sm:flex max-sm:flex-col">
            TV Shows <small className="ml-3 text-sm">({category})</small>
          </h1>
        </div>

        <div className="max-sm:hidden w-[65%]"><Topnav />
       </div> 

        <Dropdown
          title={category}
          options={["on_the_air", "popular", "top_rated", "airing_today"]}
          func={(e) => setcategory(e.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={tvshow.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h4 className="bg-[#1f1e24]">Loading...</h4>}
      >
        {" "}
        <Cards data={tvshow} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Tvshow;
