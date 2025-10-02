import React from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./partial/Dropdown";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "./../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
document.title = "SCSDB | Popular";

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );

      if (data.results.length > 0) {
        setpage(page + 1);
        setpopular((prev) => [...prev, ...data.results]);
      } else {
        sethasMore(false);
      }

      console.log(popular);
    } catch (error) {
      console.log("error :", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  const navigate = useNavigate();
  return popular.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className=" px-[4%] w-full flex items-center justify-between pr-40">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 ri-arrow-left-line hover:text-[#6557cc]"
          ></i>
          Popular <small className="ml-3 text-sm">({category})</small>
        </h1>

        <Topnav />
        <Dropdown
          title="Category"
          options={["tv", "movie"]}
          func={(e) => setcategory(e.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h4 className="bg-[#1f1e24]">Loading...</h4>}
      >
        {" "}
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Popular;
