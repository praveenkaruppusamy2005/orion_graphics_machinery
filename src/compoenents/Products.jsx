import React, { useState } from "react";
import "../assets/css/Home.css";
import logo from "../assets/orion.png";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("Home");
    const navigate=useNavigate();
  const handleClick = (label) => {
    if(label==="Home"){
      navigate("/");
    }
    else if(label==="About Us"){
      navigate("/about");
    }
    else if(label==="Our Product Range"){
      navigate("/products");
    }
    else if(label==="Contact Us"){
      navigate("/contact");
    }
  };

  return (
    <div className="app_container">
      <div className="header">
        <img src={logo} alt="Orion Logo" className="logo" />
        <span className="title">
          <span style={{ color: "#fb8500" }}>O</span>rion Graphic Machinery
        </span>
        <div
          className="hamburger"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          &#9776;
        </div>

        <div className="nav_desktop">
          <input
            type="button"
            value="Home"
            className="nav_button"
            onClick={() => handleClick("Home")}
            
          />
          <input
            type="button"
            value="About Us"
            className="nav_button"
            onClick={() => handleClick("About Us")}
            
          />
          <input
            type="button"
            value="Our Product Range"
            className="nav_button"
            onClick={() => handleClick("Our Product Range")}
            style={{backgroundColor:"#fb8500",color:"black"}}
          />
          <input
            type="button"
            value="Contact Us"
            className="nav_button"
            onClick={() => handleClick("Contact Us")}
          />
        </div>
      </div>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="close_btn" onClick={() => setSidebarOpen(false)}>
          &times;
        </div>
        <input
          type="button"
          value="Home"
          className="nav_button"
          onClick={() => handleClick("Home")}
        />
        <input
          type="button"
          value="About Us"
          className="nav_button"
          onClick={() => handleClick("About Us")}
         
        />
        <input
          type="button"
          value="Our Product Range"
          className="nav_button"
          onClick={() => handleClick("Our Product Range")}
          style={{backgroundColor:"#fb8500",color:"black"}}
        />
        <input
          type="button"
          value="Contact Us"
          className="nav_button"
          onClick={() => handleClick("Contact Us")}
        />
      </div>
    </div>
  );
}
