
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { asyncloadtv } from "../store/action/tvAction";
import { removetv } from "../store/reducers/tvSlice";
import Loader from "../component/Loader";
import Horizontal from "./partial/Horizontal";
import { Outlet } from "react-router-dom";

const TvDetails = () => {
  const { info } = useSelector((state) => state.tv);
    const navigate = useNavigate();
 
    const pathname = location.pathname;
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log(info);
    useEffect(() => {
      dispatch(asyncloadtv(id));
  
      return () => {
        dispatch(removetv());
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
      className="relative w-full h-[150vh] max-sm:flex max-sm:flex-col overflow-hidden overflow-y-auto text-white px-[8%] max-sm:px-6"
    >
      {/*navpart 1*/}
      <nav className=" h-[10vh] w-full text-zinc-100 md:text-xl text-3xl max-sm:mt-3 flex items-center justify-start gap-10">
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

      <div className="w-full flex max-sm:flex-col max-sm:mt-3">
        <img
          className=" rounded-md h-[62vh] max-sm:h-[44vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path ||
            info.details.backdrop_path ||
            info.details.profile_path
          }`}
          alt=""
        />

        <div className="content ml-[5%]  text-white ">
          <h1 className="text-5xl font-black mt-4">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}
            {"   "}
          
            <small className="text-zinc-300 text-2xl font-bold">
              ({info.details.first_air_date.split("-")[0]}) <span className=" mt-4 font-semibold rounded-full text-white  h-[6vh] md:h-[7vh] md:w-[7vh] bg-amber-400 flex justify-center items-center">
               People Likes {(info.details.vote_average * 10).toFixed()} <sup>%</sup> 
            </span>
            </small>
            
            
          </h1>

          <div className="flex gap-x-5 items-center mt-3 mb-3 text-white ">
            
            <h1 className="w-[60px] font-semibold text-2xl leading-6">
              User Score
            </h1>
            <h1>{info.details.first_air_date}</h1>
            <h1>{info.details.genres.map((gen) => gen.name).join(", ")}</h1>
            <h1>{info.details.runtime} min</h1>
          </div>

          <h1 className="text-xl font-semibold italic">
            {info.details.tagline}
          </h1>
          <h1 className="text-2xl mt-2 mb-3 ">Overview :</h1>
          <p className="mb-6">{info.details.overview}</p>
             
             <Link to={`${pathname}/trailer`} className=" bg-[#8120fc] p-3 rounded-md "><i class="ri-play-reverse-large-fill"></i> Play Trailer</Link>
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
 
<hr className="mt-6 border border-zinc-400" />

<h1 className="text-3xl mt-4 font-bold text-white">Recommondation && Similar stuff</h1>
      <Horizontal card={
        info.recommendations.length > 0 ? info.recommendations : info.similar
      } />  
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default TvDetails
