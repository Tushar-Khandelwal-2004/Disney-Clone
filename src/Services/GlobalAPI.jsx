import axios from "axios";
const movieBaseUrl = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;
//https://api.themoviedb.org/3/trending/movie/day?api_key=23d5f527ab12424acb6b9f4c4dd7f3b4

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/movie/day?api_key="+api_key);
export default{
    getTrendingVideos
}