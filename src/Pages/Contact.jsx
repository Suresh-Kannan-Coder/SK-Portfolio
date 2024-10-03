import React, { useState } from "react";
import "./Contact.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import successGif from "../Assets/success.gif"; // Correct path to your GIF

const Contact = () => {
  const [Submit, setSubmit] = useState(true);

  const handleSubmit = () => {
    setSubmit(false);
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <div id="Contact">
        <h1>
          WAY <span>TO</span> CON<span>TACT</span> ME <span>.</span>
        </h1>
        <div className="container">
          <div className="contact-form">
            {Submit ? (
              <>
                <TextField
                  id="outlined-textarea"
                  label={
                    <span className="input-label">
                      Your Name<span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Your Name"
                  size="small"
                  className="input"
                />
                <TextField
                  id="outlined-textarea"
                  label={
                    <span className="input-label">
                      Email Address<span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Email Address"
                  size="small"
                  className="input"
                />
                <TextField
                  id="outlined-textarea"
                  label={<span className="input-label">Phone Number</span>}
                  placeholder="Your Phone Number"
                  size="small"
                  className="input"
                />
                <TextField
                  id="outlined-textarea"
                  label={<span className="input-label">Your Company</span>}
                  placeholder="Your Company"
                  size="small"
                  className="input"
                />
                <TextField
                  id="outlined-textarea"
                  label={
                    <span className="input-label">
                      What Say You?<span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Your Message"
                  type="text"
                  size="small"
                  className="input-text"
                  multiline
                  rows={3}
                />

                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    background: "#00d0ff",
                    textTransform: "none",
                    cursor: "pointer",
                    color: "#333",
                    fontSize: "15px",
                    height: "40px",
                    borderRadius: "8px",
                    width: "90%",
                    margin: "10px auto 0 auto",
                    border: "none",
                    fontWeight: "700",
                    transition: "background 0.3s ease, transform 0.2s ease",

                    "&:hover": {
                      background: "#00d0ff",
                      border: "none",
                    },
                    "&:active": {
                      background: "#009dff",
                    },
                  }}
                  onClick={handleSubmit}
                >
                  BOOM IT & SEND IT.
                </Button>
              </>
            ) : (
              <>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  padding="30px"
                  border="2px solid #00ea87"
                  bgcolor="#00C99B33"
                  borderRadius="20px"
                >
                  <div>
                    <img
                      src={successGif}
                      alt="Success"
                      style={{
                        width: "150px",
                        height: "150px",
                      }}
                    />
                  </div>
                  <h4 style={{color:"#fff",fontSize:"30px"}}>
                    THANK YOU
                  </h4>
                  <Button
                    onClick={handleReload}
                    sx={{
                      background: "#00C99B33",
                      height: "45px",
                      width: "60%",
                      cursor: "pointer",
                      color: "#fff",
                      border: "2px solid #00ea87",
                      borderRadius:"10px",
                      margin:"20px 0 0 0",
                      transition: "background 0.3s ease, transform 0.2s ease",
                      "&:hover": {
                        background: "#00ea87",
                        color:"#000",
                        fontWeight:"bold"
                      },
                      "&:active": {
                        background: "#00ea87",
                      },
                    }}
                  >
                    Continue with me
                  </Button>
                </Box>
              </>
            )}
          </div>

          <div className="right-contact">
            <p>CALL ME ...</p>
            <h2 className="contact-number">+91 90257 63692</h2>

            <p>E-MAIL ...</p>
            <div className="email">
              <h2>sureshkannangeek@gmail.com</h2>
              <h2>sureshkannanwhite@gmail.com</h2>
            </div>

            <p>FOLLOW ME ...</p>
            <h2></h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
