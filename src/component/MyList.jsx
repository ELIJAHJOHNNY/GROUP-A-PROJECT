import React from 'react';
import Navs from './Navs';
import UserPage from '../pages/UserPage';

const MyList = () => {
  return (
    <div>
      <Navs/>
        <h1>My Favs</h1>
        <UserPage/>
    </div>
  )
}

export default MyList