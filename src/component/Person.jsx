import React from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./partial/Dropdown";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "./../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Person = () => {

    const [category, setcategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
document.title = "SCSDB | People";

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(
        `/person/${category}?page=${page}`
      );

      if (data.results.length > 0) {
        setpage(page + 1);
        setperson((prev) => [...prev, ...data.results]);
      } else {
        sethasMore(false);
      }

      console.log(person);
    } catch (error) {
      console.log("error :", error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setpage(1);
      setperson([]);
      GetPerson();
    }
  };
const navigate = useNavigate();
  useEffect(() => {
    refreshHandler();
  }, [category]);
  return person.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className=" px-[4%] w-full flex items-center justify-between">
        <h1 className="] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 ri-arrow-left-line hover:text-[#6557cc]"
          ></i>
          People
        </h1>

        <Topnav />
        
      </div>
      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h4 className="bg-[#1f1e24]">Loading...</h4>}
      >
        {" "}
        <Cards data={person} title="person"  />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Person
