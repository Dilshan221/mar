// src/pages/Contact.jsx
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="content-wrapper">
      {/* Page Header */}
      <div className="divider-top">
        <div className="header-info col-md-12">
          <div className="inside-wrapper container">
            <h1>Contact</h1>
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Contact</li>
            </ul>
          </div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Page Content */}
      <div className="content-box container">
        <section className="inside-page">
          <div className="inside-wrapper container">
            <h2>Get in Touch with us</h2>
            <p>
              We'd love to hear from you! Fill out the form below or use the
              contact details to reach us directly.
            </p>

            {/* Contact Info Boxes */}
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

            {/* Contact Form */}
            <div className="row margin1">
              <div className="col-md-7">
                <h4 className="title no-margin-top">Write us a Message</h4>
                <form id="contact_form">
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
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control input-field"
                      />
                    </div>
                    <div className="col-md-12">
                      <label>
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        name="message"
                        className="textarea-field form-control"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary mt-2">
                    Send message
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="col-md-5">
                <div id="map-canvas" style={{ height: "300px" }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
