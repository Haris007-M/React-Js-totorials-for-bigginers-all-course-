import React from "react";

export default function NavBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" id="navbartop">
        <div className="container-fluid">
          {/* <a className="navbar-brand " href="/">
            {props.label}
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link  mx-3" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
