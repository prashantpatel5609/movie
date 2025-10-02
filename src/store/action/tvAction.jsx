import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";


export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const translations = await axios.get(`/tv/${id} translations`);

    const similar = await axios.get(`/tv/${id}/similar`);

    const videos = await axios.get(`/tv/${id}/videos`);

    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);


  let ultimatedetails ={

   details: detail.data,
   externalid: externalid.data,
   recommendations: recommendations.data.results,
    similar: similar.data.results,
    translations: translations.data.translations,
    video: videos.data.results.find(m=> m.type==="Trailer"),
    watchproviders: watchproviders.data.results.IN,


  }

 dispatch(loadtv(ultimatedetails));
  console.log(ultimatedetails);



  } catch (error) {
    console.log("error while calling tv details api", error);
  }
};
