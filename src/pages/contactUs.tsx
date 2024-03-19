import React, { CSSProperties } from "react";
import Navigation from "../layouts/navigation";
import Footer2 from "../layouts/footer2";
import "bootstrap/dist/css/bootstrap.min.css";

const pageStyle: CSSProperties = {
  backgroundColor: "#edf5ee",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  color: "black",
  paddingBottom: "270px",
};

const cardStyle: CSSProperties = {
  backgroundColor: "#f5f5f5",
  textAlign: "center",
  alignItems: "center",
  margin: "auto",
  width: "800px",
  height: "450px",
};

const textBoxAreaStyle = {
  marginLeft: "100px",
  marginRight: "100px",
  marginTop: "20px",
};

function ContactUs() {
  // on submit -- make sure no spam and messages
  // formik helpers
  return (
    <div className="entire-container" style={pageStyle}>
      <div className="container">
        <Navigation />
      </div>
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>Contact Us!</h1>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Let us know how we can help you!</h2>
      </div>
      <div
        className="container"
        style={{ marginTop: "40px", marginBottom: "100px" }}
      >
        <div className="card" style={cardStyle}>
          <div className="card-body" style={{ backgroundColor: "transparent" }}>
            {/* <form> className="needs-validation" novalidate */}
            <form>
              <div
                className="row"
                style={{ justifyContent: "center", marginTop: "20px" }}
              >
                <div className="form-group col-md-5">
                  <label htmlFor="inputFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-5">
                  <label htmlFor="inputLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPhoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputPhoneNumber"
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
              </div>
              <div className="row" style={textBoxAreaStyle}>
                <label htmlFor="inputTextArea">
                  If you have any questions, let us know below!
                </label>
                <textarea
                  className="form-control"
                  id="inputTextArea"
                  style={{ height: "150px" }}
                ></textarea>
              </div>
              <div className="container" style={{ margin: "20px" }}>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default ContactUs;
