import React from "react";
import Back from "../common/back/Back";
import "./Contact.css"
const Contact = () => {
  return (
    <>
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310565569!2d79.87932869613758!3d13.047985947734507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680754844745!5m2!1sen!2sin"
              width="530"
              height="450"
              style={{ border: "0px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
          <div className="right row">
            <h1 style={{fontFamily: "sans-serif"}}>Contact Us</h1>
            <div className="items grid2">
              <div className="box">
                <h4>Address:</h4>
                <p>Chennai, Tamil Nadu, India, Asia</p>
              </div>
              <div className="box">
                <h4>Email:</h4>
                <p>psr@pragnaclasses.ac.in</p>
              </div>
              <div className="box">
                <h4>Phone:</h4>
                <p> +91 9500014341</p>
              </div>
            </div>
            {/* <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name " />
                <input type="email" placeholder="Email " />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">Send Message</button>
            </form> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
