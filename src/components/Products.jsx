import amritsariPaneer from "../assets/products/amritsari-paneer.jpeg";
import palakPaneer from "../assets/products/palak-paneer.jpeg";
import beetrootPaneer from "../assets/products/beetroot-paneer.jpeg";
import rajasthaniPyaaz from "../assets/products/rajasthani-pyaaz.jpeg";
import matarParatha from "../assets/products/matar-paratha.jpeg";
import soyaKeema from "../assets/products/soya-keema.jpg";

const products = [
  {
    name: "Amritsari Paneer",
    category: "SIGNATURE",
    description:
      "Generously stuffed paneer paratha with our millet-based dough.",
    price: "₹219",
    image: amritsariPaneer,
  },
  {
    name: "Palak Paneer",
    category: "PROTEIN-RICH",
    description:
      "A delicious combination of spinach, paneer and wholesome millet dough.",
    price: "₹239",
    image: palakPaneer,
  },
  {
    name: "Beetroot Paneer",
    category: "SIGNATURE",
    description:
      "Paneer-filled paratha with our naturally vibrant beetroot millet dough.",
    price: "₹239",
    image: beetrootPaneer,
  },
  {
    name: "Rajasthani Pyaaz",
    category: "REGIONAL",
    description:
      "A bold, comforting take on the classic Rajasthani onion paratha.",
    price: "₹179",
    image: rajasthaniPyaaz,
  },
  {
    name: "Matar Paratha",
    category: "CLASSIC",
    description:
      "A comforting stuffed paratha packed with flavourful green peas.",
    price: "₹219",
    image: matarParatha,
  },
  {
    name: "Soya Keema",
    category: "PROTEIN-RICH",
    description:
      "A protein-packed filling for those who want more from their paratha.",
    price: "₹229",
    image: soyaKeema,
  },
];

function Products() {
  return (
    <section className="products" id="menu">
      <div className="products-container">

        <div className="products-heading">
          <div>
            <p className="section-eyebrow">THE GOLDEN MENU</p>

            <h2>
              Meet your next
              <br />
              favourite paratha.
            </h2>
          </div>

          <p className="products-intro">
            From timeless classics to protein-rich creations,
            there's a Golden Tawa for every kind of craving.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>

             <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>

              <div className="product-info">
                <p className="product-category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-bottom">
                  <div>
                    <span className="product-price">
                      {product.price}
                    </span>

                    <span className="product-serving">
                      2 PARATHAS
                    </span>
                  </div>

                 <a
                    href="https://link.zomato.com/xqzv/rshare?id=1482788413056335d"
                    className="product-order"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                     Order
                </a>
                </div>
              </div>

            </article>
          ))}
        </div>

        <div className="products-footer">
          <a
            href="https://link.zomato.com/xqzv/rshare?id=1482788413056335d"
            className="view-menu-button"
            target="_blank"
             rel="noopener noreferrer"
            >
                 View Full Menu →
            </a>
        </div>

      </div>
    </section>
  );
}

export default Products;