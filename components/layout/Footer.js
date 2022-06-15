import React from "react";
import Link from "next/link";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <div className="footer__logo_">
            <img src="" alt="" />
            <h1>Bizmerce</h1>
          </div>
          <div className="footer__logo__slogan">
            <h3>You need it, We have it!</h3>
          </div>
        </div>
        <div className="footer__contact">
          <div className="footer__contact__head">
            <div className="footer__vertical__line"></div>
            <h2>Contact Info</h2>
          </div>
          <div className="footer__contact_">
            <div className="footer__contact__icon">
              <BiMap className="icon n" />
            </div>
            <div className="footer__contact__content">
              <h4>Address:</h4>
              <h3>Shop no. 5, Shahdara, Sec -141, Noida, U.P, INDIA(201304)</h3>
            </div>
          </div>
          <div className="footer__contact_">
            <div className="footer__contact__icon">
              <BiPhoneCall className="icon n" />
            </div>
            <div className="footer__contact__content">
              <h4>Phone:</h4>
              <h3>
                +91 <a href="tel: 9818525635">9818525635</a>
              </h3>
            </div>
          </div>
          <div className="footer__contact_">
            <div className="footer__contact__icon">
              <AiOutlineMail className="icon n" />
            </div>
            <div className="footer__contact__content">
              <h4>Email:</h4>
              <h3>
                <a href="mailto:info@bizmerce.com">info@bizmerce.com</a>
              </h3>
            </div>
          </div>
          <div className="footer__contact_">
            <div className="footer__contact__icon">
              <CgWebsite className="icon n" />
            </div>
            <div className="footer__contact__content">
              <h4>Website:</h4>
              <h3>
                <Link href="/">
                  <a>bizmerce.com</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="footer__usefull">
          <div className="footer__contact__head">
            <div className="footer__vertical__line"></div>
            <h2>Usefull Links</h2>
          </div>
          <div className="footer__usefull_">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <h3>@Copyright2022 - Bizmerce - Made By Harshit</h3>
      </div>
    </div>
  );
};

export default Footer;
