// Navbar.js

import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo2 from '../../Assets/whirpool7915.jpg';
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Navbar.css"; // Import the CSS file for styling
// import profilePic from "./profile-pic.png"; 
import logo from '../../Assets/logout.png';
import res from '../../Assets/result.png';
import pas from '../../Assets/passwordlogo.png';
// import home from '../../Assets/Home-icon.png';
import paper from '../../Assets/paper.png';
const Navbar = ({ onLogout }) => {
  
const navigate = useNavigate();

const handleLogout = () => {
  console.log(localStorage.clear());
  navigate('/adminlogin');
}
const toResult = () => {
  
  navigate('/Result');
}
const topass=()=>
{
  navigate('/password');
}
// const toHome=()=>{
//   navigate('/admin');
// }
const toPaper=()=>{
  navigate('/admin');
}
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img  style={{height:"10%",width:"20%",padding:"0px"}} src={logo2} />
      </div>
      <div className="navbar-left"style={{marginLeft:"-90%"}}>
        
        <span><b>Welcome, Admin!</b></span>
      </div>
      <div className="navbar-right">
      {/* <img src={profilePic} alt="Profile" className="profile-pic" /> */}
      <span className="profile-pic">&#128100;</span>
      {/* <button className="icon-button" aria-label="Home" onClick={toHome}>
            <img src={home} />
          </button> */}
          <button className="icon-button" aria-label="Home" onClick={toPaper}>
            <img src={paper} />
          </button>
      <button className="icon-button" aria-label="result" onClick={toResult}>
            <img src={res} />
          </button>
      <button className="icon-button" aria-label="password" onClick={topass}>
          <img src={pas} />
      </button>
      <button className="icon-button" aria-label="Logout" onClick={handleLogout}>
            <img src={logo} />
          </button>
      </div>
    </nav>
  );
};

export default Navbar;