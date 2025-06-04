"use client";

import React, { useState, useEffect } from "react";
import Styles from "./contact.module.css";
import Loader from "@/components/loader/loader";

const Page = () => {
  const [isPageLoading, setisPageLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    province: "",
    address: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      province: "",
      address: "",
      postalCode: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    handleReset();
  };

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
        <main className={Styles.ContactContainer}>
          <section className={Styles.contactFormContainer}>
            <h3>Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className={Styles.formRow}>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className={`${Styles.leftField} ${
                    formData.firstName ? Styles.hasValue : ""
                  }`}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className={`${Styles.rightField} ${
                    formData.lastName ? Styles.hasValue : ""
                  }`}
                />
              </div>
              <div className={Styles.formRow}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className={`${Styles.leftField} ${
                    formData.email ? Styles.hasValue : ""
                  }`}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className={`${Styles.rightField} ${
                    formData.phone ? Styles.hasValue : ""
                  }`}
                />
              </div>
              <div className={Styles.formRow}>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  required
                  className={`${Styles.leftField} ${
                    formData.country ? Styles.hasValue : ""
                  }`}
                />
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  placeholder="Province"
                  required
                  className={`${Styles.rightField} ${
                    formData.provice ? Styles.hasValue : ""
                  }`}
                />
              </div>
              <div className={Styles.formRow}>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  required
                  className={`${Styles.leftField} ${
                    formData.address ? Styles.hasValue : ""
                  }`}
                />
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  required
                  className={`${Styles.rightField} ${
                    formData.postalCode ? Styles.hasValue : ""
                  }`}
                />
              </div>
              <div className={Styles.formRow}>
                <button
                  type="button"
                  onClick={handleReset}
                  className={Styles.leftField}
                >
                  Reset Fields
                </button>
                <button
                  type="submit"
                  disabled={
                    !formData ||
                    Object.values(formData).some((value) => value.trim() === "")
                  }
                  className={Styles.rightField}
                >
                  Submit
                </button>
              </div>
            </form>
            <div className={Styles.underLine}></div>
            <h4>Contact Options</h4>
            <div className={Styles.contactOptions}>
              <p>
                <span>
                  <span className="spanColor">Phone Number:</span> +123-456-7890{" "}
                  {"  "}
                </span>
                <span>
                  <span className="spanColor">WhatsApp:</span> +123-456-7890
                </span>
              </p>
              <p>
                <span>
                  <span className="spanColor">Email:</span> contact@example.com{" "}
                  {"  "}
                </span>
                <span>
                  <span className="spanColor">Other:</span> LinkedIn / Social
                  Links
                </span>
              </p>
            </div>
          </section>
        </main>
      )}
      <style jsx>{`
        .spanColor {
          color: transparent;
          background: linear-gradient(to right, #401fff, #7546f8fa);
          -webkit-background-clip: text;
          font-weight: 600;
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Page;
