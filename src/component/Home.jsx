  import Sidenav from "./partial/Sidenav";
import Topnav from "./Topnav";
import Header from "./partial/Header";
import React, { useEffect, useState } from "react";
import axios from "./../utils/axios";
import Horizontal from "./partial/Horizontal";
import Dropdown from "./partial/Dropdown";
import Loader from "./Loader";
import MobNav from "./MobNav";
  
const Home = () => {
  const [wall, setwall] = useState(null);
  const [trend, settrend] = useState([]);
  const [cat, setcat] = useState("all");

  const GetWall = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[Math.floor(Math.random() * data.results.length)];
      console.log(randomdata);
      setwall(randomdata);
    } catch (error) {
      console.log("error :", error);
    }
  };

  const GetTrend = async () => {
    try {
      const { data } = await axios.get(`/trending/${cat}/day`);
      settrend(data.results);
      console.log(data);
    
    } catch (error) {
      console.log("error :", error);
    }
  };

  useEffect(() => {
    !wall && GetWall();
    GetTrend();
  }, [cat]);

  document.title = "SCSDB | Homepage";
  return wall ? (
    <>


 
      <Sidenav />

       
       

       


      <div className="px-1 md:w-[80%] w-full h-full overflow-auto overflow-x-hidden sm:pr-2">
        <MobNav/> 
        <Topnav />
        <Header data={wall} />
        <div className="mt-3 w-full  flex justify-between items-center px-3 ">
          
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <div className="w-1/2" >          
            <Dropdown className=""
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcat(e.target.value)}
          />
          </div>

        </div>
        <Horizontal card={trend} />
      </div>
    </>
  ) : (
    <Loader/>
  );
};

export default Home;
