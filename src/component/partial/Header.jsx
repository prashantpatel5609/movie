import { Link } from "react-router-dom"
const Header = ({data}) => {



  return  (
    <div style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,

        backgroundSize: 'cover',
        backgroundPosition: 'top 10%',
        backgroundRepeat: 'no-repeat'
    }} className='w-full h-[50vh] bg-amber-800 flex flex-col justify-end items-start p-[5%]'>

        <h1 className="text-5xl text-white font-black">{data.name || data.title || data.orignal_name || data.original_title}</h1>
        <p className="text-white w-[70%] mt-5 mb-3">{data.overview.slice(0, 200)}... <Link to={`${data.media_type}/details/${data.id}`} className="text-blue-400">More</Link></p>
        <p className="text-white">
            <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
            {data.release_date || "No Information"}
            <i className="ml-5 text-yellow-500 ri-movie-2-ai-fill"></i>{" "}
            {data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className=" bg-[#6556CD] p-4 mt-5 rounded text-white">Watch Trailer</Link>
    </div> 
  )
}

export default Header
