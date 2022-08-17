import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <ul className='nav1'>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/TVshows'>TV Shows</Link></li>
            <li><Link to='/Movies'>Movies</Link></li>
            <li><Link to='/New'>New &#38; Popular</Link></li>
            <li><Link to='/List'>My List</Link></li>
            <li><Link to='/Languages'>Browse by Languages</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar