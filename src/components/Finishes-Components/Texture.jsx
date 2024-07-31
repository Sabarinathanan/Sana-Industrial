import React, { useState } from "react";
import "./Styles.css"; // Import your CSS file here if needed
import PopupForm from "../Order-Form/OrderForm"; // Import the PopupForm component
import { Link } from "react-router-dom";

const TextureColors = () => {
  // Data for Glossy Colors
  const colors = [
    { color: "#FFFFFF", name: "WHITE TEXTURE" },
    { color: "#F5F5DC", name: "IVORY TEXTURE" },
    { color: "#B0C4DE", name: "LIGHT COOL GREY TEXTURE" },
    { color: "#808080", name: "GREY TEXTURE" },
    { color: "#696969", name: "MUNSHELL GREY TEXTURE" },
    { color: "#A9A9A9", name: "DA GREY TEXTURE" },
    { color: "#B5B8B1", name: "RAL 7035 TEXTURE" },
    { color: "#6C7B8B", name: "SIEMENS GREY TEXTURE" },
    { color: "#4E5754", name: "ANTHRACITE GREY TEXTURE" },
    { color: "#4169E1", name: "ULTRA BLUE TEXTURE" },
    { color: "#00008B", name: "DEEP BLUE TEXTURE" },
    { color: "#808080", name: "GRAPHITE GREY TEXTURE" },
    { color: "#FF0000", name: "RED TEXTURE" },
    { color: "#1C1C1C", name: "BLACK TEXTURE FINE" },
    { color: "#000000", name: "RAL 9005 TEXTURE" }
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
        <h1>TEXTURE</h1>
      </header>

      <section className="filters">
      <div>
          <Link to="/"><i class="fa-solid fa-house"></i><span>Home</span></Link>
        </div>
        <div className="materials">
        <div>
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
        <div className="bg">
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

export default TextureColors;

