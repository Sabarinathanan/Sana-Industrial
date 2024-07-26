import React, { useState, useEffect } from 'react';
import './Finishes.css'; // Ensure this CSS file contains the styles
import { Link } from 'react-router-dom';

const Finishes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsArray = [
        {
            href: "/Glossy",
            imgSrc: "https://img.diytrade.com/smimg/2911448/48150468-10167412-0/high_glossy_red_color_powder_coating_/49d3.jpg",
            alt: "Full gloss",
            text: "Full gloss"
        },
        {
            href: "/Semiglossy",
            imgSrc: "https://image.made-in-china.com/2f0j00ghiYCQEtmaoZ/Coat-Furniture-Satin-Semi-Gloss-Finish-Red-Powder-Coating-Paint.jpg",
            alt: "Semi-gloss",
            text: "Semi-gloss"
        },
        {
            href: "/Structure",
            imgSrc: "https://th.bing.com/th/id/OIP.1aYME-U4wAgu0XbYiyUImwHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3",
            alt: "Structure",
            text: "Structure"
        },
        {
            href: "/Texture",
            imgSrc: "https://th.bing.com/th/id/R.8b25943c63d99dee3d6dc1b6232dc432?rik=ihVv%2f%2bN4AQ2jJw&riu=http%3a%2f%2fwww.hsinda-powdercoating.com%2fphoto%2fpl20651281-epoxy_polyester_crack_textured_powder_coat_with_high_temperature_resistance.jpg&ehk=SbM55%2bzmr361W5ZWR%2bvXuC2rRk5NxDVp%2bndXR%2f0A2M0%3d&risl=&pid=ImgRaw&r=0",
            alt: "Texture",
            text: "Texture"
        },
        {
            href: "/Matt",
            imgSrc: "./asset/Screenshot 2024-07-15 124243.png",
            alt: "Matt",
            text: "Matt"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsArray.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [cardsArray.length]);

    const mainCard = [cardsArray[currentIndex]];
    const sideCards = cardsArray.slice(1).map((card, index) => {
        const newIndex = (currentIndex + index + 1) % cardsArray.length;
        return cardsArray[newIndex];
    });

    return (
        <section className="finish">
        <div class="process-details">
            {/* <!-- title  --> */}
            <h2 class="process-title">
                <span> Finish and Methods </span>
            </h2>
            {/* <!-- description  --> */}
            <p class="process-title-description">
            Our techniques and finishes ensure durable and aesthetically pleasing results.
            </p>
        </div>
        {/* <!-- icon  --> */}
        <div class="process-icon-paint">
            <i class="fa-solid fa-check-to-slot fa-shake"></i>
        </div>
        <hr class="hr1"></hr>
            <div className="home mx-auto">
                <div className="main-card">
                    {mainCard.map((card, index) => (
                        <Link to={card.href} key={index}  className="card">
                            <img src={card.imgSrc} alt={card.alt} />
                            <p>{card.text}</p>
                            <div className="card-gredient"></div>
                        </Link>
                    ))}
                </div>
                <div className="side-cards">
                    {sideCards.map((card, index) => (
                        <Link to={card.href} key={index} className="card">
                            <img src={card.imgSrc} alt={card.alt} />
                            <p>{card.text}</p>
                            <div className="card-gredient"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Finishes;
