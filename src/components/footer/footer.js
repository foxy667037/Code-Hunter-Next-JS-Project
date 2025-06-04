"use client";
import React from "react";
import Styles from "./footer.module.css";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={Styles.footer}>
        <div className={Styles.footerTop}>
          <h2>Let’s get started on something great</h2>
          <p>Explore over 4,000+ blogs right now and dive into a world of endless knowledge and inspiration.</p>
          <div className={Styles.footerButtons}>
            <button className={`${Styles.btn} ${Styles.chatBtn}`}>
              Talk to us <FaArrowRight />
            </button>
            <button className={`${Styles.btn} ${Styles.getStartedBtn}`}>
              Get started <FaArrowRight />
            </button>
          </div>
        </div>

        <div className={Styles.footerLinks}>
          <div className={Styles.column}>
            <h4>Product</h4>
            <a href="#">Overview</a>
            <a href="#">Features</a>
            <a href="#">Solutions</a>
            <a href="#">Tutorials</a>
          </div>
          <div className={Styles.column}>
            <h4>Company</h4>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className={Styles.column}>
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Help center</a>
            <a href="#">Tutorials</a>
            <a href="#">Support</a>
          </div>
          <div className={Styles.column}>
            <h4>Use Cases</h4>
            <a href="#">Startups</a>
            <a href="#">Marketplaces</a>
            <a href="#">Ecommerce</a>
          </div>
          <div className={Styles.column}>
            <h4>Social</h4>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">GitHub</a>
          </div>
          <div className={Styles.column}>
            <h4>Legal</h4>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className={Styles.bottomBorder}></div>
        <div className={Styles.footerBottom}>
          <p>© 2025 Tech | Script. All rights reserved.</p>
        </div>
      </footer>
      <footer>
        <div className={Styles.secondFooter}>
          <h6>
            Created with love by <span>Foxy</span>
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
