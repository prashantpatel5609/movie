import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { asyncloadmovie } from "../store/action/movieAction";
import { removemovie } from "../store/reducers/movieSlice";
import Loader from "../component/Loader";
import Horizontal from "./partial/Horizontal";
import { Outlet } from "react-router-dom";
const MovieDetails = () => {
  const { info } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const pathname = location.pathname;
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,

        backgroundSize: "cover",
        backgroundPosition: "top 10%",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full h-[150vh] overflow-hidden overflow-y-auto text-white px-[10%] max-sm:px-6"
    >
      {/*navpart 1*/}
      <nav className=" h-[10vh] w-full text-zinc-100 text-2xl max-sm:text-3xl flex items-center justify-start gap-10 ">
        <Link
          onClick={() => navigate(-1)}
          className="mr-2 ri-arrow-left-line hover:text-[#6557cc]"
        ></Link>
        <a target="_blank" href={info.details.homepage}>
          <i class="ri-global-line hover:text-[#6557cc]"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i class="ri-share-box-line hover:text-[#6557cc]"></i>
        </a>
        <a
          target="_blank"
          className="hover:text-[#6557cc]"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          Imdb
        </a>
      </nav>
      {/*navpart 2*/}

      <div className="w-full flex max-sm:flex-col">
        <img
          className="rounded-md h-[62vh] max-sm:h-[44vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path ||
            info.details.backdrop_path ||
            info.details.profile_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] mt-5  text-white ">
          <h1 className="text-5xl font-black">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}
            {"   "}
            <small className="text-zinc-300 text-2xl font-bold">
              ({info.details.release_date.split("-")[0]}){" "}
             
              
             
            </small>
           
              
</h1>
 <div className=" flex justify-between   items-center h-12  mt-4">
 <span className="  rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
                {(info.details.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
               <Link
            to={`${pathname}/trailer`}
            className="bg-[#8120fc] p-3  rounded-md md:hidden"
          >
            <i class="ri-play-reverse-large-fill"></i> Play Trailer
          </Link>
          </div>
           

          <div className="flex gap-x-5 items-center mt-3 mb-3 text-white ">
            <h1 className="w-[60px] font-semibold text-2xl leading-6 max-sm:mt-2">
              User Score
            </h1>
            <h1>{info.details.release_date}</h1>
            <h1>{info.details.genres.map((gen) => gen.name).join(", ")}</h1>
            <h1>{info.details.runtime} min</h1>
          </div>
         
          <h1 className="text-xl font-semibold italic">
            {info.details.tagline}
          </h1>
          <h1 className="text-2xl mt-2 mb-3 ">Overview :</h1>
          <p className="mb-6">{info.details.overview}</p>

          <Link
            to={`${pathname}/trailer`}
            className=" max-sm:hidden bg-[#8120fc] p-3 rounded-md "
          >
            <i class="ri-play-reverse-large-fill"></i> Play Trailer
          </Link>
        </div>
      </div>
      {/*navpart 3*/}
      <div className=" w-[80%] flex flex-col mt-5">
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-3  items-center text-white">
            <h1 className="mr-10">Available on rent</h1>
            {info.watchproviders.rent.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh]  rounded-md h-[5vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex mt-3 gap-7 items-center text-white">
            <h1>Available on Platform</h1>
            {info.watchproviders.buy.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] rounded-md h-[5vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      {/*navpart 4*/}

      <hr className="md:mt-6 h-[2px] bg-zinc-400 border-0" />

      <h1 className="text-3xl mt-8 font-bold text-white">
        Recommondation && Similar stuff
      </h1>
      <Horizontal
        card={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
