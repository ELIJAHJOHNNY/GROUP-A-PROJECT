import React from "react";
// import Homepage from "../component/Homepage";
import MoviePage from "../component/MoviePage";
import requests from "../Requests";

const UserPage = () => {
  return (
    <div>
      {/* <Homepage /> */}
      <MoviePage
        rowId="1"
        title="Top Rated"
        fetchUrl={requests.requestTopRated}
        // fetchUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=105719de0ffa4a3d2bc64b5b9612472f&language=en-US'
      />
      <MoviePage
        rowId="2"
        title="Upcoming"
        fetchUrl={requests.requestUpcoming}
      />
      <MoviePage rowId="3" title="Popular" fetchUrl={requests.requestPopular} />
    </div>
  );
};

export default UserPage;
