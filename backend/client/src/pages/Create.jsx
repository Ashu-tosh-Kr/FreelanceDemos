import React, { useContext } from "react";
import FileUpload from "../components/FileUpload";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import { DataContext } from "../Context";

export default function Create() {
  const { msg } = useContext(DataContext);

  return (
    <>
      <Hero hero="hero">
        <Banner title="Create">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <div className="create-container">
        <div className="upload create-item">
          {msg ? <Message msg={msg} /> : null}
          <FileUpload />
        </div>
      </div>
    </>
  );
}
