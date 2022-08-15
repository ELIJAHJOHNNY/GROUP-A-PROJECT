import React from 'react';
import '../styles/Nav.css';
import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const Navs = () => {
  return (
    <section className='container'>
      <div className="logo">
        <img id='image1' src={logo} alt="NETFLIX" />
      </div>
      <div className="navlinks">
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New &#38; Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
        <ul>
            <li><FontAwesomeIcon icon={faSearch}/></li>
            <li>Kids</li>
            <li><FontAwesomeIcon icon={faBell}/></li>
            <li><FontAwesomeIcon icon={faUser}/></li>
        </ul>
      </div>
    </section>
  )
}

export default Navs
