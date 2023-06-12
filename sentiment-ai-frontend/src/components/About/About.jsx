import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container">
      <h1 className="section-title">About the Project</h1>
      <p className="description">
        The Consumer Sentiment Analysis project was created to help businesses
        better understand their customers and improve sales by analyzing
        consumer sentiment towards their products and services. The project uses
        machine learning techniques to analyze social media data and determine
        consumer sentiment towards specific content.
      </p>
      <p className="description">
        The methodology used to build the predictive model involved
        preprocessing the data using techniques such as tokenization, stopword
        removal, and stemming. The data was then transformed using various
        feature engineering techniques to extract relevant features that could
        be used to predict sentiment.
      </p>
      <p className="description">
        Consumer sentiment analysis is becoming increasingly important for
        businesses as they strive to better understand their customers and
        tailor their messaging and advertising to appeal to their target
        audience. By analyzing consumer sentiment, businesses can identify areas
        for improvement, address customer complaints, and ultimately increase
        customer satisfaction and loyalty.
      </p>
      <p className="description">
        daal4py is a library that provides Python bindings for Intel's Data
        Analytics Acceleration Library (Intel DAAL). Intel DAAL is a powerful
        library for high-performance data analytics that provides a wide range
        of algorithms for tasks such as classification, regression, clustering,
        and more. With daal4py, optimized algorithms of Intel DAAL can be used
        from within Python applications, making it easier to achieve high
        performance on Intel architecture.
      </p>
      <p className="description">
        daal4py is designed to be user-friendly, with a simple API that makes it
        easy to get started with Intel DAAL in Python. Pythonic interfaces to
        Intel DAAL's algorithms are provided by daal4py, so that Python
        developers can take advantage of Intel DAAL's performance benefits
        without needing to learn a new programming language or complex API.
      </p>
      <p className="description">
        A number of performance optimizations are also provided by daal4py to
        help Python developers achieve the best possible performance on Intel
        architecture. For example, parallelism in Intel DAAL algorithms can be
        enabled to take advantage of multicore CPUs through support for Intel's
        Threading Building Blocks (TBB) library. It also provides support for
        Intel Math Kernel Library (Intel MKL), which is a highly optimized set
        of mathematical functions that can be used to accelerate many common
        machine learning tasks.
      </p>
      <p className="description">
        daal4py is used in this project to train the Ridge Regression and Random
        Forest Regressor models efficiently. By using daal4py's optimized
        algorithms and support for Intel MKL, high performance can be achieved
        on Intel architecture, enabling large amounts of social media data to be
        processed quickly and accurately.
      </p>
    </div>
  );
}

export default About;
