import React from 'react';
import '../styles/Nav.css';
import navlogo from '../images/navlogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleHamburgerToggle } from '../reduxSlice/hamburgerSlice'
import Sidebar from './Sidebar';

const Navs = () => {
  const dispatch = useDispatch();
  

  return (
    <>
    <section className='nav-container'>
      <div className="nav-logo">
        {/* <span>Me</span> */}
        <Link to='/Home'><img id='img' src={navlogo} alt="NETFLIX"/></Link>
        <p onMouseOver={() => dispatch(handleHamburgerToggle())} onClick={() => dispatch(handleHamburgerToggle())}>
          Browse 
        <FontAwesomeIcon id='chevron' icon={faChevronDown}/></p>
      </div>
      <div className="navlinks">
        <ul className='nav1'>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/TVshows'>TV Shows</Link></li>
            <li><Link to='/MoviePage'>Movies</Link></li>
            <li><Link to='/News'>New &#38; Popular</Link></li>
            <li><Link to='/MyList'>My List</Link></li>
            <li><Link to='/Languages'>Browse by Languages</Link></li>
        </ul>
        <ul className='nav2'>
            <li><FontAwesomeIcon id='search-icon' icon={faSearch}/></li>
            <li><Link to='/Kids'>Kids</Link></li>
            <li><Link to='/Notifications'><FontAwesomeIcon id='notify' icon={faBell}/></Link></li>
            <li><Link to='/User'><FontAwesomeIcon id='user' icon={faUser}/></Link></li>
        </ul>
      </div>
    </section>
    <Sidebar/>
    </>
  )
}

export default Navs
