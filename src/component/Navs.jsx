import React, { useState } from "react";
import "../styles/Nav.css";
import navlogo from "../images/navlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleHamburgerToggle } from "../reduxSlice/hamburgerSlice";
import Sidebar from "./Sidebar";

const Navs = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [movies, setMovies] = useState([]);
  // const fetchMovies = () => {
  //   axios.get(fetchUrl).then(response => {
  //     setMovies(response.data.results);
  //   });
  // };
  // const searchHandler = value => {
  // const searchResult = {movies.filter()}
  //   console.log(searchInput);
  // };
  const logOut = () => {
    if (window.confirm("Logout?")) {
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <>
      <section className="nav-container">
        <div className="nav-logo">
          {/* <span>Me</span> */}
          <Link to="/Home">
            <img id="img" src={navlogo} alt="NETFLIX" />
          </Link>
          <p
            onMouseOver={() => dispatch(handleHamburgerToggle())}
            onClick={() => dispatch(handleHamburgerToggle())}
          >
            Browse
            <FontAwesomeIcon id="chevron" icon={faChevronDown} />
          </p>
        </div>
        <div className="navlinks">
          <ul className="nav1">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/TVshows">TV Shows</Link>
            </li>
            <li>
              <Link to="/AllMovies">Movies</Link>
            </li>
            {/* <li><Link to='/MoviePage'>Movies</Link></li> */}
            <li>
              <Link to="/News">New &#38; Popular</Link>
            </li>
            <li>
              <Link to="/MyList">My List</Link>
            </li>
            <li>
              <Link to="/Languages">Browse by Languages</Link>
            </li>
          </ul>
          <ul className="nav2">
            <li className="cursor-pointer">
              {/* <input
                type="text"
                placeholder="Search movies"
                className="bg-white text-black"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              /> */}
              <FontAwesomeIcon
                id="search-icon"
                icon={faSearch}
                // onClick={searchHandler}
              />
            </li>
            <li>
              <Link to="/Kids">Kids</Link>
            </li>
            <li>
              <Link to="/Notifications">
                <FontAwesomeIcon id="notify" icon={faBell} />
              </Link>
            </li>
            <li className="cursor-pointer" onClick={logOut}>
              <FontAwesomeIcon id="user" icon={faUser} />
            </li>
            {/* <li><Link to='/User'><FontAwesomeIcon id='user' icon={faUser}/></Link></li> */}
          </ul>
        </div>
      </section>
      <Sidebar />
    </>
  );
};

export default Navs;
