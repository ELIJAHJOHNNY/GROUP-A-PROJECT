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
        className="z-50"
      />
      <MoviePage
        rowId="2"
        title="Upcoming"
        fetchUrl={requests.requestUpcoming}
      />
      <MoviePage 
        rowId="3" 
        title="Popular" 
        fetchUrl={requests.requestPopular} 
      />
    </div>
  );
};

export default UserPage;
