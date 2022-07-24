import React, {useEffect, useState} from 'react'

import axios from 'axios';
import SearchBox from '../components/SearchBox';
import MovieList from '../components/MovieList';
import YoutubeVideo from '../components/YoutubeVideo';
const backgroundImage = {
  backgroundImage: "url(https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80)"
};

export default function Home() {
     const api_key = import.meta.env.VITE_API_KEY;
     const api_url = import.meta.env.VITE_BASE_URL; 
     const url = `${api_url}/movie/upcoming?api_key=${api_key}&language=en-US`;
     const imageUrl = "https://image.tmdb.org/t/p/original";     

     const [list, SetList] = useState();
     const [searchValue, SetSearchValue] = useState();
     const fetchMovies = async () => {
          axios
          .get(url)
          .then(({data}) => SetList(data.results.slice(0, 4)))
          .catch((err) => console.log(err))
     };
     useEffect(()=> {
          fetchMovies()
     }, [searchValue]);

    
     const renderMovies = () => (
          list && list.map((movie, id)=>  <MovieList list={movie} key={id} />)
      );  
          
  return ( 
    <div>
    <div className="h-screen w-full bg-no-repeat bg-cover bg-fixed" style={backgroundImage}>
          <div className="container px-5 py-24 mx-auto  flex-wrap items-center block md:flex">
               <SearchBox searchValue={searchValue} SetSearchValue={SetSearchValue}/>
               <div className="flex lg:w-2/6 md:w-1/2 rounded-lg p-8 flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <div>
                    <YoutubeVideo videoId="uI7fnrNhKSI" />
                    </div>
               </div>
               
          </div>
    </div>
    <div className="h-[80vh] bg-black flex justify-center">
    <div className="w-10/12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-6 gap-x-8 gap-y-4">
      {renderMovies()}
      </div>
    </div>
  </div>
    
    </div>
  )
}


