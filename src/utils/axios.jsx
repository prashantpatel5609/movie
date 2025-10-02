import axios from 'axios'

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMThhYmU4OTU5M2FiNDRmNDM2MWNlYTdjMDcxMTViYiIsIm5iZiI6MTc1ODczOTYyMy4xNjksInN1YiI6IjY4ZDQzY2E3NDZiNTNjODc1MzFmOGVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TaukjJxOrkb_i_kobmuVTnUVan2qKJMme6gmN8vNiyk'
  },

})

export default instance;