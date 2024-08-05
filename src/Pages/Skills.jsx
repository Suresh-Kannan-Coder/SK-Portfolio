import React, { useState } from "react";
import "./Skills.css";
import css from "../Assets/css-3.png";
import html from "../Assets/html.png";
import html5 from "../Assets/html-5.png";
import js from "../Assets/js.png";
import figma from "../Assets/figma.png";
import git from "../Assets/git.png";
import mysql from "../Assets/mysql.png";
import php from "../Assets/php.png";
import node from "../Assets/node.png";
import reacti from "../Assets/react.png";
import chatgpt from "../Assets/chat-gpt.png";
import xampp from "../Assets/xampp.png";
import certificate from "../Assets/certificate.png";

const data = [
  {
    id: 2,
    title: "HTML",
    image: html,
    backContent: "This is the back content for Card 2",
  },
  {
    id: 3,
    title: "HTML 5",
    image: html5,
    backContent: "This is the back content for Card 3",
  },
  {
    id: 4,
    title: "CSS",
    image: css,
    backContent: "This is the back content for Card 4",
  },
  {
    id: 5,
    title: "Java Script",
    image: js,
    backContent: "This is the back content for Card 5",
  },
  {
    id: 6,
    title: "Git",
    image: git,
    backContent: "This is the back content for Card 6",
  },
  {
    id: 7,
    title: "Figma",
    image: figma,
    backContent: "This is the back content for Card 7",
  },
  {
    id: 8,
    title: "MySql",
    image: mysql,
    backContent: "This is the back content for Card 7",
  },
  {
    id: 9,
    title: "PHP",
    image: php,
    backContent: "This is the back content for Card 7",
  },
  {
    id: 10,
    title: "React",
    image: reacti,
    backContent: "This is the back content for Card 7",
  },
  {
    id: 11,
    title: "Node.js + Express.js",
    image: node,
    backContent: "This is the back content for Card 7",
  },
  {
    id: 12,
    title: "ChatGPT",
    image: chatgpt,
    backContent: "This is the back content for Card 7",
  },
  {
    id: 13,
    title: "Xampp",
    image: xampp,
    backContent: "This is the back content for Card 7",
  },
];

const CardComponent = ({ data }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      id="box"
      className={`Card box box${data.id} ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card-front" title={data.title}>
        <img src={data.image} alt={data.title} />
        <h6>{data.title}</h6>
      </div>
      <div className="card-back">
        <p>{data.backContent}</p>
      </div>
    </div>
  );
};
const cerificatedata = [
  { id: 1, by: "Guvi", for: "Python", image: certificate},
  { id: 2, by: "Guvi", for: "Python", image: certificate},
  { id: 3, by: "Guvi", for: "Python", image: certificate},
  { id: 4, by: "Guvi", for: "Python", image: certificate},
  { id: 5, by: "Guvi", for: "Python", image: certificate},
];
function Resume() {
  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "popup") {
      closePopup();
    }
  };
  return (
    <div id="Skills">
      <h2>
        MY SKI<span>LL</span>S
      </h2>
      <div className="Skills-box">
        <div className="box1">
          <h1>
            I L<span>EARN</span>ED
          </h1>
          <p>
            With a robust skill set in multiple fields of design and
            development, I am the perfect choice for any complex project.
            Whether it's front-end or back-end development, I can handle any
            challenge with proficiency and deliver outstanding results tailored
            to your needs.
          </p>
        </div>
        {data.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>
      <div className="line2"></div>
      <br />
      <br />
      <h2>
        CE<span>R</span>TIFIC<span>ATE</span>S
      </h2>
      <div className="menu">
        {cerificatedata.map((item, index) => (
          <div className="certificate" key={index} onClick={handleIconClick}>
            <h3>CERTIFICATE</h3>
            <div className="detail"><h4>By : {item.by}</h4>
            <h5>For : {item.for}</h5>
            </div>
            <div className="icon" onClick={handleIconClick}>
              &#10530;
            </div>
          </div>
        ))}

        {showPopup && (
          <div className="popup" onClick={handleOutsideClick}>
            <img src={certificate} alt="Popup Image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume;
