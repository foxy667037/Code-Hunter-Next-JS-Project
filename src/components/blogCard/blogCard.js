"use client";

import React from "react";
import Image from "next/image";
import Styles from "./blogCard.module.css";
import { useState, useEffect } from "react";
import Loader from "../loader/loader";
import Link from "next/link";

const BlogCard = ({ numberOfBlogs }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const truncateWord = (description, length) => {
    const words = description.split(' ');
    if (words.length > length) {
      return words.slice(0, length).join(' ') + '...';
    }
    return description;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/fetchBlogs");
        const data = await response.json();

        // Limit blog posts to 6 for the home page
        if (numberOfBlogs === "limited") {
          setBlogPosts(data.slice(0, 6));
        } else if (numberOfBlogs === "all") {
          setBlogPosts(data);
        } else {
          setBlogPosts(data);
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [numberOfBlogs]);

  // Show loader while data is being fetched
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={Styles.cardContainer}>
      {blogPosts.map((post, index) => (
        <div key={index} className={Styles.card}>
          <Link href={`/blogs/${post.slug}`}>
            <Image
              src={post.image}
              alt={post.title}
              width={380}
              height={300}
              className={Styles.cardImage}
            />
          </Link>
          <div className={Styles.cardContent}>
            <span className={`${Styles.tag} ${Styles[post.tag.toLowerCase()]}`}>
              {post.tag}
            </span>
            <Link href={`/blogs/${post.slug}`}>
              <h3>{truncateWord(post.title, 5)}</h3>
            </Link>
            <p>{truncateWord(post.description, 5)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
