import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeSidebar } from '../reduxSlice/hamburgerSlice';
import '../styles/Sidebar.css'

const Sidebar = () => {
  const dispatch = useDispatch();
  const {isHamActive} = useSelector((state) => state.hamburger);

  function removeNav(){
    dispatch(removeSidebar())
  }

  window.addEventListener('resize', removeNav);
  window.addEventListener('scroll', removeNav);

  return (
    <div className='sidebar-container'>
      <ul onClick={removeNav} onMouseLeave={removeNav} className={`nav1 ${isHamActive ? "show-nav1" : ""}`}>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/TVshows'>TV Shows</Link></li>
          <li><Link to='/MoviePage'>Movies</Link></li>
          <li><Link to='/News'>New &#38; Popular</Link></li>
          <li><Link to='/MyList'>My List</Link></li>
          <li><Link to='/Languages'>Browse by Languages</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar