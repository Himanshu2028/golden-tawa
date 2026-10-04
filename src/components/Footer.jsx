function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <h2>THE GOLDEN TAWA CO.</h2>

            <p>
              Millet-Based • Protein-Rich • Stuffed Parathas
            </p>

            <p className="footer-tagline">
              Rethinking the paratha, one delicious bite at a time.
            </p>
          </div>

          <div className="footer-links">

            <div className="footer-column">
              <h3>EXPLORE</h3>

              <a href="#menu">Menu</a>
              <a href="#story">Our Story</a>
              <a href="#why-us">Why Us</a>
              <a href="#franchise">Franchise</a>
            </div>

            <div className="footer-column">
              <h3>ORDER</h3>

              <a
                href="https://link.zomato.com/xqzv/rshare?id=1482788413056335d"
                target="_blank"
                rel="noopener noreferrer"
                >
                 Zomato
            </a>
              <a href="#order">Swiggy</a>
            </div>

            <div className="footer-column">
              <h3>CONNECT</h3>

             <a
                href="https://www.instagram.com/thegoldentawaco"
                target="_blank"
                rel="noopener noreferrer"
                >
             Instagram
            </a>
              <a href="mailto:maarvex.labs@gmail.com">
                Email Us
            </a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 The Golden Tawa Co. All rights reserved.
          </p>

          <p>
            A brand by MAARVEX LABS PRIVATE LIMITED
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;