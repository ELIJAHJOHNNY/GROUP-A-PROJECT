import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Requests";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoviePage from "./MoviePage";
import Navs from "./Navs";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestUpcoming).then(response => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  const trucateOverview = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  return (
    <div className="w-full h-[90vh]  text-white">
      <Navs />
      {/* <div className="w-full lg:h-[550px] sm:h-[300px] md:h-[400px]  text-white"> */}
      <div className="w-full h-full">
        <div className="w-full lg:h-full md:h-[400px] sm:h-[300px] bg-gradient-to-r from-black absolute"></div>
        <img
          className="w-full h-[100vh]  object-cover"
          // className="w-full h-full  object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute xs:top-[8%] xs:w-[60%] left-[2%] sm:top-[15%] md:top-[20%] lg:top-[35%] xl:top-[30%]">
          <h3 className="font-perm text-[15px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[55px] pb-5">
            {movie?.title}
          </h3>
          <p className=" font-sans font-medium xs:text-[5px] sm:text-[8px] md:text-[9px] lg:text-[12px] xl:text-[15px] md:max-wid-[70%] lg:max-wid-[50%] xl:max-wid-[35%]">
            {trucateOverview(movie?.overview, 200)}
          </p>
          <Button
            color="primary"
            variant="contained"
            startIcon={<PlayArrowIcon />}
            sx={{
              mt: {
                xs: "10px",
                lg: "30px",
              },
              textTransform: "none",
              fontSize: {
                xs: "8px",
                sm: "12px",
                md: "14px",
                lg: "16px",
              },
              fontWeight: "bold",
              pl: {
                xs: "1px",
                sm: "22px",
              },
              pr: {
                xs: "1px",
                sm: "22px",
              },
              height: {
                xs: "20px",
                sm: "30px",
                md: "35px",
                lg: "40px",
              },
            }}
          >
            Play
          </Button>
          <Button
            color="secondary"
            variant="contained"
            startIcon={<InfoOutlinedIcon sx={{ fontSize: "5px" }} />}
            sx={{
              textTransform: "none",
              mt: {
                xs: "10px",
                lg: "30px",
              },
              pl: {
                xs: "5px",
                sm: "22px",
              },
              pr: {
                xs: "5px",
                sm: "22px",
              },
              fontWeight: "bold",
              fontSize: {
                xs: "8px",
                sm: "12px",
                md: "14px",
                lg: "16px",
              },
              marginLeft: "10px",
              height: {
                xs: "20px",
                sm: "30px",
                md: "35px",
                lg: "40px",
              },
            }}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
