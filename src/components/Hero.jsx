import logo from "../assets/golden-tawa-logo.png";
import heroImage from "../assets/palak-paneer-hero.jpeg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
       
          <p className="hero-eyebrow">
            MILLET-BASED • PROTEIN-RICH • STUFFED
          </p>

          <h1>
            The Paratha
            <br />
            You’ll Crave
            <br />
            Again.
          </h1>

          <p className="hero-description">
            Hearty, generously stuffed parathas made with
            millet-based dough — created for people who
            love great food and want a little more from it.
          </p>

          <div className="hero-buttons">
           

            <a
            href="https://link.zomato.com/xqzv/rshare?id=1482788413056335d"
            className="hero-primary-button"
            target="_blank"
             rel="noopener noreferrer"
            >
            Order Now
            </a>

             <a href="#menu" className="hero-secondary-button">
                Explore Menu
                </a>
          </div>
        </div>

        <div className="hero-image">
            <img
                src={heroImage}
                alt="Palak Paneer Cheese Paratha"
                className="hero-food-image"
            />
        </div>

      </div>
    </section>
  );
}

export default Hero;