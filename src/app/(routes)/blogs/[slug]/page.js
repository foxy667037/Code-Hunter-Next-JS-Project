"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Styles from "./blogData.module.css";
import Image from "next/image";
import Loader from "@/components/loader/loader";

const Page = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [blogPostData, setBlogPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) throw new Error("Failed to fetch blog post");
        const data = await response.json();
        setBlogPostData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [slug]);

  if (loading) return <div className={Styles.loading}><Loader /></div>;
  if (error) return <div className={Styles.error}>Error: {error}</div>;
  if (!blogPostData)
    return <div className={Styles.notfound}>No blog post found.</div>;

  return (
    <div className={Styles.pageContainer}>
      <section className={Styles.blogContent}>
        <div className={Styles.blogHeader}>
          <Image
            src={blogPostData.image}
            width={380}
            height={600}
            quality={100}
            alt={blogPostData.title}
            className={Styles.blogImage}
          />
          <div className={Styles.blogmeta}>
            <h2>
              {blogPostData.title} <span>({blogPostData.tag})</span>
            </h2>
            <div className={Styles.description}>
              <span>{blogPostData.description}</span>
              <span className={Styles.time}>{blogPostData.date}</span>
            </div>
          </div>
        </div>
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: blogPostData.content }}
        />
      </section>
    </div>
  );
};

export default Page;
