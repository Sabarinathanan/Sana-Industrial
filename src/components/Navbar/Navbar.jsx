import '../Navbar/Navbar.css'
function Navbar() {
  return (
    <>
      <div className="background" />
      <a href="http://wa.me/+917092937773" className="whatsapp">
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
            <i className="fa-solid fa-envelope" />
          </div>
          <div>
            <i className="fa-brands fa-facebook" />
          </div>
          <div>
            <i className="fa-brands fa-instagram" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
