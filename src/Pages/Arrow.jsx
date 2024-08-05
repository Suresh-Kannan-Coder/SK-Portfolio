import React, { useState } from "react";
import "../App.css";
import Home from "./Home";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Arrow() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleClick = () => {
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Home />;
  }

  return (
    <div className="start">
      <h1>Hello <span>Welcome</span> All</h1>
      <div className="arrowbox" onClick={handleClick}>
        <div className="arrow">&#11015;</div>
      </div>
      <h2 onClick={handleClick}>Click Me <TouchAppIcon className="click-icon" style={{ fontSize: 40 }}/></h2>
    </div>
  );
}

export default Arrow;
