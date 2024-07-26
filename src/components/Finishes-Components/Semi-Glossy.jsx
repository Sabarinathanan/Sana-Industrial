import React, { useState } from "react";
import "./Styles.css"; // Import your CSS file here if needed
import PopupForm from "../Order-Form/OrderForm"; // Import the PopupForm component
import { Link } from "react-router-dom";

const SemiGlossyColors = () => {
  // Data for Glossy Colors
  const colors = [
    { color: "#FAFAFA", name: "WHITE S/M", code: "HWHS-007" },
    { color: "#F2EACD", name: "NEW IVORY S/G", code: "HlvS-013" },
    { color: "#9B9B9B", name: "SIEMENS GREY S/G", code: "HGrS-015" },
    { color: "#3B3B3B", name: "RAL 7012 S/G", code: "HGrS-022" },
    { color: "#D9D9D9", name: "ZINC PRIMER", code: "EGrS-006" },
    { color: "#E7E6E0", name: "BROKEN WHITE S/M", code: "HWHS-006" },
    { color: "#000000", name: "RAL 9005 S/G", code: "HBKS-019" },
    { color: "#F5F5F5", name: "IVORY", code: "HivS-014" },
    { color: "#6B8EAD", name: "ULTRA BLUE", code: "HBIS-003" },
    { color: "#8B5A2B", name: "BROWN", code: "HBr5-002" },
    { color: "#313131", name: "BLACK", code: "HBKS-012" },
    { color: "#A67E55", name: "BCB", code: "HBrS-008" },
    { color: "#6B8EAD", name: "ULTRA BLUE", code: "HBIS-003" },
    { color: "#8B5A2B", name: "UNI BROWN", code: "HBrS-018" },
    { color: "#FFD700", name: "YELLOW S/G", code: "HYWS-003" },
    { color: "#FFA500", name: "FLAME ORANGE S/G", code: "HRdS-006" },
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
        <h1>SEMI-GLOOSY</h1>
      </header>

      <section className="filters">
        <div>
          <Link to="/Glossy">Glossy</Link>
        </div>
        <div  className="bg">
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

export default SemiGlossyColors;

