import React from "react";
import Head from "next/head";
import { BsCart4 } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiStore, BiHeart } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();
  // nav schdow

  const [navbar, setNavbar] = useState(false);
  const [gototop, setGototop] = useState(false);
  const changeShadows = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  // scroll to top

  const gototop_function = () => {
    if (window.scrollY >= 80) {
      setGototop(true);
    } else {
      setGototop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  // changeShadows();
  if (typeof window !== "undefined") {
    window.welcomeMessage = "Welcome to CodingDeft!";
  }

  useEffect(() => {
    window.addEventListener("scroll", changeShadows);
    window.addEventListener("scroll", gototop_function);
  }, []);
  const cartValue = useSelector((state) => state.cart.cartValue);

  if (cartValue > 0) {
    const cartValue_ = true;
  }
  const cartValue_ = false;

  return (
    <div className="header">
      <div className={navbar ? "header__top shadows" : "header__top"}>
        <div className="mob_menu">
          <AiOutlineMenu className="icon" />
        </div>
        <div className="header__logo">
          <img src="/logo.png" alt="LOGO" />
          <Link href="/">
            <a>
              <h1>Bizmerce</h1>
            </a>
          </Link>
        </div>
        <div className="header__right">
          <div className="header__menu">
            <div
              className={
                router.pathname == "/"
                  ? "header__menu_ active"
                  : "header__menu_"
              }
            >
              <Link href="/">
                <a>
                  <h3>Home</h3>
                </a>
              </Link>

              <div
                className={router.pathname == "/" ? "line line_active" : "line"}
              ></div>
            </div>
            <div
              className={
                router.pathname == "/shop"
                  ? "header__menu_ active"
                  : "header__menu_"
              }
            >
              <Link href="/store">
                <a>
                  <h3>Store</h3>
                </a>
              </Link>
              <div
                className={
                  router.pathname == "/store" ? "line line_active" : "line"
                }
              ></div>
            </div>
            <div
              className={
                router.pathname == "/about"
                  ? "header__menu_ active"
                  : "header__menu_"
              }
            >
              <Link href="/about">
                <a>
                  <h3>About</h3>
                </a>
              </Link>
              <div
                className={
                  router.pathname == "/about" ? "line line_active" : "line"
                }
              ></div>
            </div>
            <div
              className={
                router.pathname == "/contact"
                  ? "header__menu_ active"
                  : "header__menu_"
              }
            >
              <Link href="/contact">
                <a>
                  <h3>Contact</h3>
                </a>
              </Link>
              <div
                className={
                  router.pathname == "/contact" ? "line line_active" : "line"
                }
              ></div>
            </div>
            <div
              className={
                router.pathname == "/blog"
                  ? "header__menu_ active"
                  : "header__menu_"
              }
            >
              <Link href="/blog">
                <a>
                  <h3>Blog</h3>
                </a>
              </Link>
              <div
                className={
                  router.pathname == "/blog" ? "line line_active" : "line"
                }
              ></div>
            </div>
          </div>
          <div className="header__auth">
            <div className="header__cart">
              <BsCart4 className="icon" />
              {cartValue_ ? <div /> : <span>{cartValue}</span>}
            </div>
            <div className="header__account">
              <RiAccountCircleLine className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__icon">
          <Link href="/">
            <a>
              <GoHome
                className={router.pathname == "/" ? "icon icon_active" : "icon"}
              />
            </a>
          </Link>
        </div>
        <div className="header__bottom__icon">
          <Link href="/store">
            <a>
              <BiStore
                className={
                  router.pathname == "/store" ? "icon icon_active" : "icon"
                }
              />
            </a>
          </Link>
        </div>
        <div className="header__bottom__icon">
          <Link href="/wishlist">
            <a>
              <BiHeart
                className={
                  router.pathname == "/wishlist" ? "icon icon_active" : "icon"
                }
              />
            </a>
          </Link>
        </div>
        <div className="header__bottom__icon">
          <Link href="/account">
            <a>
              <CgProfile
                className={
                  router.pathname == "/account  " ? "icon icon_active" : "icon"
                }
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
