import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [data, setData] = useState();
  function handle(e) {
    setData(e.target.value);
    console.log(data);
  }
  const toggleTheme = () => {
    props.setTheme(!props.theme);
  };
  return (
    //   <div>Hello this is New line...</div>;
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/"> */}
        <Link to={"/"} className="navbar-brand" style={{ margin: "0px 8px" }}>
          <img src={props.logoUrl} style={{ width: "35px" }} alt="ReactApp" />
          {/* {props.title} */}
        </Link>
        {/* </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" to={"/"}>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/"> */}
                Homes
                {/* </a> */}
              </li>
            </Link>
            <Link to={"about"} className="nav-link active">
              <li className="nav-item">
                {/* <a className="nav-link" href="/"> */}
                {props.about}
                {/* </a> */}
              </li>
            </Link>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handle}
              value={data}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
            {/* Setting the theme to the dark mode or the light mode.. */}
            <div
              className="form-check form-switch"
              style={{ margin: "10px 10px", color: "white" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onChange={toggleTheme}
              />
              Theme
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

//Below code is used to define the type of the props to validate the data..
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

//Here we are defining the default props..
Navbar.defaultProps = {
  title: "ReactApps",
  about: "About",
};
