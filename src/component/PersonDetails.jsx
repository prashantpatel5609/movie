import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { asyncloadperson } from "../store/action/personAction";
import { removeperson } from "../store/reducers/personSlice";
import Loader from "../component/Loader";
import Horizontal from "./partial/Horizontal";
import { Outlet } from "react-router-dom";
import noimage from "../../public/noimg.png";
const PersonDetails = () => {
  const { info } = useSelector((state) => state.person);
  const navigate = useNavigate();
  const pathname = location.pathname;
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div>
      <div className="px-[15%] w-screen bg-zinc-800">
        {/*navpart 1*/}
        <nav className=" h-[10vh] w-full text-zinc-100 text-xl flex items-center justify-start gap-10">
          <Link
            onClick={() => navigate(-1)}
            className="mr-2 ri-arrow-left-line hover:text-[#6557cc]"
          ></Link>
        </nav>

        {/*photto bio*/}

        <div className="flex gap-10">
          <div className="w-full gap-3 flex flex-col">
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[15vw] object-cover"
              src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
              alt=""
            />
            <hr className="mt-4 h-[1px] w-[15vw]  bg-zinc-300 border-0" />
            {/*social*/}
            <div className="flex gap-6  mt-1">
              <a
                className="hover:text-[#6557cc] text-3xl text-white"
                target="_blank"
                href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              >
                <i class="ri-share-box-line hover:text-[#6557cc]"></i>
              </a>
              <a
                className="hover:text-[#6557cc] text-3xl text-white"
                target="_blank"
                href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              >
                <i className="ri-facebook-box-fill hover:text-[#6557cc] text-blue-600 text-3xl"></i>
              </a>
              <a
                className="hover:text-[#6557cc] text-3xl text-white"
                target="_blank"
                href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              >
                <i class="ri-instagram-line text-3xl text-pink-500 "></i>
              </a>
              <a
                className="hover:text-[#6557cc] text-3xl text-white"
                target="_blank"
                href={`https://www.twitter.com/${info.externalid.twitter_id}`}
              >
                <i class="ri-twitter-line text-3xl text-black-500 "></i>
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-4xl text-zinc-300 font-black">
              {info.details.name}
              <small className="ml-4 text-lg font-light  ">Biograpgy</small>
            </h1>

            <p className="mt-2 text-zinc-400">
              {info.details.biography
                ? info.details.biography.split(" ").slice(0, 180).join(" ") +
                  (info.details.biography.split(" ").length > 180 ? "..." : "")
                : "No Biography Available"}
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className=" w-full h-screen">


     <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Person Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold ">Known For</h1>
          <h1 className=" text-zinc-400 ">
            {info.details.known_for_department}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.details.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Birthday
          </h1>
          <h1 className=" text-zinc-400 ">{info.details.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Deathday
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.details.deathday ? info.details.deathday : "Still Alive"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Place Of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.details.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Also Known As
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.details.also_known_as.join(", ")}
          </h1>

        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetails;
