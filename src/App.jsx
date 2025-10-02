import React from "react";
import Trending from "./component/Trending";
import Home from "./component/Home";
import Popular from "./component/Popular";
import { Routes, Route } from "react-router-dom";
import Movie from "./component/Movie";
import Tvshow from "./component/Tvshow";
import Person from "./component/Person";
import MovieDetails from "./component/MovieDetails";
import TvDetails from "./component/TvDetails";
import PersonDetails from "./component/PersonDetails";
import Trailer from "./component/partial/Trailer";
import NotFound from "./component/NotFound";
const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/tv" element={<Tvshow />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/person" element={<Person />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
