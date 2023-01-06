import React from "react";

const About = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="card mb-3 p-5  ">
        <div className="card-body ">
          <h4 className="card-title ">About Us</h4>
          <p className="card-text ">
            This is DummyNews app not a real app created for project and practice purposes only.
          </p>
          <p className="card-text text-primary">
            <small className="text-muted">
              copyright@2022 | All rights reserve
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
