import React from "react";
import Styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={Styles.loaderContainer}>
      <div className={Styles.spinner}></div>
      <p>Loading blogs...</p>
    </div>
  );
};

export default Loader;
