"use client";

import { useState, useEffect } from "react";
import styles from "./about.module.css";
import Loader from "@/components/loader/loader";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPageLoading, setisPageLoading] = useState(true);

  useEffect(() => {
    setisPageLoading(true);
    const timer = setTimeout(() => {
      setisPageLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Who Are We?",
      content:
        "We are a team of passionate bloggers dedicated to sharing knowledge, ideas, and inspiration through our carefully crafted articles. Our mission is to provide engaging content that informs, entertains, and sparks meaningful conversations.",
    },
    {
      title: "Why Did We Start This Blog?",
      content:
        "Our blog was born from a desire to create a space where readers can explore a variety of topics — from personal development and lifestyle to tech, travel, and more. We believe in the power of storytelling to bring people together and make a positive impact.",
    },
    {
      title: "What Topics Do We Cover?",
      content:
        "We cover a wide range of topics, including technology, lifestyle, personal growth, business, health, and travel. Our goal is to provide something valuable for everyone, whether you're looking for practical advice, insightful opinions, or creative inspiration.",
    },
    {
      title: "How Can You Contribute?",
      content:
        "We love hearing from our readers! If you have a story to share, an idea to pitch, or feedback to offer, feel free to get in touch. We welcome guest contributions and collaborations that align with our blog's values.",
    },
    {
      title: "What Is Our Mission?",
      content:
        "Our mission is to build a community of curious minds who love to learn, grow, and connect through the power of words. We strive to inspire our readers to see the world from new perspectives and embrace lifelong learning.",
    },
  ];

  return (
    <>
      {isPageLoading ? (
        <Loader />
      ) : (
        <main className={styles.aboutContainer}>
          <section className={styles.aboutSection}>
            <h2 className={styles.title}>
              About <span>Us</span>
            </h2>

            <section className={styles.contentWrapper}>
              {/* Left Content */}
              <section className={styles.leftContent}>
                <h3>Welcome to Our Blogging World!</h3>
                <p>
                  Our blog is a creative space where stories come to life. We
                  believe that everyone has a unique story to tell, and through
                  our platform, we aim to inspire, educate, and entertain
                  readers from around the world.
                </p>
                <p>
                  Whether you are here to find practical tips, personal growth
                  insights, or simply enjoy a good read, our blog offers
                  something for everyone. We cover a wide range of topics,
                  including technology, lifestyle, travel, health, and more.
                </p>
                <p>
                  We’re passionate about building a community of curious minds
                  who love to learn, explore, and connect. Join us on this
                  journey as we share meaningful content that makes a
                  difference.
                </p>
                <button className={styles.knowMoreButton}>Know More</button>
              </section>

              {/* Right Accordion */}
              <aside className={styles.rightAccordion}>
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.accordionItem} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                  >
                    <h4
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.title}
                      <span
                        className={`${styles.icon} ${
                          activeIndex === index ? styles.rotate : ""
                        }`}
                      >
                        +
                      </span>
                    </h4>
                    <div
                      className={styles.accordionContent}
                      style={{
                        maxHeight: activeIndex === index ? "200px" : "0",
                        opacity: activeIndex === index ? 1 : 0,
                        transition: "max-height 0.4s ease, opacity 0.4s ease",
                      }}
                    >
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </aside>
            </section>
          </section>
        </main>
      )}
    </>
  );
};
export default Page;
