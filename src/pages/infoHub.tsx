import React, { CSSProperties } from "react";
import Navigation from "../layouts/navigation";
import Footer2 from "../layouts/footer2";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO:
// 1) Fill out FAQ
// 2) Contact Us feature
// 3) Combine all styles

const pageStyle: CSSProperties = {
  backgroundColor: "#edf5ee",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  color: "black",
  paddingBottom: "250px",
};

const cardStyle: CSSProperties = {
  backgroundColor: "#f5f5f5",
  textAlign: "center",
  alignItems: "center",
  margin: "auto",
  width: "800px",
  height: "600px",
};

const cardStyle2: CSSProperties = {
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    alignItems: "center",
    margin: "auto",
    width: "800px",
    height: "450px",
  };

const cardBodyStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%", // Ensures that the content is centered vertically
};

const textBoxAreaStyle = {
  marginLeft: "100px",
  marginRight: "100px",
  marginTop: "20px",
};

function InfoHub() {
  return (
    <div className="entire-container" style={pageStyle}>
      {/* This will be faq section */}
      <div className="container" id="FAQ">
        <Navigation />
      </div>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            marginTop: "40px",
            marginBottom: "100px",
          }}
        >
          Frequently Asked Questions
        </h1>
      </div>
      <div className="card" style={cardStyle}>
        <div className="container" style={cardBodyStyle}>
          <ol>
            <li>What materials can be laser engraved?</li>
            <p>We can engrave on</p>
            <li>What types of items can I have laser engraved?</li>
            <p>Some items</p>
            <li>What is the maximum size that can be laser engraved?</li>
            <p>The maximum size that can be engraved is </p>
            <li>How long does the laser engraving process typically take?</li>
            <p>The laser engraving process typically takes</p>
            <li>Can you accomodate bulk orders?</li>
            <p>
              We are able to do bulk orders but we ask for one week orders over
              ---
            </p>
            <li>Do you offer gift-wrapping or packaging options?</li>
                <p>
                    We can provide packaging options for special events or occasions
                    if requested. There will be an added fee for the packaging.
                </p>
            <li>Do you provide proofs before engraving the final product?</li>
            <p>
              We do provide proofs througout the customization process and will
              only proceed once you have approved the design.
            </p>
          </ol>
        </div>
      </div>
      {/* This will be return policy section */}
      <div className="container" id="ReturnPolicy">
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          Return Policy
        </h1>
      </div>
      <div
        className="container"
        style={{ marginTop: "40px", marginBottom: "100px" }}
      >
        <div className="card" style={cardStyle2}>
          <div className="card-body" style={cardBodyStyle}>
            <h3>
              Due to the personalized nature of our products, we do not allow
              returns. Throughout the customization process we encourage any and
              all feedback so we can bring to life exactly what you are
              envisioning. If you have any questions about the process or
              returns please contact us at our email{" "}
              <a href="mailto:allisonsobol13@gmail.com">
                companyname@example.com
              </a>
              .
            </h3>
          </div>
        </div>
      </div>
      {/* This will be contact us section */}
      <div className="container" id="ContactUs">
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

export default InfoHub;
