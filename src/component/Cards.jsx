import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../public/noimg.png";
const Cards = ({ data, title }) => {
  console.log(title);
  return (
    <div className=" max-sm:justify-center  flex w-full flex-wrap md:px-[5%] md:p-7 bg-[#1f1e24]">
      {data.map((c, i) => (
        <Link
          key={i}
          to={`/${data.media_type || title}/details/${c.id}`}
          className="relative max-sm:w-[32vh] md:w-[27vh] mr-[5%] max-sm:mb-[10%] md:mb-4"
        >
          <img
  className="h-[44vh]  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
  src={
    c.backdrop_path || c.profile_path
      ? `https://image.tmdb.org/t/p/original/${c.backdrop_path || c.profile_path}`
      : noimage
  }
  alt=""
/>

          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%]  font-semibold rounded-full text-white h-[7vh] w-[7vh] bg-amber-400 flex justify-center items-center">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
