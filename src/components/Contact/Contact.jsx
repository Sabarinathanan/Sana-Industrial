import React, { useEffect } from "react";
import "./Contact.css"; // Assuming you have saved your CSS in Contact.css
import { Element } from "react-scroll";

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
            Reach out to us for consultations, quotes, or any inquiries you may
            have.
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
              <div className="info">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.6332650709674!2d76.98912112077753!3d11.130506089175562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8598a4899b88d%3A0xc4ce4143cbe59c38!2sSANA%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1722327718122!5m2!1sen!2sin"
                  width={600}
                  height={550}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p>Connect with us :</p>
              <div className="social-media">
                <div className="social-icons">
                  <a
                    href="https://maps.app.goo.gl/7xVARwt2TiH7cwTC9"
                    target="_blank"
                  >
                    <i class="fa-solid fa-location-dot fa-md" />
                  </a>

                  <a href="mailto:sanaindustries2k19@gmail.com" target="_blank">
                    <i className="fa-solid fa-envelope fa-md" />
                  </a>

                  <a
                    href="https://www.instagram.com/sana.industries?igsh=MTU4N2cyOGk1c3ZyNQ%3D%3D&utm_source=qr"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram fa-md" />
                  </a>
                </div>
                <div className="information">
                  <i className="fa-solid fa-phone fa-xl" />
                  <p>
                    <a href="+91-8048601039">+91-8048601039</a>
                  </p>
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
