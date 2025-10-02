import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";


export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const translations = await axios.get(`/movie/${id} translations`);

    const similar = await axios.get(`/movie/${id}/similar`);

    const videos = await axios.get(`/movie/${id}/videos`);

    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);


  let ultimatedetails ={

   details: detail.data,
   externalid: externalid.data,
   recommendations: recommendations.data.results,
    similar: similar.data.results,
    translations: translations.data.translations,
    video: videos.data.results.find(m=> m.type==="Trailer"),
    watchproviders: watchproviders.data.results.IN,


  }

 dispatch(loadmovie(ultimatedetails));
  console.log(ultimatedetails);



  } catch (error) {
    console.log("error while calling movie details api", error);
  }
};
