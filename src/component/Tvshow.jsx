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
    <div className="w-screen h-screen ">
      <div className=" px-[4%] w-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 ri-arrow-left-line hover:text-[#6557cc]"
          ></i>
          TV Shows <small className="ml-3 text-sm">({category})</small>
        </h1>

        <Topnav />
        <Dropdown
          title="Category"
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
