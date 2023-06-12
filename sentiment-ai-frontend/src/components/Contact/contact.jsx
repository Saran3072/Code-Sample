import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="container-contact">
      <h1 className="section-title">Contact Us</h1>
      <div className="contact-info">
        <p>Email: 20211a6615@bvrit.ac.in</p>
        <p>Phone: +91 7095608173</p>
      </div>
      <div className="team-members">
        <h1 className="section-title">Meet the Team</h1> <br />
        <div className="team-member">
          <img src="assets/saran.jpg" alt="Team member 1" />
          <p>Name: Dammavalam Sai Saran</p>
          <p>Role: Machine Learning Engineer/ Full Stack Developer</p>
          <p>Email: 20211a6615@bvrit.ac.in</p>
        </div>
        <div className="team-member">
          <img src="assets/sevanth.JPG" alt="Team member 2" />
          <p>Name: Sevanth Gajula</p>
          <p>Role: Machine Learning Engineer/ IoT Developer</p>
          <p>Email: 20211a6650@bvrit.ac.in</p>
        </div>
        <div className="team-member">
          <img src="assets/aditya.jpg" alt="Team member 3" />
          <p>Name: Aditya Reddy</p>
          <p>Role: Machine Learning Engineer/ UI/UX Designer</p>
          <p>Email: 20211a6655@bvrit.ac.in</p>
        </div>
        <div className="team-member">
          <img src="assets/sravya.jpg" alt="Team member 4" />
          <p>Name: Sravya Nekkanti</p>
          <p>Role:  Machine Learning Engineer/ PythonDeveloper</p>
          <p>Email: 20211a6638@bvrit.ac.in</p>
        </div>
        <div className="team-member">
          <img src="assets/sravanthi.jpg" alt="Team member 5" />
          <p>Name: Aramandla Sravanthi</p>
          <p>Role:  Machine Learning Engineer/ Frontend Developer</p>
          <p>Email: 20211a6605@bvrit.ac.in</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
