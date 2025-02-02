const imageBaseUrl=import.meta.env.VITE_IMAGE_BASE_URL;
function MovieCard({ movie }) {

    return(
        <>
            <img src={imageBaseUrl+movie.poster_path} className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer  "  />
        </>
    )
}
export default MovieCard;