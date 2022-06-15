import React, { useEffect, useState } from "react";
import Head from "next/head";
import { AiFillCaretDown } from "react-icons/ai";
import { TbTruck } from "react-icons/tb";
import { GiAlarmClock } from "react-icons/gi";
import { MdOutlineLocalOffer, MdOutlineCreditCard } from "react-icons/md";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
import { GiHummingbird } from "react-icons/gi";
import SmallProduct from "../../components/home/SmallProduct";
import { useSelector, useDispatch } from "react-redux";
import { Rating } from "@material-ui/lab";
import Product_Card from "../../components/home/Product_Card";
import { useRouter } from "next/router";

const Product_Detail = ({ product, product_m, product_v }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  if (router.isFallback) {
    return <div className="loading">Loading&#8230;</div>;
  }
  const [isLoading, setLoading] = useState(false);
  const options = {
    value: product.product.ratings,
    readOnly: true,
    precision: 0.5,
    size: "large",
  };
  // console.log(product.product.Stock);
  const head_desc = product.product.description + " - Bizmerce.in";

  const Noob = () => {
    if (product.product.Stock == 0) {
      return <h4 className="stock s-false">Out Of Stock</h4>;
    } else {
      return <h4 className="stock s-true">In Stock</h4>;
    }
  };

  const [quantity, setQuantity] = useState(1);

  const plus = () => {
    setQuantity(quantity + 1);
  };
  const minus = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const atc_ = () => {
    dispatch({
      type: "atc",
      payload: product.product,
    });
  };
  const inc_atc = () => {
    dispatch({
      type: "inc_cart",
      payload: quantity,
    });
  };

  const atc = () => {
    atc_();
    inc_atc();
  };

  const [quat_1, setquat_1] = useState(0);
  const [quat_2, setquat_2] = useState(3);

  const qt_plus = () => {
    setquat_1(quat_1 + 3);
    setquat_2(quat_2 + 3);
  };

  const qt_minus = () => {
    if (quat_1 <= 0) {
      setquat_1(0);
      setquat_2(3);
    } else {
      setquat_1(quat_1 - 3);
      setquat_2(quat_2 - 3);
    }
  };
  // const fetch_r = async () => {
  //   // console.log(product.product.category);
  //   var res_r = await fetch(
  //     `https://bizmerce-server.cwd-harshit.repl.co/api/v1/products?category=${product.product.category}`
  //   );
  //   var data_r = await res_r.json();
  //   // console.log(data_r);
  //   return data_r;
  // };
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://bizmerce-server.cwd-harshit.repl.co/api/v1/products?category=${product.product.category}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.products));
  });

  // fetch_r();

  return (
    <div>
      <Head>
        <title>{product.product.name} - Bizmerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={head_desc} />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <div className="product">
          <div className="product__main">
            <div className="product__left">
              <div className="product__brands">
                <div className="product__brands__head">
                  <h2>Brands</h2>
                  <AiFillCaretDown className="icon s" />
                </div>
                <div className="product__brands_">
                  <h3>Nike</h3>
                  <h3>Addidas</h3>
                  <h3>Puma</h3>
                  <h3>Skechers</h3>
                  <h3>Bloop</h3>
                </div>
              </div>
              <div className="product__assure">
                <div className="product__assure_">
                  <TbTruck className="icon p" />
                  <div className="product__assure__">
                    <h3>Free Shipping</h3>
                    <h4>Free Shipping World Wide</h4>
                  </div>
                </div>
                <div className="product__assure_">
                  <GiAlarmClock className="icon p" />
                  <div className="product__assure__">
                    <h3>24 X 7 Service</h3>
                    <h4>Online Service For New Customer</h4>
                  </div>
                </div>
                <div className="product__assure_">
                  <MdOutlineLocalOffer className="icon p" />
                  <div className="product__assure__">
                    <h3>Festival Offer</h3>
                    <h4>New Online Special Festival Offer</h4>
                  </div>
                </div>
                <div className="product__assure_">
                  <MdOutlineCreditCard className="icon p" />
                  <div className="product__assure__">
                    <h3>Online Payment</h3>
                    <h4>Contrary To Popular Belief.</h4>
                  </div>
                </div>
              </div>
              <div className="product__new">
                <div className="product__new__head">
                  <h2>NEW PRODUCTS</h2>
                  <div className="product__new_">
                    <AiOutlineArrowLeft className="icon c" onClick={qt_minus} />
                    <AiOutlineArrowRight className="icon c" onClick={qt_plus} />
                  </div>
                </div>
                <div className="product__new__">
                  {product_m &&
                    product_m.products
                      .slice(quat_1, quat_2)
                      .map((product) => (
                        <SmallProduct key={product._id} product={product} />
                      ))}
                </div>
              </div>
            </div>
            <div className="product__right">
              <div className="product__image">
                <img
                  src={product.product.images[0].url}
                  alt={product.product.name}
                />
              </div>
              <div className="product__right__right">
                <div className="product__right__head">
                  <h1>{product.product.name}</h1>
                  <h2>₹ {product.product.price}</h2>
                  <Rating {...options} sx={{ fontSize: "4rem" }} />{" "}
                </div>
                <div className="product__cta">
                  <Noob />
                  <h4>Quantity</h4>
                  <div className="product__quantity">
                    <AiOutlineMinus className="icon cc" onClick={minus} />
                    <span>{quantity}</span>
                    <AiOutlinePlus className="icon cc" onClick={plus} />
                  </div>
                  <div className="product__cta_">
                    <div className="product__cta__">
                      <h2>Buy Now</h2>
                    </div>
                    <div className="product__cta__ re" onClick={atc}>
                      <h2>Add To Cart</h2>
                    </div>
                  </div>
                </div>
                <div className="product__desc">
                  <h2>Product Details:- </h2>
                  <div className="product__desc_">
                    <p>{product.product.description}</p>
                  </div>
                </div>
                <div className="product__share">
                  <h2>Share It</h2>
                  <div className="share__icon">
                    <AiFillFacebook className="icon _s" />
                    <AiOutlineWhatsApp className="icon _s" />
                    <AiOutlineInstagram className="icon _s" />
                    <GiHummingbird className="icon _s" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relatedProducts">
            <h2>Related Products</h2>
            <div className="home__top_collection_">
              {data &&
                data
                  .slice(0, 5)
                  .map((product) => (
                    <Product_Card key={product._id} product={product} />
                  ))}
            </div>
          </div>
          <div className="relatedProducts">
            <h2>Featured Products</h2>
            <div className="home__top_collection_">
              {product_v &&
                product_v.products
                  .slice(0, 5)
                  .map((product) => (
                    <Product_Card key={product._id} product={product} />
                  ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product_Detail;

// export async function getStaticProps({ params: { id } }) {
//   // let data = null;
//   let data_c = null;
//   let data_m = null;
//   try {
//     // const res = await fetch(`https://bizmerce-server.cwd-harshit.repl.co/api/v1/product/${id}`);
//     // data = await res.json();
//     const res_c = await fetch(
//       `https://bizmerce-server.cwd-harshit.repl.co/api/v1/products?category=${product.product.category}`
//     );
//     data_c = await res_c.json();
//     const res_m = await fetch(
//       `https://bizmerce-server.cwd-harshit.repl.co/api/v1/products?special=New`
//     );
//     data_m = await res_m.json();
//   } catch (err) {}
//   return {
//     props: {
//       // product: data,
//       product_c: data_c,
//       product_m: res_m,
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "" } }],
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(
    `https://bizmerce-server.cwd-harshit.repl.co/api/v1/product/${id}`
  );
  const data = await res.json();

  const res_m = await fetch(
    `https://bizmerce-server.cwd-harshit.repl.co/api/v1/products?special=New`
  );
  const data_m = await res_m.json();

  const res_v = await fetch(
    `https://bizmerce-server.cwd-harshit.repl.co/api/v1/products?special=Featured`
  );
  const data_v = await res_v.json();

  return {
    props: {
      product: data,
      product_m: data_m,
      product_v: data_v,
    },
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: { id: "" },
//       },
//     ],
//     fallback: true,
//   };
// }

// export async function getServerSideProps() {
//   const res_r = await fetch(
//     `https://bizmerce-server.cwd-harshit.repl.co/api/v1/products?${product.product.category}`
//   );
//   const data_r = await res_r.json();
//   return {
//     props: {
//       product_r: data_r,
//     },
//   };
// }
