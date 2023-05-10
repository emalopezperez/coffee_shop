import "../../../styles/baner.css";

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner-top">
        <div className="conteiner-image">
          <img
            className="img-banner"
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="cafe"
          />
          <img
            className="img-banner"
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2537&q=80"
            alt="cafe"
          />
          <img
            className="img-banner"
            src="https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="cafe"
          />
          <img
            className="img-banner"
            src="https://plus.unsplash.com/premium_photo-1669374537636-518629de3b85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="cafe"
          />
        </div>
      </div>
      <div className="banner-info">
        <h2>Buy One get Two! Only this Weekends</h2>

        <div className="banner-info-button">
          <span>From singature delicioso, traido de paris, sabor</span>
          <button>Discovere more</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
