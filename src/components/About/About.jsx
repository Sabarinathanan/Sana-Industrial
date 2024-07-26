import "../About/About.css";
function About() {
  return (
    <section className="about-us">
      <div className="process-details">
        {/* title  */}
        <h2 className="process-title">
          <span>About - Us</span>
        </h2>
        {/* description  */}
        <p className="process-title-description">
          Our work process is designed to provide you with a stress-free
          painting experience, from start to finish.
        </p>
      </div>
      {/* icon  */}
      <div className="process-icon-paint">
        <i className="fa-solid fa-building fa-flip" />
      </div>
      {/* about  */}
      <hr className="hr4" />
      <div className="home-about ">
        <div className="about-left">
          <img className="about-left-img mx-auto" src="./asset/Sana logo.jpg" />
        </div>
        <div className="about-right">
          <div className=" about">
            <h2 className="ceo-title"> About Us </h2>
            <h6>
              {" "}
              <strong>
                <i>Sana Industrial</i> was established in 2019 and are leading
                manufacturers of Powder Coating Material, High Performance
                Coating and Speciality Chemicals.{" "}
              </strong>
            </h6>
            <p>
              Since its inception SANA COAT has served most durable, reliable,
              economical, sustaining and consistent products to industry by its
              vast knowledge of powder coating, strong R&amp;D team and world
              class quality control lab.
            </p>
            <a href="about.html" className="btn btn-primary" role="button">
              KNOW MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
