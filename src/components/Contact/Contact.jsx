import React, { useEffect } from 'react';
import './Contact.css'; // Assuming you have saved your CSS in Contact.css
import { Element } from 'react-scroll';

const Contact = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return (
    <Element name="contactpage" className="section">
    <section className="contact">
         <div class="process-details">
        {/* <!-- title  --> */}
        <h2 class="process-title">
            <span>Contact Us</span>
        </h2>
        {/* <!-- description  --> */}
        <p class="process-title-description">
        Reach out to us for consultations, quotes, or any inquiries you may have.
        </p>
    </div>
    {/* <!-- icon  --> */}
    <div class="process-icon-paint">
        <i class="fa-solid fa-address-book fa-beat"></i>
    </div>
    <hr class="hr3"></hr>
      <div className="container-contact">
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
            Reach out to us for consultations, quotes, or any inquiries you may have. We are here to help and look forward to connecting with you.
            </p>
            <div className="info">
              <div className="information">
                <i className="fa-solid fa-map-location-dot fa-xl" />
                <p>
              <a href="https://maps.app.goo.gl/7xVARwt2TiH7cwTC9" target='_blank'>No. 1/165-3, Athipalayam Main Road Opposite Sri Ranaganathar
                  Institute of engineering college, Thudiyalur to Kovilpalayam road,
                  Athipalayam Rd, Tamil Nadu 641110</a>
                </p>
              </div>
              <div className="information">
                <i className="fa-solid fa-envelope fa-xl" />
                <p><a href="mailto:sanaindustries2k19@gmail.com">sanaindustries2k19@gmail.com</a></p>
              </div>
              <div className="information">
                <i className="fa-solid fa-phone fa-xl" />
                <p><a href="+91-8048601039">+91-8048601039</a></p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
              <a href="https://maps.app.goo.gl/7xVARwt2TiH7cwTC9" target='_blank'><i class="fa-solid fa-location-dot fa-md"/></a>

              <a href="mailto:sanaindustries2k19@gmail.com" target='_blank'><i className="fa-solid fa-envelope fa-md"/></a>

              <a href="https://www.instagram.com/sana.industries?igsh=MTU4N2cyOGk1c3ZyNQ%3D%3D&utm_source=qr" target='_blank'><i className="fa-brands fa-instagram fa-md"/></a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="name">Fullname</label>
                <span>Fullname</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="email">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="phone">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" />
                <label htmlFor="message">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btnn" />
            </form>
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default Contact;
