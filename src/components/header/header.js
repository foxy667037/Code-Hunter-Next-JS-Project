"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (!isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        gsap.to(menuRef.current, {
          x: "-100%",
          duration: 0.5,
          ease: "power3.in",
        });
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.hamburgerContainer}`)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveLink(0);
        break;
      case "/blogs":
        setActiveLink(1);
        break;
      case "/about":
        setActiveLink(2);
        break;
      case "/contact":
        setActiveLink(3);
        break;
      default:
        setActiveLink(0);
        break;
    }
  }, [pathname]);

  const getBorderStyle = () => {
    switch (activeLink) {
      case 0:
        return { left: "0", width: "65px" };
      case 1:
        return { left: "85px", width: "62px" };
      case 2:
        return { left: "164px", width: "95px" };
      case 3:
        return { left: "274px", width: "105px" };
      default:
        return { left: "0", width: "65px" };
    }
  };

  return (
    <header className={styles.navbar}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.socialIcons}>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaGoogle />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>

        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>Tech | Script</span>
        </div>

        {/* Hamburger Menu */}
        <div className={styles.hamburgerContainer} onClick={toggleMenu}>
          <button className={styles.hamburger}>
            <div
              className={`${styles.line} ${isOpen ? styles.line1 : ""}`}
            ></div>
            <div
              className={`${styles.line} ${isOpen ? styles.line2 : ""}`}
            ></div>
            <div
              className={`${styles.line} ${isOpen ? styles.line3 : ""}`}
            ></div>
          </button>
        </div>

        {/* Login Button */}
        <div className={styles.loginContainer}>
          <button className={styles.loginButton}>
            Login <span className={styles.arrow}></span>
          </button>
        </div>
      </div>
      <div className={styles.bottomBorder}></div>

      {/* Navigation Menu */}
      <nav className={styles.menu}>
        <div>
          <ul>
            <li>
              <Link
                href="/"
                className={activeLink === 0 ? styles.activeLink : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={activeLink === 1 ? styles.activeLink : ""}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={activeLink === 2 ? styles.activeLink : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={activeLink === 3 ? styles.activeLink : ""}
              >
                Contact Us
              </Link>
            </li>
            <div className={styles.border} style={getBorderStyle()}></div>
          </ul>
        </div>
      </nav>

      {/* Side Navbar */}
      <div ref={menuRef} className={styles.sideMenu}>
        <h2 className={styles.heading}>Menu</h2>
        <hr className={styles.divider} />
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <Link href="/blogs" className={styles.link}>
            Blogs
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;