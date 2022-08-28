import React from 'react';
import Navs from './Navs';
import UserPage from '../pages/UserPage';
import '../App.css';

const TVshows = () => {
  return (
    <div>
      <Navs/>
        <h1 className='header-content'>TV Shows</h1>
        <UserPage/>
    </div>
  )
}

export default TVshows