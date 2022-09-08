import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  // useEffect(() => {
  //   fetch(requests.requestPopular)
  //   // fetch('https://api.themoviedb.org/3/movie/popular?api_key=105719de0ffa4a3d2bc64b5b9612472f&language=en-US')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // console.log(data.results)
  //     setMovies(data.results)
  //   })
  // })
  
  useEffect(() => {
    axios.get(requests.requestPopular).then(response => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  return (
    <div className="w-full h-[100vh] text-white">
      {/* <p className="bg-red">me</p> */}
    {/* <div className="w-full h-[650px] text-white"> */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-[650px] bg-gradient-to-r from-black absolute"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute mt-[60px]">
          <div className="text-center">
            <h2 className="text-5xl font-bold">Unlimited movies, TV</h2>
            <h2 className="text-5xl font-bold">shows, and more.</h2>
            <h3 className="text-3xl font-semibold my-4">
              Watch anywhere. Cancel anytime.
            </h3>
            <p className=" font-semibold my-2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="my-3 flex items-center">
              <input
                className="w-[75%] h-[55px] pl-4 bg-white"
                placeholder="Email Address"
                required
              />
              <button className="bg-red-600 px-6 py-1 cursor-pointer text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
