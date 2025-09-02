import React, { useState } from "react";
import "../assets/css/Home.css";
import logo from "../assets/orion.png";
import { useNavigate } from "react-router-dom";
import { CardCarousel } from "../components/ui/card-carousel";
function BasicExample() {
  const images = [
    { src: "https://picsum.photos/id/1015/600/400", alt: "Mountain Landscape" },
    { src: "https://picsum.photos/id/1025/600/400", alt: "Cute Dog" },
    { src: "https://picsum.photos/id/1035/600/400", alt: "Forest Path" },
    { src: "https://picsum.photos/id/1043/600/400", alt: "Beach Sunset" },
    { src: "https://picsum.photos/id/1050/600/400", alt: "Snowy Mountains" },
  ]

  return (
    <div className="pt-40">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}

export default function Home() {
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
            style={{backgroundColor:"#fb8500",color:"black"}}
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
          style={{backgroundColor:"#fb8500",color:"black"}}
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
        />
        <input
          type="button"
          value="Contact Us"
          className="nav_button"
          onClick={() => handleClick("Contact Us")}
        />
      </div>
       <BasicExample/>
    </div>
  );
}
