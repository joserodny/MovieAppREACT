import React from 'react'

export default function SearchBox(props) {
  return (
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-7xl text-stone-100 ">
        Welcome.
      </h1>
      <p className="leading-relaxed mt-4 text-stone-100 mb-5">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
      <div className="place-content-center  dw overflow-hidden z-0 rounded-full relative p-3">
        <form role="form" className="relative flex z-50 bg-white rounded-full">
          <input
            value={props.value}
            onChange={(event)=> props.SetSearchValue(event.target.value)}
            type="text"
            placeholder="enter your search here"
            className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
          />
          <button className="bg-red-700 text-white rounded-full font-semibold px-8 py-4 hover:bg-red-400 focus:bg-red-600 focus:outline-none">
            Search
          </button>
        </form>
        <div className="glow glow-1 z-10 bg-red-900 absolute"></div>
        <div className="glow glow-2 z-20 bg-red-700 absolute"></div>
        <div className="glow glow-3 z-30 bg-stone-900 absolute"></div>
        <div className="glow glow-4 z-40 bg-red-600 absolute"></div>
      </div>
    </div>
  );
}
