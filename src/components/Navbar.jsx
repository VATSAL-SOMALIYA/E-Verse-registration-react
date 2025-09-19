import React from "react";
import "./Navbar.css";
import logo from "../assets/concours-logo.png";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt="Concours Logo" />
          <span>Concours'25</span>
        </div>

        <h2 className="heading">E-Verse 25: The Ultimate E-Sports Arena</h2>

        <div className="btnwrapper">
          {/* Rule-book: Direct download */}
          <a
            className="btn"
            href="https://drive.google.com/uc?export=download&id=1vnAgZ3gkTA0OZxw4arW_eD8-IoLBSMcU"
            download
          >
            Rule-book
          </a>

          {/* Contact: Hover popup */}
          <div className="btn-hover-wrapper">
            <button className="btn">Contact</button>
            <div className="hover-box contact-box">
              <p>Vatsal Somaliya: 9016764959</p>
              <p>Shivam Ramoliya: 7984406542</p>
              <p>Mail: daiictconcours@gmail.com</p>
            </div>
          </div>

          {/* About: Hover popup */}
          <div className="btn-hover-wrapper">
            <button className="btn">About</button>
            <div className="hover-box about-box">
              <p>🎮 Concours Presents E-VERSE! 🚀</p>
              <p>
                For the first time ever, DAIICT brings you its official Esports
                Tournament!
              </p>
              <p>
                Titles: Valorant | BGMI | Free Fire | CODM | EA FC | Clash
                Royale …and more
              </p>
              <p>📅 Dates: 6, 7, 8, 9 November</p>
              <p>📍 Venue: DAIICT Gandhinagar / Remote Participation</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
