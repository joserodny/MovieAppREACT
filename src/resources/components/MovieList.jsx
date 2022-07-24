import React from 'react'

export default function MovieList({list}) {
     const imageUrl = "https://image.tmdb.org/t/p/original";   
  return (
     <div className='xl:-mt-20 mt-20 sm:-mt-50 mb-50'>
     <div
     className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
     data-movie-id="438631"
     >
     <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
     <div
       className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
       data-lity=""
       href="https://www.youtube.com/embed/aSHs224Dge0"
     >
       <div className="poster__info align-self-end w-full">
         <div className="h-32"></div>
         <div className="space-y-6 detail_info">
           <div className="flex flex-col space-y-2 inner">
             <a
               className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
               data-unsp-sanitized="clean"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="w-10 h-10"
                 viewBox="0 0 20 20"
                 fill="currentColor"
               >
                 <path
                   fillRule="evenodd"
                   d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                   clipRule="evenodd"
                 ></path>
               </svg>
               <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                 View
               </div>
             </a>
             <h3
               className="text-2xl font-bold text-white"
               data-unsp-sanitized="clean"
             >
               {list && list.original_title}
             </h3>
     
           </div>
           <div className="flex flex-row justify-between datos">
             <div className="flex flex-col datos_col">
               <div className="popularity">⭐ {list && list.popularity}</div>
               <div className="text-sm text-gray-400">Popularity:</div>
             </div>
             <div className="flex flex-col datos_col">
               <div className="release">{list && list.release_date}</div>
               <div className="text-sm text-gray-400">Release date:</div>
             </div>
           </div>
           <div className="flex flex-col overview">
             <div className="flex flex-col"></div>
             <div className="text-xs text-gray-400 mb-2">Overview:</div>
             <p className="text-xs text-gray-100 mb-6 text-clip overflow-hidden">
             {list && list.overview.slice(0, 150)}
             </p>
           </div>
         </div>
       </div>
     </div>
     <img
     className="absolute inset-0 transform w-full -translate-y-4"
     src={`${imageUrl}/${
       list && list.poster_path
     }`}
     alt={`${list && list.title}`}
     />
     </div>
     </div>
  )
}



