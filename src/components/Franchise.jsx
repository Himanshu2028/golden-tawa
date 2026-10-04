function Franchise() {
  const benefits = [
    {
      number: "01",
      title: "Distinctive Concept",
      text: "A modern paratha brand built around millet-based and protein-rich offerings.",
    },
    {
      number: "02",
      title: "Scalable Format",
      text: "A focused QSR model designed for efficient operations and expansion.",
    },
    {
      number: "03",
      title: "Growing Category",
      text: "A familiar food category with a fresh positioning for today's customers.",
    },
    {
      number: "04",
      title: "Built to Grow",
      text: "A brand designed with multiple formats and future expansion opportunities.",
    },
  ];

  return (
    <section className="franchise" id="franchise">
      <div className="franchise-container">

        <div className="franchise-top">
          <p className="section-eyebrow">FRANCHISE WITH US</p>

          <h2>
            Build the next
            <br />
            <span>Golden Tawa.</span>
          </h2>

          <p className="franchise-intro">
            We're building a modern paratha brand around great
            food, thoughtful ingredients and a format designed
            to grow.
          </p>
        </div>

        <div className="franchise-benefits">
          {benefits.map((benefit) => (
            <div
              className="franchise-benefit"
              key={benefit.number}
            >
              <span>{benefit.number}</span>

              <h3>{benefit.title}</h3>

              <p>{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="franchise-cta">
          <div>
            <p>INTERESTED IN JOINING US?</p>

            <h3>
              Let's build something
              <br />
              delicious together.
            </h3>
          </div>

          <a href="#contact">
            Explore Franchise →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Franchise;