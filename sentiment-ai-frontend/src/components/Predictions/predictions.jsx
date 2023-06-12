import React, { useState } from "react";
import axios from "axios";
import "./predictions.css";

function Prediction() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .get(`https://sentiback.onrender.com/${id}`)
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="container-pred">
      <h1 className="section-title">Prediction</h1>
      <form className="prediction-form" onSubmit={handleFormSubmit}>
        <label>
          Enter ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button type="submit" className="btn">
          Predict
        </button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        result && (
          <div className="ans">
            <p>
              <strong>Sentiment Title:</strong> {result.SentimentTitle}
            </p>
            <p>
              <strong>Sentiment Headline:</strong> {result.SentimentHeadline}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default Prediction;
