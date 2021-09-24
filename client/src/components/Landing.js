import React from "react";

function Landing() {
  return (
    <div className="container">
      <div className="container mt-5 d-flex top-landing-container">
        <a
          className="btn btn-lg form-control text-center study-btn"
          href="/microbiology"
        >
          Study Microbiology
        </a>
        <a
          className="btn btn-lg form-control text-center ml-1 manage-btn"
          href="/managebio"
        >
          Manage
        </a>
      </div>
      <div className="container d-flex landing-container">
        <a className="btn btn-lg form-control text-center study-btn" href="#">
          Study Anatomy
        </a>
        <a
          className="btn btn-lg form-control text-center ml-1 manage-btn"
          href="#"
        >
          Manage
        </a>
      </div>
      <div className="container d-flex landing-container">
        <a
          className="btn btn-lg form-control text-center study-btn disabled"
          href="#"
        >
          Study Anatomy II
        </a>
        <a
          className="btn btn-lg form-control text-center ml-1 manage-btn disabled"
          href="#"
        >
          Manage
        </a>
      </div>
      <div className="container d-flex landing-container">
        <a
          className="btn btn-lg form-control text-center study-btn disabled"
          href="#"
        >
          Study Principles of Health & Disease
        </a>
        <a
          className="btn btn-lg form-control text-center ml-1 manage-btn disabled"
          href="#"
        >
          Manage
        </a>
      </div>
      <div className="container d-flex landing-container">
        <a
          className="btn btn-lg form-control text-center study-btn disabled"
          href="#"
        >
          Study Pathophysiology
        </a>
        <a
          className="btn btn-lg form-control text-center ml-1 manage-btn disabled"
          href="#"
        >
          Manage
        </a>
      </div>
      <div className="container d-flex landing-container">
        <a
          className="btn btn-lg form-control text-center study-btn disabled"
          href="#"
        >
          Study Human Development
        </a>
        <a
          className="btn btn-lg form-control text-center ml-1 manage-btn disabled"
          href="#"
        >
          Manage
        </a>
      </div>
      <div className="container d-flex landing-container">
        <a className="btn btn-lg form-control text-center study-btn" href="#">
          Study DS & Algorithms
        </a>
        <a
          className="btn btn-lg form-control text-center ml-1 manage-btn"
          href="#"
        >
          Manage
        </a>
      </div>
    </div>
  );
}

export default Landing;
