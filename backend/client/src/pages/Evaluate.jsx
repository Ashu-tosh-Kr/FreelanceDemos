import React, { useContext } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function Evaluate() {
  const { data } = useContext(DataContext);

  return (
    <>
      <Hero hero="hero">
        <Banner title="Evaluate">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <div className="eval-container">
        <div className="eval-container-center">
          {data.map((item, index) => (
            <article key={index} className="eval-item">
              <div className="img-container">
                <img src={item.img} alt="" />
                <Link
                  to={`/evaluate/${item.slug}`}
                  className="btn-primary eval-link"
                >
                  Evaluate
                </Link>
              </div>
              <p className="item-info">{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
