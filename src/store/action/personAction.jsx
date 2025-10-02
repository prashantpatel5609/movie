import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";


export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
         const movieCredits = await axios.get(`/person/${id}/movie_credits`);
          const tvCredits = await axios.get(`/person/${id}/tv_credits`);
  let ultimatedetails ={

   details: detail.data,
   externalid: externalid.data,
    movieCredits: movieCredits.data,
    combinedCredits: combinedCredits.data,
    tvCredits: tvCredits.data,
  }

 dispatch(loadperson(ultimatedetails));
  console.log(ultimatedetails);



  } catch (error) {
    console.log("error while calling person details api", error);
  }
};
