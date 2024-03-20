import React, { CSSProperties } from "react";
import Navigation from "../layouts/navigation";
import VideoBanner from "../layouts/videoBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer2 from "../layouts/footer2";

// TODO:
// 1) Create a better laser video & videos
// 2) Logo for site

const pageStyle: CSSProperties = {
  backgroundColor: "#edf5ee",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  paddingBottom: "260px",
};

const panel1Style = {
  marginBottom: "50px",
};

const headingStyle = {
  margin: "20px",
  texAlign: "center",
};

const photoGalleryStyle = {
  marginTop: "10px",
  marginBottom: "100px",
  marginLeft: "5%",
  marginRight: "5%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50px",
};

const rowSpacing = {
  marginTop: "20px",
};

const roundedImageStyle: CSSProperties = {
  borderRadius: "20px",
  width: "600px",
  height: "600px",
  objectFit: "cover",
};

function Home() {
  return (
    <div className="entire-container" style={pageStyle}>
      <div className="container">
        <Navigation />
      </div>
      <div className="about-panel panel-1" style={panel1Style}>
        <VideoBanner />
      </div>

      <div className="container">
        <h1 style={headingStyle}>Gallery</h1>
      </div>
      <div className="gridContainer" style={photoGalleryStyle}>
        <div className="row" style={rowSpacing}>
          <div className="col-4">
            <img
              src="/images/japanTourMugs.jpg"
              className="img-fluid"
              alt="Japan Tour Mugs"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-4">
            <img
              src="/images/huckleberryGlass.jpg"
              className="img-fluid"
              alt="Pint Glass"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-4">
            <img
              src="/images/masonJarGlass.jpg"
              className="img-fluid"
              alt="Mason Jar Glass"
              style={roundedImageStyle}
            />
          </div>
        </div>
        <div className="row" style={rowSpacing}>
          <div className="col-4">
            <img
              src="/images/yetiMugRambler.jpg"
              className="img-fluid"
              alt="Yeti Rambler Mug"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-4">
            <img
              src="/images/laserCutDieBox1.jpg"
              className="img-fluid"
              alt="Laser Cut Die Box"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-4">
            <img
              src="/images/laserCutDieBox2.jpg"
              className="img-fluid"
              alt="Laser Cut Die Box"
              style={roundedImageStyle}
            />
          </div>
        </div>
        <div className="row" style={rowSpacing}>
          <div className="col-4">
            <img
              src="/images/leatherWallet1.jpg"
              className="img-fluid"
              alt="Leather Wallet Engraving"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-4">
            <img
              src="/images/leatherWallet2.jpg"
              className="img-fluid"
              alt="Leather Wallet Engraving"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-4">
            <img
              src="/images/leatherBook.jpg"
              className="img-fluid"
              alt="Leather Book Engraving"
              style={roundedImageStyle}
            />
          </div>
        </div>
        <div className="row" style={rowSpacing}>
          <div className="col-4">
            <img
              src="/images/lightSign.jpg"
              className="img-fluid"
              alt="Aviation Light Up Sign"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-4">
            <img
              src="/images/buddyMemorialBox.jpg"
              className="img-fluid"
              alt="Laser Cut Memorial Box"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-4">
            <img
              src="/images/32ozWaterBottle.jpg"
              className="img-fluid"
              alt="32oz Water Bottle"
              style={roundedImageStyle}
            />
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Home;
