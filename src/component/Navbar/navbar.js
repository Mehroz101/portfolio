import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/navlogo.jpg";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showmenu,setshowmenu] = useState(true)
  return (
    <>
    <div className="navbar">
    <nav>
        <img src={logo} alt="logo" className="logo" />
        <div className="navItems" id="navitems" style={{display: showmenu?'flex':'none'}}>
          
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowmenu(!showmenu)} className="navItem">Home</Link>
        <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setshowmenu(!showmenu)} className="navItem">Skill</Link>
        <Link  activeClass="active" to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setshowmenu(!showmenu)} className="navItem">Portfolio</Link>
        <Link  activeClass="active" to="language" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setshowmenu(!showmenu)} className="navItem">About</Link>
        </div>
        <button className="navBtn" onClick={()=>{
          document.getElementById("contact").scrollIntoView({behavior:'smooth'})
        }}>Contact me</button>
        <i class="fa-solid fa-bars" onClick={()=>setshowmenu(!showmenu)}></i>
      </nav>
    </div>
     
    </>
  );
};

export default Navbar;
