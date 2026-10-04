function WhyUs() {
  const features = [
    {
      number: "01",
      title: "Millet-Based",
      description:
        "We give the classic paratha a better base with thoughtfully crafted millet-based dough.",
    },
    {
      number: "02",
      title: "Protein-Rich",
      description:
        "From paneer to soya and sprouts, our fillings are designed to make every bite more satisfying.",
    },
    {
      number: "03",
      title: "Loaded With Filling",
      description:
        "No disappointing bites. Generous stuffing is at the heart of every Golden Tawa paratha.",
    },
  ];

  return (
    <section className="why-us" id="why-us">
      <div className="why-us-container">

        <div className="why-us-heading">
          <p className="section-eyebrow">WHY GOLDEN TAWA</p>

          <h2>
            We took the
            <br />
            paratha seriously.
          </h2>

          <p>
            Because something this delicious deserves to be
            made with a little more thought.
          </p>
        </div>

        <div className="why-us-features">
          {features.map((feature) => (
            <div className="feature-card" key={feature.number}>
              <span className="feature-number">
                {feature.number}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyUs;