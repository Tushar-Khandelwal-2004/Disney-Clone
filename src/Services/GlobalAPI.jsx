import axios from "axios";
const movieBaseUrl = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/movie/day?api_key="+api_key);
const getMovieByGenreId=(id)=>axios.get(movieBaseUrl+"&with_genres="+id);
export default{
    getTrendingVideos,
    getMovieByGenreId
}