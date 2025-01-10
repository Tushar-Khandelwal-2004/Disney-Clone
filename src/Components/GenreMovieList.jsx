import GenresList from '../Constant/GenreList'
import MovieList from './MovieList';
function GenreMovieList(){
    return(
        <div>
            {GenresList.genere.map((item,index)=>index<=4 && (
                <div className='px-8 py-8 md:px-16'>
                    <h2 className='text-white text-[20px] font-bold'>{item.name}</h2>
                    <MovieList genreId={item.id}/>
                </div>
            ))}
        </div>
    )
}
export default GenreMovieList;