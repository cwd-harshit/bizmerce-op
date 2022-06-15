import React from "react";
import { BiStore, BiHeart } from "react-icons/bi";
import { Rating } from "@material-ui/lab";
import Link from "next/link";

const Product_Card = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link href={`/product/${product._id}`}>
      <a>
        <div className="product_card">
          <div className="product_card__img">
            <img
              className="product_card__img__"
              src={product.images[0].url}
              alt={product.name}
            />
            <div className="product_card__img_">
              {/* <BiHeart className="icon nn" /> */}
              <div className="product_card__img__atc">
                {/* <h3>Add To Cart</h3> */}
              </div>
            </div>
          </div>
          <div className="product_card__details">
            <div className="product_card__rating">
              <Rating {...options} />{" "}
            </div>
            <div className="product_card__name">
              <h2>{product.name}</h2>
            </div>
            <div className="product_card__name">
              <h3>₹ {product.price}</h3>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Product_Card;
