import React from "react";
import "../styles/Nav.css";
// import 'antd/dist/antd.css';

import { Input } from "antd";
import "antd/es/input/style/index.css";

// antDesign
import navlogo from "../images/navlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleHamburgerToggle } from "../reduxSlice/hamburgerSlice";
import {
  handleSearchToggle,
  removeSearchField,
} from "../reduxSlice/searchSlice";
import Sidebar from "./Sidebar";

const Navs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSearchActive } = useSelector(state => state.search);

  // antdesign
  const { Search } = Input;
  const onSearch = () => {
    // const navMovies = movies;
    // navMovies.filter((movie) => movie.includes(value) )
    // console.log(value)
    // setMovies(
    //   dummyData.filter((item) => item.includes(value))
    //   dummyData.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    // )
    console.log("Welcome");
  };

  //remove search field when window is resized
  // useEffect(() => {
  //   function removeSearch() {
  //     dispatch(removeSearchField())
  //   }
  //   window.addEventListener('resize', removeSearch);
  //   // window.addEventListener('', removeSearch);
  // }, []);

  function removeSearch() {
    dispatch(removeSearchField());
  }
  window.addEventListener("resize", removeSearch);

  //remove search field when window is resized

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
            <li onMouseLeave={removeSearch}>
              <Search
                placeholder="search"
                allowClear
                onChange={e => onSearch(e.target.value)}
                className={` ${isSearchActive ? "show-search-field" : ""}`}
                // onSearch={onSearch}
                style={{ width: 150, display: "none", marginRight: "1rem" }}
              />
            </li>

            {/* <div id="navRight" className='flex'> */}

            <li
              className="cursor-pointer"
              onClick={() => dispatch(handleSearchToggle())}
            >
              <FontAwesomeIcon
                className={`search-icon ${
                  isSearchActive ? "hide-search-icon" : ""
                }`}
                id="search-icon"
                icon={faSearch}
              />
            </li>

            {/* <li><Link to='/Kids'>Kids</Link></li>
                <li><Link to='/Notifications'><FontAwesomeIcon id='notify' icon={faBell}/></Link></li>
                <li className='cursor-pointer' onClick={logOut}><FontAwesomeIcon id='user' icon={faUser}/></li> */}
            <div className={`normal-view ${isSearchActive ? "show" : ""}`}>
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
            </div>
            {/* </div> */}
          </ul>
        </div>
      </section>
      <Sidebar />
    </>
  );
};

export default Navs;
