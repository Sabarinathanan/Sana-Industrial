import '../Application-cards/Cards.css'
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
            We cater to a wide range of surfaces and environments, ensuring versatility and precision.
            </p>
        </div>
        {/* <!-- icon  --> */}
        <div class="process-icon-paint">
            <i class="fa-solid fa-angles-down fa-bounce"></i>
        </div>
        <hr class="hr2"/>
    {/* 1 */}
    <div className="card__container">
      <article className="card__article">
        <img
          src="https://th.bing.com/th/id/OIP.BqF4kCoa_wjJHPN4G4K7OgHaHV?pid=ImgDet&w=161&h=159&c=7"
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
          src="https://th.bing.com/th/id/OIP.kfsXcuDw8bnCsF6pzM3PwgHaHZ?pid=ImgDet&w=161&h=161&c=7"
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
          src="https://th.bing.com/th/id/OIP.zii2NvNIeMVgvdBwnF7GPgHaGR?pid=ImgDet&w=179&h=151&c=7&dpr=1.3"
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
          src="https://th.bing.com/th/id/OIP.POldKCCU9gbs6i7kscpBdgAAAA?pid=ImgDet&w=201&h=201&c=7&dpr=1.3"
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
          src="https://th.bing.com/th/id/OIP.ErtCNtZPFt-zrHfYncI4vwHaHa?pid=ImgDet&w=201&h=201&c=7&dpr=1.3g"
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
