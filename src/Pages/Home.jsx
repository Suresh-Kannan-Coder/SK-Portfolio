import React from "react";
import "./Home.css";
import sklogo from "../Assets/Sk logo.jpg";
import chinaman from "../Assets/chinaman.png";
import Github from "../Assets/github.png";
import Linkedin from "../Assets/linkedin.png";
import Contact from "../Assets/contact-mail.png";
import Hnav from "../Components/Hnav";
import About from "./About";
import Resume from "./Skills";

const Home = () => {
  return (
    <div>
      <div className="main" id="Home">
        <Hnav />
        <section className="contant">
          <div className="name">
            <h1>Hi,I'm Girish Gaikwad</h1>
            <h4>Web Developer</h4>
            <p>
              yo
            </p>
            <div className="social">
            <a href="#Contact" title="Contact"><img src={Contact} className="Contact-logo"></img></a>
            <a href="https://github.com/Suresh-Kannan-8055" title="Github" target="_blank"><img className="Github" src={Github}></img></a>
            <a href="https://www.linkedin.com/in/suresh-kannan-r-v-1222ab2b8/" title="Linked-in" target="_blank"><img className="Linked-in" src={Linkedin}></img></a>
            
          </div>
          </div>
          <div className="photo">
            <img src={chinaman} alt="Suresh Kannan Photo" />
          </div>
          
          </section>
          <div className="line1"></div>
      </div>    
      <About/>
      <Resume/>
    </div>
  );
};

export default Home;
