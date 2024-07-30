

import React, { useState } from "react";
import "./Styles.css"; // Import your CSS file here if needed
import PopupForm from "../Order-Form/OrderForm"; // Import the PopupForm component
import { Link } from "react-router-dom";

const MattColors = () => {
  // Data for Glossy Colors
  const colors = [
    { color: "#F2F2F2", name: "HAVELLS WHITE MATT" },
    { color: "#F1F1F1", name: "PHILIPS WHITE MATT" },
    { color: "#DCDCDC", name: "WHITE MATT" },
    { color: "#F5F5DC", name: "IVORY MATT" },
    { color: "#8C8C8C", name: "RAL 7035 MATT" },
    { color: "#8B8682", name: "RAL 7032 MATT" },
    { color: "#C0C0C0", name: "MISTY GREY MATT" },
    { color: "#DAA520", name: "GOLDEN YELLOW MATT" },
    { color: "#4B3621", name: "COFFEE BROWN MATT" },
    { color: "#696969", name: "DA GREY MATT" },
    { color: "#9B1C31", name: "SIGNAL RED MATT" },
    { color: "#800000", name: "MAROON MATT" },
    { color: "#8B4513", name: "NUT BROWN MATT" },
    { color: "#5D3B2A", name: "BROWN MATT" },
    { color: "#5C4033", name: "BCB MATT" },
    { color: "#1C1C1C", name: "BLACK MATT F" },
    { color: "#1C1C1C", name: "BLACK DEAD MATT" },
    { color: "#1C1C1C", name: "BLACK MATT SUPER" },
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
        <h1>MATT</h1>
      </header>

      <section className="filters">
      <div>
          <Link to="/"><i class="fa-solid fa-house"></i></Link>
        </div>
        <div className="materials">
        <div>
          <Link to="/Glossy">Glossy</Link>
        </div>
        <div >
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
        <div className="bg">
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

export default MattColors;

