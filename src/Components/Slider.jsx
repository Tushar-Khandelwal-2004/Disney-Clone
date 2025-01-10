import { useRef } from 'react';
import { useEffect, useState } from 'react';
// import GlobalAPI from '../Services/GlobalAPI';
import GlobalAPI from '../Services/GlobalAPI/';
const imageBaseUrl=import.meta.env.VITE_IMAGE_BASE_URL;
import { HiChevronRight,HiChevronLeft } from 'react-icons/hi2';
const screenWidth=window.innerWidth
function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(() => {
        getTrendingMovie();
    }, []);
    const getTrendingMovie = () => {
        GlobalAPI.getTrendingVideos.then(respone => {
            // console.log(imageBaseUrl);
            // console.log(respone.data.results);
            setMovieList(respone.data.results);
        })
    }
    const sliderLeft=(e)=>{
        e.scrollLeft-=screenWidth-110;
    }
    const sliderRight=(e)=>{
        e.scrollLeft+=screenWidth-110;
    }
    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer right-0' onClick={()=>{sliderRight(elementRef.current)}}/>
        <div ref={elementRef} className=' scroll-smooth flex overflow-x-auto w-full px-16 py-4 scrollbar-none'>
            {movieList.map((item,index)=>(
                <img src={imageBaseUrl+item.backdrop_path} 
                className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
            ))}
        </div>
        </div>
    )
}
export default Slider;