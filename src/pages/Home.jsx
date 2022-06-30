import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-3">
        <img
          src="./background.png"
          className="card-img"
          alt="background img"
          height="700"
        />
        <div className="card-img-overlay d-flex flex-column justify-content">
          <div className="container"></div>
          <h5 className="card-title display-6 fw-bolder mb-0" style={{ color: 'red' }}>
            Search for ...
          </h5>
          <p className="card-text lead fs-2" style={{ color: 'blue' }}>Restaurants, Hotels and Attractions.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
