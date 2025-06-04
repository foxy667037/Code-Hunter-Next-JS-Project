"use client";

import { FaArrowRight } from "react-icons/fa";
import Styles from "./homePage.module.css";
import BlogCard from "@/components/blogCard/blogCard";
import ImageCarousel from "@/components/imageCarousel/imageCarousel";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loader from "@/components/loader/loader";

const images = ["/images/200.jpg", "/images/300.jpg", "/images/400.jpg"];

const Home = () => {
  const [isPageLoading, setisPageLoading] = useState(true);
  useEffect(() => {
    setisPageLoading(true);
    const timer = setTimeout(() => {
      setisPageLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isPageLoading ? (
        <Loader />
      ) : (
        <main className={Styles.container}>
          <section className={Styles.hero}>
            <div className={Styles.ImageSlider}>
              <ImageCarousel images={images} interval={3000} />
            </div>
            <div className={Styles.heroContent}>
              <span className={Styles.featured}>Featured</span>
              <h2 className={Styles.title}>
                Meet the Tech Script: Hunting Bugs, Codes, and Beyond
              </h2>
              <p className={Styles.description}>
                Discover the story of the Tech Script, a passionate coder who
                dives deep into the realms of debugging, solving coding
                mysteries, and sharing his journey to inspire others. From
                cracking complex algorithms to simplifying code, join him on an
                adventurous journey.
              </p>
              <Link href="/blogs" className={Styles.learnMore}>
                Learn More Blogs <FaArrowRight />
              </Link>
            </div>
          </section>
          <section className={Styles.recentBlogSection}>
            <h3 className={Styles.recentBlogHeading}>Recent Blogs</h3>
            <BlogCard numberOfBlogs={"limited"} />
          </section>
          <Link href="/blogs" className={Styles.seeMoreBlogBtn}>
            See More Blogs <FaArrowRight />
          </Link>
        </main>
      )}
    </>
  );
};

export default Home;
