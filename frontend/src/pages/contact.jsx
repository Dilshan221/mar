import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();

  const products = ["Laptop", "Smartphone", "Headphones", "Camera"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.rating = rating;
    console.log("Review Submitted:", data);
    alert("Review submitted successfully!");
    e.target.reset();
    setRating(0);
    setHover(0);
  };

  return (
    <div className="content-wrapper">
      {/* Page Header */}
      <div className="divider-top">
        <div className="header-info col-md-12">
          <div className="inside-wrapper container">
            <h1>Submit Review</h1>
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Review</li>
            </ul>
          </div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Page Content */}
      <div className="content-box container">
        <section className="inside-page">
          <div className="inside-wrapper container">
            <h2>We Value Your Feedback</h2>
            <p>
              Share your experience with us. Your reviews help us improve our
              products and services.
            </p>

            {/* Contact-style Info Cards */}
            <div className="row contact-boxes text-center margin1">
              <div className="col-md-3">
                <div className="box-hover icon p-2">
                  <i className="fa fa-envelope small-icon"></i>
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:email@yoursite.com">email@yoursite.com</a>
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="box-hover icon p-2">
                  <i className="fa fa-clock small-icon"></i>
                  <h5>Hours</h5>
                  <p>
                    Mon - Fri: 9am to 6pm <br /> Weekends closed
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="box-hover icon p-2">
                  <i className="fa fa-map-marker small-icon"></i>
                  <h5>Location</h5>
                  <p>Cake Street 123, New York</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="box-hover icon p-2">
                  <i className="fa fa-phone small-icon"></i>
                  <h5>Call us</h5>
                  <p>(123) 456-789</p>
                </div>
              </div>
            </div>

            {/* Review Form + Map */}
            <div className="row margin1">
              {/* Form */}
              <div className="col-md-7">
                <h4 className="title no-margin-top">Write a Review</h4>
                <form id="review_form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control input-field"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <label>
                        Product <span className="required">*</span>
                      </label>
                      <select
                        name="product"
                        className="form-control input-field"
                        required
                      >
                        <option value="">Select a product</option>
                        {products.map((p, i) => (
                          <option key={i} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <label>
                        Rating <span className="required">*</span>
                      </label>
                      <div
                        className="stars"
                        style={{ fontSize: "24px", marginBottom: "8px" }}
                      >
                        {[...Array(5)].map((star, index) => {
                          const ratingValue = index + 1;
                          return (
                            <i
                              key={index}
                              className={`fa fa-star ${
                                ratingValue <= (hover || rating)
                                  ? "text-warning"
                                  : "text-secondary"
                              }`}
                              style={{ cursor: "pointer", marginRight: "8px" }}
                              onClick={() => setRating(ratingValue)}
                              onMouseEnter={() => setHover(ratingValue)}
                              onMouseLeave={() => setHover(rating)}
                            ></i>
                          );
                        })}
                      </div>
                      <small>
                        {rating > 0 ? `You rated ${rating}/5` : "No rating yet"}
                      </small>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <label>
                        Review <span className="required">*</span>
                      </label>
                      <textarea
                        name="review"
                        className="textarea-field form-control"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Review Button */}
                  <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>

              {/* Map + Complaint Button */}
              <div className="col-md-5">
                <div id="map-canvas" style={{ height: "400px", width: "100%" }}>
                  <iframe
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.166248418626!2d80.64925627476697!3d7.877667392144664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca53f7358007b%3A0x6aed4ff0715f9ec1!2sDambulla%20Rock%20Arch!5e0!3m2!1sen!2slk!4v1756835890775!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                {/* Complaint Button - moved here and made more prominent */}
                <div className="mt-3 text-center">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={() => navigate("/complaints")}
                  >
                    Submit Complaint
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;