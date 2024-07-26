import "../Application-cards/Cards.css";
function Cards() {
  return (
    <>
      {/* appliaction used */}
      <section className="container-application">
        <div class="process-details">
          {/* <!-- title  --> */}
          <h2 class="process-title">
            <span>Application Area</span>
          </h2>
          {/* <!-- description  --> */}
          <p class="process-title-description">
            We cater to a wide range of surfaces and environments, ensuring
            versatility and precision.
          </p>
        </div>
        {/* <!-- icon  --> */}
        <div class="process-icon-paint">
          <i class="fa-solid fa-angles-down fa-bounce"></i>
        </div>
        <hr class="hr2" />
        <div className="card__container">
        {/* 1 */}
          <article className="card__article">
            <img
              src="https://cncwheels.com.au/wp-content/uploads/2022/10/can_you_powder_coat_alloy_wheels.jpg"
              alt="image"
              className="card__img"
            />
            <div className="card__data">
              <span className="card__description">Automobile</span>
            </div>
          </article>
          {/* 2 */}
          <article className="card__article">
            <img
              src="https://nicecoatindia.com/wp-content/uploads/2023/09/ace.jpg"
              alt="image"
              className="card__img"
            />
            <div className="card__data">
              <span className="card__description">Ace</span>
            </div>
          </article>
          {/* 3 */}
          <article className="card__article">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2020/12/HH/EC/ZM/5163616/architectural-powder-coatings.jpg"
              alt="image"
              className="card__img"
            />
            <div className="card__data">
              <span className="card__description">Architure</span>
            </div>
          </article>
          {/* 4 */}
          <article className="card__article">
            <img
              src="https://arironllc.com/wp-content/uploads/2017/11/patio_furniture.jpg"
              alt="image"
              className="card__img"
            />
            <div className="card__data">
              <span className="card__description">Furniture</span>
            </div>
          </article>
          {/* 5 */}
          <article className="card__article">
            <img
              src="https://reliantfinishingsystems.com/wp-content/uploads/2023/08/Small-Part-1.jpg"
              alt="image"
              className="card__img"
            />
            <div className="card__data">
              <span className="card__description">General industry</span>
            </div>
          </article>
          {/* 6 */}
          <article className="card__article">
            <img
              src="https://www.unitedpc.co.uk/wp-content/uploads/2024/04/shepherds-hut-wheels.jpg"
              alt="image"
              className="card__img"
            />
            <div className="card__data">
              <span className="card__description">Job shop</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Cards;
