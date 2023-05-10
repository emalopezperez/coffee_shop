import "../../../styles/incentives.css";

const Incentives = () => {
  return (
    <section className="incentives-container">
      <article className="column-one">
        <h2 className="column-one-h2">Coffe and Brecfast</h2>
        <ul>
          <h2>Cafe americano</h2>
          <p>asasasas</p>
          <h2>cafe italiano</h2>
          <p>asasaasas</p>
          <h2>Cafe exprees</h2>
          <p>asasa</p>
        </ul>
      </article>
      <article className="column-two">
        <img
          className=" column-two-image"
          src="https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="Cafe"
        />

        <div className="column-two-info">
          <h2>Coffe Moments</h2>
          <span>Ecery coffe is free</span>
          
        </div>
      </article>
    </section>
  );
};

export default Incentives;
