import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing Page/LandingPage";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/About";
import Prediction from "./components/Predictions/predictions";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
