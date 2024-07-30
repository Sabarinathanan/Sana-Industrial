import './Finishes.css';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';


const cardsArray = [
    {   
        id:1,
        href: "/Glossy",
        imgSrc: "https://cdn.shopify.com/s/files/1/0554/2078/0622/files/Powder-Coating-Training.jpg",
        alt: "Full gloss",
        title: "Full gloss"
    },
    {
        id:2,
        href: "/Semiglossy",
        imgSrc: "https://image.made-in-china.com/2f0j00ghiYCQEtmaoZ/Coat-Furniture-Satin-Semi-Gloss-Finish-Red-Powder-Coating-Paint.jpg",
        alt: "Semi-gloss",
        title: "Semi-gloss"
    },
    {
        id:3,
        href: "/Structure",
        imgSrc: "https://th.bing.com/th/id/OIP.1aYME-U4wAgu0XbYiyUImwHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3",
        alt: "Structure",
        title: "Structure"
    },
    {
        id:4,
        href: "/Satin",
        imgSrc: "https://image.made-in-china.com/2f0j00KpORZNAqLUzL/Wholesale-Pure-Outdoor-Polyester-Powder-Coating-Paint.webp",
        alt: "Satin",
        title: "Satin"
    },
    {
        id:5,
        href: "/Matt",
        imgSrc: "https://altaiseer.com/wp-content/uploads/2023/01/aluminum-anodizing-colors-768x384.jpg",
        alt: "Matt",
        title: "Matt"
    },
    {
        id:6,
        href: "/Texture",
        imgSrc: "https://th.bing.com/th/id/R.8b25943c63d99dee3d6dc1b6232dc432?rik=ihVv%2f%2bN4AQ2jJw&riu=http%3a%2f%2fwww.hsinda-powdercoating.com%2fphoto%2fpl20651281-epoxy_polyester_crack_textured_powder_coat_with_high_temperature_resistance.jpg&ehk=SbM55%2bzmr361W5ZWR%2bvXuC2rRk5NxDVp%2bndXR%2f0A2M0%3d&risl=&pid=ImgRaw&r=0",
        alt: "Texture",
        title: "Texture"
    }
];
    



const Finishes = () => {
  return (
    <Element name="productpage" className="section">
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
    <div className="services">
      {cardsArray.map((card,index) => (
        <Link key={index} to={card.href}>
        <div key={card.id} className={`service-card card-${card.id}`}>
          <div className="overlay"></div>
          <img src={card.imgSrc} alt={card.alt} className="card-image" />
          <h2>{card.title}</h2>
        </div>
        </Link>
      ))}
    </div>
        </section>
        </Element>
  );
};


export default Finishes;
