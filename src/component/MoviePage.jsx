import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
// import Navs from "./Navs";

const MoviePage = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);
  // const [slide, setSlide] = useState();

  useEffect(() => {
    axios.get(fetchUrl).then(response => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);
  console.log(movies);

  const prevSlide = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const nextSlide = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // const prevSlide = () => {
  //   if (movies.length === 1) {
  //     setSlide(movies.length);
  //   } else if (movies.length > 1) {
  //     setSlide(movies.length - 1);
  //   } else {
  //     setSlide(slide);
  //   }
  // };

  // const nextSlide = () => {
  //   if (movies.length === 1) {
  //     setSlide(movies.length + 1);
  //   } else if (movies.length > 1) {
  //     setSlide(movies.length + 1);
  //   } else {
  //     setSlide(slide);
  //   }
  // };

  return (
    <div>
      {/* <Navs/> */}
      <h2 className="text-white pl-5 mt-[15px] pb-1 font-bold sm:text-[14px] lg:text-[16px] xl:text-[18px] sm:pt-[1px] ">
        {title}
      </h2>
      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={prevSlide}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
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
        />
      </div>
    </div>
  );
};

export default MoviePage;
