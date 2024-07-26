import '../Carousel/Carousel.css';
import { Element } from 'react-scroll';

function Carousel() {
    return ( 
        <>
  {/* carousel  */}
  <Element name="homepage" className="section">

  <section className="carousel">
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img
            src="./asset/carousel/carousel 1.jpeg"
            className="d-block w-100  c-img"
            alt="Slide 1"
          />
          <div className="carousel-caption top-0 mt-4">
            {/* <p class="mt-5 fs-3 text-uppercase">Discover the hidden world</p> */}
            <h1 className="display-1 text-capitalize carousel-text text-warning">
              Your vision, our coating
            </h1>
            <p className="" style={{ fontSize: 26 }}>
              {" "}
              turning ideas into enduring surfaces.
            </p>
            {/* <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Services</button> */}
          </div>
        </div>
        <div className="carousel-item c-item">
          <img
            src="./asset/carousel/carousel 3.jpeg"
            className="d-block w-100  c-img"
            alt="Slide 3"
          />
          <div className="carousel-caption top-0 mt-1">
            {/* <p class="text-uppercase fs-3 mt-5">Destination activities</p> */}
            <h1 className="display-1 text-capitalize carousel-text text-warning">
              Coating your dreams into reality
            </h1>
            <p className="" style={{ fontSize: 26 }}>
              {" "}
              powder coating with precision
            </p>
            {/* <button class="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
                  data-bs-target="#booking-modal">Book a tour</button> */}
          </div>
        </div>
        <div className="carousel-item c-item">
          <img
            src="./asset/carousel/carousel 2.jpeg"
            className="d-block w-100  c-img"
            alt="Slide 2"
          />
          <div className="carousel-caption top-0 mt-1">
            {/* <p class="text-uppercase fs-3 mt-5">The season has arrived</p> */}
            <h1 className="display-1 text-capitalize carousel-text text-warning ">
              Your creativity, <br />
              our coating
            </h1>
            <p className="" style={{ fontSize: 26 }}>
              {" "}
              lasting protection and style
            </p>
            {/* <button class="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
          data-bs-target="#booking-modal">Book a tour</button> */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  </Element>
</>

     );
}

export default Carousel;
