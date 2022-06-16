import React, { useEffect, useState } from "react";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";
import Product_Card from "../components/home/Product_Card";
import Head from "next/head";
import Router from "next/router";
import Pagination from "react-js-pagination";
import {
  BiFirstPage,
  BiSkipPrevious,
  BiSkipNext,
  BiLastPage,
} from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import Slider from "@material-ui/core/Slider";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";
import SmallProduct from "../components/home/SmallProduct";

const Store = ({ products, product_m }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  // const [product, setData1] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const currentPage_ = useSelector((state) => state.page.currentPage);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState(" ");
  const [brand, setBrand] = useState(" ");

  const [ratings, setRatings] = useState(0);

  // useEffect(() => {
  //   fetch(`http://192.168.0.105:4000/api/v1/products`)
  //     .then((response1) => response1.json())
  //     .then((product) => setData1(product));
  // });

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  const pagination = () => {
    Router.push(`/page/${currentPage}`);
  };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
    dispatch({
      type: "inc_page",
      payload: currentPage,
    });
    dispatch({
      type: "inc_page",
      payload: currentPage,
    });
    pagination();
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      Router.push(`/search/${keyword}`);
    } else {
      Router.push("/store");
    }
  };
  // console.log(product);
  const rpp = products.resultPerPage;
  const pc = products.productsCount;
  // const priceHandler = (event, newPrice) => {
  //   setPrice(newPrice);
  // };
  // // console.log(rpp, pc);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  // new

  let count = products.filteredProductsCount;
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
  // const [price, setPrice] = useState([0, 25000]);
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const [sortby, setSortby] = useState(false);

  const sortbyopen = () => {
    setSortby(!sortby);
  };

  const [filter, setFilter] = useState(false);

  const filteropen = () => {
    setFilter(!filter);
  };

  return (
    <div>
      <Head>
        <title>Store - Bizmerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Description" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <div className="store">
          <div className="store__filter">
            <div className="store__filter__price">
              <div className="store__filter__price__head">
                <h2>
                  Filter By <span>Price</span>
                </h2>
              </div>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />
            </div>
            <div className="store__filter__categories">
              <div className="store__filter__categories__head">
                <h2>
                  Filter By <span>Categories</span>
                </h2>
              </div>
              <div className="store__filter__categories_">
                {categories.map((category) => (
                  <div
                    className="store__filter__categories__"
                    key={category}
                    onClick={() => {
                      setCategory(category);
                      Router.push(`/filter/category/${category}`);
                    }}
                  >
                    <h3>{category}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="product__new vv">
              <div className="product__new__head">
                <h2>FEATURED PRODUCTS</h2>
                <div className="product__new_">
                  <AiOutlineArrowLeft className="icon c" onClick={qt_minus} />
                  <AiOutlineArrowRight className="icon c" onClick={qt_plus} />
                </div>
              </div>
              <div className="product__new__ vvv">
                {product_m &&
                  product_m.products
                    .slice(quat_1, quat_2)
                    .map((product) => (
                      <SmallProduct key={product._id} product={product} />
                    ))}
              </div>
            </div>
          </div>
          <div
            className={
              filter
                ? "store__filter__mob filter__mob__open"
                : "store__filter__mob"
            }
          >
            <div className="store__mob__filter__head">
              <h1>Filters</h1>
              <AiOutlineClose className="icon mob-icon" onClick={filteropen} />
            </div>
            <div className="store__filter__price">
              <div className="store__filter__price__head">
                <h2>
                  Filter By <span>Price</span>
                </h2>
              </div>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />
            </div>
            <div className="store__filter__categories">
              <div className="store__filter__categories__head">
                <h2>
                  Filter By <span>Categories</span>
                </h2>
              </div>
              <div className="store__filter__categories_">
                {categories.map((category) => (
                  <div
                    className="store__filter__categories__"
                    key={category}
                    onClick={() => {
                      setCategory(category);
                      Router.push(`/filter/category/${category}`);
                    }}
                  >
                    <h3>{category}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="product__new vv">
              <div className="product__new__head">
                <h2>FEATURED PRODUCTS</h2>
                <div className="product__new_">
                  <AiOutlineArrowLeft className="icon c" onClick={qt_minus} />
                  <AiOutlineArrowRight className="icon c" onClick={qt_plus} />
                </div>
              </div>
              <div className="product__new__ vvv">
                {product_m &&
                  product_m.products
                    .slice(quat_1, quat_2)
                    .map((product) => (
                      <SmallProduct key={product._id} product={product} />
                    ))}
              </div>
            </div>
          </div>
          <div className="store__main">
            <div className="store__main__head">
              <h1>Store</h1>
            </div>
            <div className="store__main__search">
              <div className="store__main__search_">
                <div className="store__main__search__icon">
                  <BiSearch className="icon nnn" onClick={searchSubmit} />
                </div>
                <form className="searchBox" onSubmit={searchSubmit}>
                  <input
                    type="text"
                    className="nooo"
                    placeholder="Search for Products, Brands & more..."
                    onChange={handleChange}
                    value={keyword}
                  />
                  {/* <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                  /> */}
                  <input type="submit" hidden />
                </form>
              </div>
              <div className="store__main__search__filter">
                <div className="filter_">
                  <div className="store__main__search__filter__icon">
                    <MdOutlineFilterList className="icon nnnn" />
                  </div>
                  <div className="store__main__search__filter_">
                    <h3>Sort By</h3>
                    <BiChevronDown className="icon nnn" onClick={sortbyopen} />
                  </div>
                </div>
                <div
                  className={
                    sortby
                      ? "store__main__search__filter__ menu__search__open"
                      : "store__main__search__filter__"
                  }
                >
                  <div
                    className="search__filter"
                    onClick={() => {
                      console.log("noob");
                    }}
                  >
                    <h3>
                      Price <span>Low to High</span>
                    </h3>
                  </div>
                  <div className="search__filter">
                    <h3>
                      Price <span>High to Low</span>
                    </h3>
                  </div>
                  <div className="search__filter">
                    <h3>
                      Sort By <span>Latest</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="store__main__mob">
              <div className="store__main__mob__search">
                <div className="store__main__mob__search_">
                  <form className="searchBox-mob" onSubmit={searchSubmit}>
                    <input
                      type="text"
                      className="input-mob"
                      placeholder="Search for Products, Brands & more..."
                      onChange={handleChange}
                      value={keyword}
                    />
                    <input type="submit" hidden />
                  </form>
                  <div className="store__main__mob__search__icon">
                    <BiSearch
                      className="icon mob-search"
                      onClick={searchSubmit}
                    />
                  </div>
                </div>
              </div>
              <div className="store__main__mob_filter">
                <div
                  className="store__main__mob__filter__icon"
                  onClick={filteropen}
                >
                  <MdOutlineFilterList className="icon mob-nnn" />
                  <h3>Filter</h3>
                </div>
                <div className="store__main__mob__filter__">
                  <div className="store__main__mob__filter_">
                    <h3>Sort By</h3>
                    <BiChevronDown
                      className="icon mob-nn"
                      onClick={sortbyopen}
                    />
                  </div>
                  <div
                    className={
                      sortby
                        ? "store__main__search__filter__ menu__search__open"
                        : "store__main__search__filter__"
                    }
                  >
                    <div
                      className="search__filter"
                      onClick={() => {
                        console.log("noob");
                      }}
                    >
                      <h3>
                        Price <span>Low to High</span>
                      </h3>
                    </div>
                    <div className="search__filter">
                      <h3>
                        Price <span>High to Low</span>
                      </h3>
                    </div>
                    <div className="search__filter">
                      <h3>
                        Sort By <span>Latest</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home__top_collection_">
              {products &&
                products.products.map((product) => (
                  <Product_Card key={product._id} product={product} />
                ))}
            </div>
            {rpp < count && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={rpp}
                  totalItemsCount={pc}
                  onChange={setCurrentPageNo}
                  nextPageText={<BiSkipNext className="icon" />}
                  prevPageText={<BiSkipPrevious className="icon" />}
                  firstPageText={<BiFirstPage className="icon" />}
                  lastPageText={<BiLastPage className="icon" />}
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Store;

export async function getStaticProps() {
  const res = await fetch(
    `https://bizmerce-server.cwd-harshit.repl.co/api/v1/products`
  );
  const data = await res.json();
  const ress = await fetch(
    "https://bizmerce-server.cwd-harshit.repl.co/api/v1/products?special=Featured"
  );
  const dataa = await ress.json();
  return {
    props: {
      products: data,
      product_m: dataa,
    },
  };
}
