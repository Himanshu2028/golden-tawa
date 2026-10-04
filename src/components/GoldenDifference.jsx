function GoldenDifference() {
  const differences = [
    {
      number: "01",
      title: "Millet-Based",
      text: "A better base for your everyday paratha.",
    },
    {
      number: "02",
      title: "Protein-Rich",
      text: "Thoughtful fillings with more substance.",
    },
    {
      number: "03",
      title: "Generously Stuffed",
      text: "Because nobody likes a paratha with a missing filling.",
    },
    {
      number: "04",
      title: "Made Fresh",
      text: "Prepared to order, made for your craving.",
    },
  ];

  return (
    <section className="golden-difference">
      <div className="golden-difference-container">

        <div className="golden-difference-heading">
          <p className="section-eyebrow">
            THE GOLDEN DIFFERENCE
          </p>

          <h2>
            Better ingredients.
            <br />
            <span>Same love for parathas.</span>
          </h2>

          <p>
            We believe your favourite comfort food can be
            delicious, filling and thoughtfully made.
          </p>
        </div>

        <div className="golden-difference-grid">
          {differences.map((item) => (
            <div
              className="golden-difference-card"
              key={item.number}
            >
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GoldenDifference;