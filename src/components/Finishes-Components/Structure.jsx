import React, { useState } from "react";
import "./Styles.css"; // Import your CSS file here if needed
import PopupForm from "../Order-Form/OrderForm"; // Import the PopupForm component
import { Link } from "react-router-dom";

const StructureColors = () => {
  // Data for Glossy Colors
  const colors = [
    { color: "#F6F5EC", name: "IVORY STRUCTURE" },
    { color: "#B9C9D0", name: "RAL 7035 STRUCTURE D" },
    { color: "#E0E2E5", name: "NEW WHITE STRUCTURE" },
    { color: "#F2F2F2", name: "WHITE STRUCTURE" },
    { color: "#757575", name: "SIEMENS GREY STRUCTURE D" },
    { color: "#9B9B9B", name: "MUNSHELL GREY STRUCTURE" },
    { color: "#B9C9D0", name: "RAL 7035 STRUCTURE" },
    { color: "#6B8EAD", name: "ULTRA BLUE STRUCTURE" },
    { color: "#999999", name: "DA GREY STRUCTURE" },
    { color: "#000000", name: "BLACK STRUCTURE MATT" },
    { color: "#0033A0", name: "PEPSI BLUE STRUCTURE" },
    { color: "#000000", name: "BLACK STRUCTURE" },
    { color: "#999999", name: "SIEMENS GREY STRUCTURE" },
    { color: "#001489", name: "VIP BLUE STRUCTURE" },
    { color: "#9E3030", name: "RAL 3020 STRUCTURE" },
    { color: "#FF4500", name: "ORANGE STRUCTURE" },
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
        <h1>STURCTURE</h1>
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
        <div className="bg">
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

export default StructureColors;

