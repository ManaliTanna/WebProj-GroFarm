import React from "react";
import Navbar from "./navbar.component";
import "../../src/App.css";
import "../../src/index.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <div className="about__us">
        <h1>About Us</h1>
        <p className="my-1">
        GroFarm connects the right people everyday. We bridge the gap between farmers and society through our platform. Farmers can sell to the end-customer directly with the click of a button. Our mission is to eliminate the middleman and provide a efficient fast and profitable platform for  farmers on a daily basis. The customer will be able to cut down his expenses by buying directly from farmers.
        <br></br><br></br>
        This Web Application was developed using MERN Stack by Maria, Milinda and Manali. 
        </p>
        <p className="bg-dark p">
          <strong>Version: </strong> 1.0.0
        </p>
      </div>
    </div>
  );
};

export default AboutUs;