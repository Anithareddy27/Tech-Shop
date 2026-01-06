import Slider from "react-slick";
import productsData from "../ProductData";

export const FeaturedProducts = () => {
  const featured = productsData.filter(
    (item) => item.tag === "featured-product"
  );

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="featured-section">
      <h4 className="text-center text-white mb-5">
        Featured Products
      </h4>

      <Slider {...settings} className="featured-slider">
        {featured.map((product) => (
          <div key={product.id}>
            <div className="featured-card">
              <p className="product-title">{product.title}</p>

              <img
                src={product.images[0]}
                alt={product.title}
                className="img-fluid"
              />

              <p className="price">
                ₹{product.finalPrice.toLocaleString()}
                <span>
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
