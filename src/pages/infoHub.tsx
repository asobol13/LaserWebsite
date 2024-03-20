import React, { CSSProperties } from "react";
import Navigation from "../layouts/navigation";
import Footer2 from "../layouts/footer2";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO:
// 1) Contact Us feature

const pageStyle: CSSProperties = {
  backgroundColor: "#edf5ee",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  color: "black",
  paddingBottom: "340px",
};

const headingStyle: CSSProperties = {
    textAlign: "center",
    marginTop: "100px",
    marginBottom: "40px",
};

const cardStyle: CSSProperties = {
  backgroundColor: "#f5f5f5",
  textAlign: "left",
  fontSize: "22px",
  alignItems: "center",
  margin: "auto",
  width: "1000px",
  height: "900px",
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
      <div className="container">
        <Navigation />
      </div>

      <div className="container">
        <h1 style={headingStyle}>
            Frequently Asked Questions
        </h1>
      </div>
      <div className="card" style={cardStyle}>
        <div className="container" style={cardBodyStyle}>
          <ol>
            <li>
              <strong>What materials can be laser engraved?</strong>
            </li>
            <p>
              We can engrave on materials such as glass, acrylic, wood, stone,
              anodized aluminum, powder coated mugs and more! We can also cut
              acrylic, wood, and metal materials when they are less than 1/4".
            </p>
            <li>
              <strong>What types of items can I have laser engraved?</strong>
            </li>
            <p>
              There are many possibilities for the types of items you can
              engrave, we've done mugs, leather books, nameplates, awards, and
              so much more!
            </p>
            <li>
              <strong>
                What is the maximum size that can be laser engraved?
              </strong>
            </li>
            <p>The maximum size that can be engraved is about 22" X 32".</p>
            <li>
              <strong>
                How long does the laser engraving process typically take?
              </strong>
            </li>
            <p>
              The laser engraving process typically takes anywhere from a few
              days to 2 weeks depending on the quantity of the order and
              material that is being used.
            </p>
            <li>
              <strong>Can you accomodate bulk orders?</strong>
            </li>
            <p>
              We are able to do bulk orders but we ask for you to contact us at
              least two weeks prior on orders over 300 items. This will account
              for the laser work to be done as well as the ordering of the
              materials.
            </p>
            <li>
              <strong>Do you offer gift-wrapping or packaging options?</strong>
            </li>
            <p>
              We can provide packaging options for special events or occasions
              if requested. There will be an added fee for the packaging.
            </p>
            <li>
              <strong>
                Do you provide proofs before engraving the final product?
              </strong>
            </li>
            <p>
              We do provide proofs througout the customization process and will
              only proceed once you have approved the design.
            </p>
          </ol>
        </div>
      </div>

      <div className="container">
        <h1 style={headingStyle}>
          Return Policy
        </h1>
      </div>
      <div
        className="container"
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

      <div className="container">
        <h1 style={headingStyle}>Contact Us!</h1>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Let us know how we can help you!</h2>
      </div>
      <div
        className="container"
      >
        <div className="card" style={cardStyle2}>
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
