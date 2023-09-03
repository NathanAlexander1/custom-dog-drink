import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const logoutFunc = () => {
    props.handleLogout();
    navigate("/");
  };
  return (
    <ul>
      {props.isLoggedIn ? (
        <div className="d-flex justify-content-around">
          <a className="d-flex justify-content-around" href="/">
            <p>Home</p>
          </a>
          <a className="d-flex justify-content-around" href="/dogguesses">
            <p>Your Guesses</p>
          </a>
          <a className="d-flex justify-content-around" href="/uploads">
            <p>Your Uploads</p>
          </a>
          <a className="d-flex justify-content-around" href="/public">
            <p>Public Dogs</p>
          </a>
          <a
            className="d-flex justify-content-around"
            href="/"
            onClick={logoutFunc}
          >
            <p>Logout</p>
          </a>
        </div>
      ) : (
        <div className="d-flex justify-content-around">
          <a className="d-flex justify-content-around" href="/">
            <p>Home</p>
          </a>
          <a className="d-flex justify-content-around" href="/public">
            <p>Public Dogs</p>
          </a>
          <a href="/login">
            <div className="d-flex justify-content-around">
              <p>Login or Signup!</p>
            </div>
          </a>
        </div>
      )}
    </ul>
  );
}

export default Navbar;
