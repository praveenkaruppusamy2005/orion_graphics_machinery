import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./compoenents/Home";
import About from "./compoenents/About";
import Product from "./compoenents/Products";
import ContactUs from "./compoenents/ContactUs";
export default function App() {
  return(
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
       </Router>
  )
}