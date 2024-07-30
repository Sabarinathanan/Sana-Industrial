import React, { useState } from "react";
import "./Styles.css"; // Import your CSS file here if needed
import PopupForm from "../Order-Form/OrderForm"; // Import the PopupForm component
import { Link } from "react-router-dom";

const GlossyColors = () => {
  // Data for Glossy Colors
  const colors = [
    { color: "#384551", name: "OXFORD BLUE GLOSSY" },
    { color: "#004E91", name: "PEPSI BLUE GLOSSY" },
    { color: "#E7EBDA", name: "RAL 9002 GLOSSY" },
    { color: "#00008B", name: "DEEP BLUE GLOSSY" },
    { color: "#87CEEB", name: "SKY BLUE GLOSSY" },
    { color: "#F4A460", name: "MID BUFF GLOSSY" },
    { color: "#FFD700", name: "GOLDEN YELLOW GLOSSY" },
    { color: "#FFFF00", name: "LEMON YELLOW GLOSSY" },
    { color: "#808080", name: "STEEL GREY GLOSSY" },
    { color: "#666666", name: "DA GREY GLOSSY" },
    { color: "#D6D7D9", name: "LIGHT GREY GLOSSY" },
    { color: "#808080", name: "SIEMENS GREY GLOSSY" },
    { color: "#DCDCDC", name: "MUNSHELL GREY GLOSSY" },
    { color: "#999999", name: "RAL 7004 GLOSSY" },
    { color: "#7F7F7F", name: "HAVELLS GREY GLOSSY" },
    { color: "#9DA1AA", name: "RAL 7040 GLOSSY" },
    { color: "#D7D7D7", name: "RAL 7035 GLOSSY" },
    { color: "#808080", name: "GREY GLOSSY" },
    { color: "#FDFCF4", name: "NEW IVORY GLOSSY2" },
    { color: "#F4F3ED", name: "PEARL WHITE GLOSSY" },
    { color: "#F6F5EC", name: "IVORY GLOSSY SPL" },
    { color: "#F6F5EC", name: "IVORY GLOSSY" },
    { color: "#FFFFFF", name: "SNOW WHITE GLOSSY" },
    { color: "#FFFFFF", name: "WHITE GLOSSY" },
    { color: "#FFFFFF", name: "SIGNAL WHITE GLOSSY" },
    { color: "#FFFFFF", name: "MILKY WHITE GLOSSY" },
    { color: "#FAFAFA", name: "RAL 9010 GLOSSY" },
    { color: "#FFFFFF", name: "TRAFFIC WHITE GLOSSY" },
    { color: "#F5F5F5", name: "BUCKET WHITE GLOSSY" },
    { color: "#F4F4F4", name: "WHITE GLOSSY SUPER" },
    { color: "#F4F4F4", name: "WHITE GLOSSY" },
    { color: "#F4F4F4", name: "WHITE GLOSSY SUPER" },
    { color: "#F4F4F4", name: "WHITE GLOSSY SUPER" },
    { color: "#008000", name: "PARROT GREEN GLOSSY" },
    { color: "#417E5A", name: "BUS GREEN GLOSSY" },
    { color: "#FFC0CB", name: "PINK GLOSSY" },
    { color: "#DA1884", name: "RUBINE PINK GLOSSY" },
    { color: "#E68FAC", name: "RAL 2008 GLOSSY" },
    { color: "#FFA500", name: "ORANGE GLOSSY" },
    { color: "#FF0000", name: "SIGNAL RED GLOSSY" },
    { color: "#FF2400", name: "PO RED GLOSSY" },
    { color: "#722F37", name: "WINE RED GLOSSY" },
    { color: "#805C3B", name: "BROWN GLOSSY ECO" },
    { color: "#4B3621", name: "COFFEE BROWN GLOSSY" },
    { color: "#8B5A2B", name: "BROWN GLOSSY" },
    { color: "#000000", name: "BLACK GLOSSY SUPER" },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorName, setSelectedColorName] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color.color);
    setSelectedColorName(color.name);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedColor(null);
    setSelectedColorName("");
  };

  return (
    <>
      <div className="background"></div>
      <header>
        <h1>GLOOSY</h1>
      </header>

      <section className="filters">
      <div>
          <Link to="/"><i class="fa-solid fa-house"></i></Link>
        </div>
        <div className="materials">
        <div className="bg">
          <Link to="/Glossy">Glossy</Link>
        </div>
        <div>
          <Link to="/SemiGlossy">Semi-gloss</Link>
        </div>
        <div >
          <Link to="/Satin">Satin</Link>
        </div>
        <div>
          <Link to="/Structure">Structure</Link>
        </div>
        <div>
          <Link to="/Texture">Texture</Link>
        </div>
        <div >
          <Link to="/Matt">Matt</Link>
        </div>
        </div>
      </section>

      <section className="colors">
        {/* Render color cards dynamically */}
        {colors.map((color, index) => (
          <div
            className="color-card"
            key={index}
            onClick={() => handleColorClick(color)}
          >
            <div
              className="img-card"
              style={{ backgroundColor: color.color }}
            ></div>
            <div className="info">
              <h2>{color.name}</h2>
            </div>
          </div>
        ))}
      </section>

      {showPopup && (
        <PopupForm
          selectedColor={selectedColor}
          selectedColorName={selectedColorName}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default GlossyColors;
