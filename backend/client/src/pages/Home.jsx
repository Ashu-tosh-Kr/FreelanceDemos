import React from "react";
import { Link } from "react-router-dom";
import { button } from "@material-ui/core";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Hero hero="hero">
        <Banner title="Home"></Banner>
      </Hero>
      <div className="path-container">
        <div className="path">
          <button className="btn-primary" variant="contained" color="primary">
            <Link to="/create">Create</Link>
          </button>
        </div>
        <div className="path">
          <button className="btn-primary" variant="contained" color="primary">
            <Link to="/evaluate">Evaluate</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
