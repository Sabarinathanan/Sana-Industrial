import '../Navbar/Navbar.css'
function Navbar() {
  return (
    <>
      <div className="background" />
      <a href="http://wa.me/+917845025709" className="whatsapp">
        <i className="fa-brands fa-whatsapp fa-fade fa-xl" />
      </a>
      {/* nav  */}
      <nav>
        <div className="nav-logo">
          <img src="./Sana logo (1).jpg" width="50px" alt="" />
          SaNa Industrial
        </div>
        <div className="nav-details ">
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Product</a>
          </div>
          <div className="contact">
            <a href="#" className="btn btn-outline-warning btn-sm">
              Contact Us
            </a>
          </div>
        </div>
        <div className="nav-icons">
          <div>
            <a href="https://maps.app.goo.gl/7xVARwt2TiH7cwTC9" target='_blank'><i class="fa-solid fa-location-dot fa-md"/></a>
          </div>
          <div>
            <a href="mailto:sanaindustries2k19@gmail.com" target='_blank'><i className="fa-solid fa-envelope fa-md"/></a>
          </div>
          <div>
            <a href="https://www.instagram.com/sana.industries?igsh=MTU4N2cyOGk1c3ZyNQ%3D%3D&utm_source=qr" target='_blank'><i className="fa-brands fa-instagram fa-md"/></a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
