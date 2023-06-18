import React, { useState } from "react";
import { Link, scroller } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleClick = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: -50,
    });
    setCollapsed(!collapsed); // Toggle the value of collapsed
  };

  return (
    <nav className="px-0 navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container-xxl flex-wrap flex-md-nowrap">
        <button
          className={`navbar-toggler ${
            collapsed ? "collapsed" : ""
          } d-flex d-lg-none flex-column justify-content-around`}
          type="button"
          onClick={() => setCollapsed(!collapsed)} // Toggle the value of collapsed on click
          aria-controls="navbarNav"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            collapsed ? "" : "show"
          } justify-content-between`}
          id="navbarNav"
        >
          <ul className={`navbar-nav ${collapsed ? "" : "d-none"}`}>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="dataTables"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setCollapsed(true)} // Collapse the navbar on link click
              >
                Data Tables
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="commentary"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setCollapsed(true)} // Collapse the navbar on link click
              >
                Commentary
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="chart"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setCollapsed(true)} // Collapse the navbar on link click
              >
                Chart
              </Link>
            </li>
          </ul>
        </div>

        <div className={`sidebar ${collapsed ? "" : "show"}`}>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setCollapsed(!collapsed)} // Toggle the value of collapsed on click
            aria-controls="navbarNav"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>

          <ul className="nav flex-column mt-3">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="dataTables"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setCollapsed(true)} // Collapse the navbar on link click
              >
                Data Tables
              </Link>
            </li>
            <li className="nav-item mt-3">
              <Link
                className="nav-link"
                activeClass="active"
                to="commentary"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setCollapsed(true)} // Collapse the navbar on link click
              >
                Commentary
              </Link>
            </li>
            <li className="nav-item mt-3">
              <Link
                className="nav-link"
                activeClass="active"
                to="chart"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setCollapsed(true)} // Collapse the navbar on link click
              >
                Chart
              </Link>
            </li>
          </ul>
        </div>

        <div className="logo">
          <a className="navbar-brand" href="#">
            <img className="custom-image" src="" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
