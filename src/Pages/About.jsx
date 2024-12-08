import React from "react";
import "./About.css";
import sklogo from "../Assets/home-img.jpg";
import { Grid } from "@mui/material";
import Card from "../Components/Card";
import Like from "../Assets/like.png";
import Gift from "../Assets/gift.png";
import Bar from "../Assets/bar.png";
import Idea from "../Assets/idea.png";
import Passion from "../Assets/passion.png";

function About() {
  const Aboutcard = [
    {
      title: "Solution-Oriented Thinker",
      content:
        "I have a knack for swiftly identifying issues and devising effective solutions, constantly striving to exceed expectations and achieve excellence.",
      image: Like,
    },
    {
      title: "My Passion for Coding",
      content:
        "I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.",
      image: Passion,
    },
    {
      title: "Relentless Self-Improvement",
      content:
        "I continuously strive for self-improvement, independently enhancing my skills each day to surpass expectations and achieve excellence.",
      image: Bar,
    },
    {
      title: "Future Vision and Mission",
      content:
        "I aspire to join a prestigious company not for the salary, but to challenge myself and enhance my knowledge",
      image: Idea,
    },
    {
      title: "Skills in Leadership and Oversight",
      content:
        "I excel in managing students and effectively supervising individuals, ensuring a positive and productive environment.",
      image: Gift,
    },
  ];

  return (
    <div style={{ height: "auto" }} id="About">
      <div className="About" id="About">
        <h1>
          WHY <span>CHOOSE</span> ME
        </h1>
        <div className="aboutimage">
          <img src={sklogo} alt="" />
          <p>________</p>
          <h5>"A forward-thinking developer known for my logical mindset,
              problem-solving prowess, and natural leadership abilities. With a
              calm demeanor and a knack for clear communication, I excel at
              navigating complex challenges and driving projects to success"</h5>
        </div>
        <Grid container spacing={1} className="card">
          {Aboutcard.map((card, index) => (
            <Grid item xs={13} sm={6} md={4} lg={3} key={index}>
              <Card
                title={card.title}
                content={card.content}
                image={card.image}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="line1"></div>
    </div>
  );
}

export default About;
