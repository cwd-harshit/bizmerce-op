import React from "react";
import { Rating } from "@material-ui/lab";
import Link from "next/link";

const SmallProduct = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
    size: "large",
  };
  return (
    <Link href={`${product._id}`}>
      <a>
        <div className="smallProduct">
          <div className="smallProduct__left">
            <img src={product.images[0].url} alt={product.name} />
          </div>
          <div className="smallProduct__right">
            <div className="smallProduct__rating">
              <Rating {...options} />{" "}
            </div>
            <div className="smallProduct__name">
              <h3>{product.name}</h3>
            </div>
            <div className="smallProduct__price">
              <h2>₹ {product.price}</h2>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SmallProduct;
