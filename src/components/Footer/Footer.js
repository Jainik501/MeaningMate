import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.google.co.in/" target="__blank">
          Jainik Raval
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.google.co.in/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.google.co.in/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.google.co.in/" target="__blank">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
