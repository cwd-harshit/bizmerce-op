import React, { useEffect, useState } from "react";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";
import Head from "next/head";
import Router from "next/router";
import Product_Card from "../../components/home/Product_Card";
import {
  BiFirstPage,
  BiSkipPrevious,
  BiSkipNext,
  BiLastPage,
} from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const Search = ({ product }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [data1, setData1] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const currentPage_ = useSelector((state) => state.page.currentPage);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState(" ");

  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    fetch(`http://139.59.29.255/api/v1/products`)
      .then((response1) => response1.json())
      .then((data1) => setData1(data1.products));
  });
  const pagination = () => {
    Router.push(`/page/${currentPage}`);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
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

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      Router.push(`/search/${keyword}`);
    } else {
      Router.push("/store");
    }
  };

  const rpp = product.resultPerPage;
  const pc = product.productsCount;

  const muiTheme = createMuiTheme({
    overrides: {
      MuiSlider: {
        thumb: {
          color: "#d44848",
        },
        track: {
          color: "#278be3",
          height: 4,
        },
        rail: {
          color: "black",
        },
      },
    },
  });

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  let count = product.filteredProductsCount;

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
            <div className="store__filter__categories">
              <div className="store__filter__categories__head">
                <h2>Categories</h2>
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
            <div className="store__filter__categories">
              <div className="store__filter__categories__head">
                <h2>
                  Categ<span>ories</span>
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
                <div className="store__main__search__filter__icon">
                  <MdOutlineFilterList className="icon nnnn" />
                </div>
                <div className="store__main__search__filter_">
                  <h3>Popular</h3>
                  <BiChevronDown className="icon nnn" />
                </div>
              </div>
            </div>
            <div className="store__main__filter">
              <div className="store__main__filter_">
                <span>Laptop</span>
                <IoMdClose className="icon" />
              </div>
              <div className="store__main__filter_">
                <span>Laptop</span>
                <IoMdClose className="icon" />
              </div>
            </div>
            <div className="home__top_collection_">
              {product &&
                product.products
                  .slice(0, 8)
                  .map((product) => (
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

export default Search;

export async function getServerSideProps({ params: { name } }) {
  const res = await fetch(
    `http://139.59.29.255/api/v1/products?keyword=${name}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
}

// export async function getServerSideProps() {
//   const res_r = await fetch(
//     `http://139.59.29.255/api/v1/products?${product.product.category}`
//   );
//   const data_r = await res_r.json();
//   return {
//     props: {
//       product_r: data_r,
//     },
//   };
// }
