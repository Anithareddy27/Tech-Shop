import { useState } from "react";
import productsData from "../ProductData";


const categories = [
  "All",
  "Headphones",
  "Earbuds",
  "Earphones",
  "Neckbands",
];

export const TopProducts = () => {
  const [active, setActive] = useState("All");

  const filteredProducts =
    active === "All"
      ? productsData
      : productsData.filter((p) => p.category === active);

  return (
    <div className="top-products">
      <h3 className="section-title">Top Products</h3>


      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.images[0]}
              alt={product.title}
            />

            <h4>{product.title}</h4>
            <p className="info">{product.info}</p>

        
            <div className="rating">
              {"★".repeat(product.rateCount)}
            </div>

           
            <p className="price">
              ₹{product.finalPrice.toLocaleString()}
              <span>
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </p>

            <button className="add-cart">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
