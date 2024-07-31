

import React, { useState } from "react";
import "./Styles.css"; // Import your CSS file here if needed
import PopupForm from "../Order-Form/OrderForm"; // Import the PopupForm component
import { Link } from "react-router-dom";

const SatinColors = () => {
  // Data for Glossy Colors
  const colors = [
    { color: "#000000", name: "RAL 9005 S/G", code: "HBKS-019" },
    { color: "#F5F5F5", name: "IVORY SATIN", code: "HivS-014" },
    { color: "#6B8EAD", name: "ULTRA BLUE SATIN", code: "HBIS-003" },
    { color: "#8B5A2B", name: "BROWN SATIN", code: "HBr5-002" },
    { color: "#313131", name: "BLACK SATIN", code: "HBKS-012" },
    { color: "#A67E55", name: "BCB SATIN", code: "HBrS-008" },
    { color: "#6B8EAD", name: "ULTRA BLUE SATIN", code: "HBIS-003" },
    { color: "#8B5A2B", name: "UNI BROWN SATIN", code: "HBrS-018" },
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
        <h1>SATIN</h1>
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
        <div className="bg">
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

export default SatinColors;

