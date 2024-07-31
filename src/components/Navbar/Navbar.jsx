import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../Navbar/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="background" />
      <a href="http://wa.me/+917845025709" className="whatsapp">
        <i className="fa-brands fa-whatsapp fa-fade fa-xl" />
      </a>
      {/* nav  */}
      <nav>
        <div className="nav-logo">
          <img src='/logo.png' width="50px" alt="" />
          <span>SANA INDUSTRIES</span>
        </div>
        <div className={`nav-details ${isOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleMenu}>X</button>
          <div>
            <Link
              to="homepage"
              smooth={true}
              duration={100}
              offset={-70} // Adjust offset to account for fixed navbar height
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="aboutpage"
              smooth={true}
              duration={100}
              offset={-70}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="productpage"
              smooth={true}
              duration={100}
              offset={-70}
            >
              Product
            </Link>
          </div>
          <div className="contact">
            <Link
              to="contactpage"
              smooth={true}
              duration={100}
              offset={-70}
              className="btn btn-outline-warning btn-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="nav-icons">
          <div>
            <a href="https://maps.app.goo.gl/7xVARwt2TiH7cwTC9" target='_blank' rel='noopener noreferrer'><i className="fa-solid fa-location-dot fa-md"/></a>
          </div>
          <div>
            <a href="mailto:sanaindustries2k19@gmail.com" target='_blank' rel='noopener noreferrer'><i className="fa-solid fa-envelope fa-md"/></a>
          </div>
          <div>
            <a href="https://www.instagram.com/sana.industries?igsh=MTU4N2cyOGk1c3ZyNQ%3D%3D&utm_source=qr" target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-instagram fa-md"/></a>
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
