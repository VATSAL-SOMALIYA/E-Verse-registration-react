import React from "react";
import "./Card.css";
import freefireBR from "@/assets/ff-br.jpg";
import freefireCS from "@/assets/freefire-cs.avif";
import bgmi from "@/assets/bgmi.avif";
import clashRoyale from "@/assets/clashroyale.webp";
import codm from "@/assets/codm.jpg";
import wccRivals from "@/assets/wcc.png";
import valorant from "@/assets/valorant.jpg";
import miniMilitia from "@/assets/mini-militia.jpg";
import eafc from "@/assets/ea-fc.webp";


const gameBackgrounds = { "Free Fire BR": freefireBR,
  "Free Fire CS": freefireCS,
  "BGMI": bgmi,
  "Clash Royale": clashRoyale,
  "CODM": codm,
  "WCC Rivals": wccRivals,
  "Valorant": valorant,
  "Mini Militia": miniMilitia,
  "EA FC Football": eafc };

const Card = ({ game, formLink, coordinatorNumber }) => {
  const imageUrl = gameBackgrounds[game] || "/images/default.jpg";

  return (
    <div className="card">
      {/* Top section: game image */}
      <div className="card-image">
        <img src={imageUrl} alt={game} className="game-image" />
      </div>

      {/* Separate section: game name */}
      <div className="card-name">
        <h3 className="game-name">{game}</h3>
      </div>

      {/* Bottom section: registration button + coordinator */}
      <div className="card-bottom">
        <a
          className="registration-btn"
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Registration Form
        </a>
        <div className="number">Co-ordinator Contact: {coordinatorNumber}</div>
      </div>
    </div>
  );
};

export default Card;
