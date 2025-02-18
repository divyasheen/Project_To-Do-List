import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-box">
      <h5 className="FooterPhrase">
        The Coding Cats responsible for creating this project can be found here:
      </h5>
      <div>
        <nav>
          <a href="https://github.com/divyasheen">divyasheen</a>
          <a href="https://github.com/NATZEN24">NATZEN24</a>
          <a href="https://github.com/You-Did-Bowman">You-Did-Bowman</a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
