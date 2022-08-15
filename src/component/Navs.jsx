import React from 'react';
import '../styles/Nav.css';
import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navs = () => {
  return (
    <section className='container'>
      <div className="logo">
        <Link to='/'><img id='image1' src={logo} alt="NETFLIX" /></Link>
      </div>
      <div className="navlinks">
        <ul className='nav1'>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/TVshows'>TV Shows</Link></li>
            <li><Link to='/Movies'>Movies</Link></li>
            <li><Link to='/New'>New &#38; Popular</Link></li>
            <li><Link to='/List'>My List</Link></li>
            <li><Link to='/Languages'>Browse by Languages</Link></li>
        </ul>
        <ul className='nav2'>
            <li><FontAwesomeIcon icon={faSearch}/></li>
            <li><Link to='Kids'>Kids</Link></li>
            <li><Link to='Notification'><FontAwesomeIcon icon={faBell}/></Link></li>
            <li><Link to='User'><FontAwesomeIcon icon={faUser}/></Link></li>
        </ul>
      </div>
    </section>
  )
}

export default Navs
