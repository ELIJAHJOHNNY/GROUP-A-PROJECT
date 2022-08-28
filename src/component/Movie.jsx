import React from "react";

const Movie = ({ item }) => {
  return (
    <div className="transform transition-all hover:scale-125 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer left-0 relative p-2">
      <img
        className="w-full h-auto block rounded-md"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
