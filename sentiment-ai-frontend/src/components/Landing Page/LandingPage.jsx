import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="container">
      <p className="description">
        Our website provides businesses with a powerful tool for analyzing
        consumer sentiment and improving sales. By leveraging the latest machine
        learning techniques and <span className="highlight">Intel oneAPI</span>{" "}
        libraries, we can help businesses better understand their customers and
        tailor their messaging and advertising to appeal to their target
        audience.
      </p>
      <img src="assets/intel.png" width={500} height={400} alt="" />
      <p className="description">
        Our machine learning model can analyze social media activity to
        determine consumer sentiment towards a particular content, taking into
        account various features of the social media data, such as the latest
        news, resources, topic of the media resources, and popularity on the
        social media.
      </p>
      <p className="description">
        By using <span className="highlight">Intel oneAPI</span> libraries, we
        can achieve high performance on Intel architecture, enabling us to
        process large amounts of social media data quickly and accurately.
      </p>
      <div className="button-container">
        <Link to="/about">Learn More</Link>
      </div>
    </div>
  );
}

export default LandingPage;
