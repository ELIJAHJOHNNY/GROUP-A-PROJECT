import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
// import Navs from "./Navs";

const MoviePage = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=105719de0ffa4a3d2bc64b5b9612472f&language=en-US')
  //   // fetch(fetchUrl)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.results)
  //     setMovies(data.results)
  //   })
  // })
  useEffect(() => {
    //   axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=105719de0ffa4a3d2bc64b5b9612472f&language=en-US')
    //   // axios.get(fetchUrl)
    //   .then((res) => {
    //     console.log(res.data.results)
    //     // setMovies(res.data.results)
    //   })

    axios.get(fetchUrl).then(response => {
      setMovies(response.data.results);
    });
  });
  console.log(movies);

  const prevSlide = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const nextSlide = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      {/* {
        movies.map((movie) => (
          <p>{movie.title}</p>
        ))
      } */}
      {/* <Navs/> */}
      <h2 className="text-white pl-5 mt-[15px] pb-1 font-bold sm:text-[14px] lg:text-[16px] xl:text-[18px] sm:pt-[1px] ">
        {title}
      </h2>
      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={prevSlide}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          color="black"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={nextSlide}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer right-0 hidden group-hover:block"
          size={40}
          color="black"
        />
      </div>
    </div>
  );
};

export default MoviePage;
