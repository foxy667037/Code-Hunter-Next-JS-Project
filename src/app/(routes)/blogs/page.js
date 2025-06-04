import React from "react";
import BlogCard from "@/components/blogCard/blogCard";
import Styles from "./blogs.module.css";

const page = () => {
  return (
    <main className={Styles.container}>
      <section className={Styles.allBlogSection}>
        <h2 className={Styles.allBlogHeading}>All Blogs</h2>
        <BlogCard numberOfBlogs={"all"}/>
      </section>
    </main>
  );
};

export default page;
