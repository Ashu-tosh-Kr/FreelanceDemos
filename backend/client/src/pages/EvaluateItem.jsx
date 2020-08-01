import React, { useContext } from "react";
import { DataContext } from "../Context";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

export default function EvaluateItem(props) {
  const { getSubmission, rating } = useContext(DataContext);
  const task = getSubmission(props.match.params.slug);

  return (
    <>
      <Hero hero="hero">
        <Banner title={`Evaluate ${task.title}`}>
          <Link to="/evaluate" className="btn-primary">
            Back To Evaluate
          </Link>
        </Banner>
      </Hero>
      {task.submissions.length === 0 ? (
        <div className="error">No Submissions Yet</div>
      ) : (
        <div className="eval-container">
          <div className="eval-container-center">
            {task.submissions.map((item, index) => (
              <article key={index} className="eval-item">
                <div className="img-container">
                  <img src={item.url} alt="" />
                </div>
                <p className="item-info">{item.student}</p>
                <div className="rating">
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                      name={item.student}
                      value={item.rating}
                      max={10}
                      onChange={(e) => {
                        rating(e, task, e.target.name);
                      }}
                    />
                  </Box>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
