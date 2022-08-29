import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserPage from '../pages/UserPage';
import Navs from './Navs';
// import requests from '../Requests';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=105719de0ffa4a3d2bc64b5b9612472f&language=en-US';
    
    useEffect(() =>{
        axios.get(URL).then((res) =>{
            setMovies(res.data.results)
        })
      }, [])

  return (
    <div className='allmovies-container'>
        <Navs/>
       <div className='flex items-center justify-around'>
            {
                movies.map((movie) =>(
                    <div key={movie.id}>
                            <img 
                                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                                alt={movie.title}
                                className='w-full h-full'
                            />
                            <p>{movie.title}</p>
                    </div>
                ))
            }
       </div>
       <UserPage/>
    </div>
  )
}

export default AllMovies