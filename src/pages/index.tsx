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
  width: "800px",
  height: "400px",
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
        {/* Row 1 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/leatherMugEngravings.jpeg"
              className="img-fluid"
              alt="Custom Leather Mugs Engraved with Special Packaging"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/champagneFluteEngraving.jpeg"
              className="img-fluid"
              alt="Custom Champagne Flute Engraving"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/stBernardsClassroomSigns.jpeg"
              className="img-fluid"
              alt="Custom Acrylic Classroom Signs"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/woodPhotoEngraving.jpg"
              className="img-fluid"
              alt="Custom Maltese Wood Photo Engraving"
              style={roundedImageStyle}
            />
          </div>
        </div>
        {/* Row 2 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/bardahlYetiMugsSide1.jpeg"
              className="img-fluid"
              alt="Custom Reno Air Races Bardahl Yeti Side 1"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/bardahlYetiMugsSide2.jpeg"
              className="img-fluid"
              alt="Custom Reno Air Races Bardahl Yeti Side 2"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/stBernardsLightSign.jpg"
              className="img-fluid"
              alt="Custom Laser Engraved Light Sign"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/redRoverMug.jpg"
              className="img-fluid"
              alt="Custom Laser Engraved Red Rover Mug"
              style={roundedImageStyle}
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/leatherWallet1.jpg"
              className="img-fluid"
              alt="Custom Leather Wallet Engraving"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/leatherWallet2.jpg"
              className="img-fluid"
              alt="Custom Leather Wallet Engraving"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/bestFriendsPawsMug.jpg"
              className="img-fluid"
              alt="Custom Best Friends Are Ones With Paws Mug"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/charcuterieboardEngraving.jpeg"
              className="img-fluid"
              alt="Custom Charcuterie Board Engraving"
              style={roundedImageStyle}
            />
          </div>
        </div>
        {/* Row 4 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/laserCutDieBox1.jpg"
              className="img-fluid"
              alt="Custom Laser Cut Die Box Part 1"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/laserCutDieBox2.jpg"
              className="img-fluid"
              alt="Custom Laser Cut Die Box Part 2"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/aceHardwareMug.jpg"
              className="img-fluid"
              alt="Custom Ace Hardware Rambler Mug"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/aluminumStickers.jpg"
              className="img-fluid"
              alt="Custom Placard Stickers"
              style={roundedImageStyle}
            />
          </div>
        </div>
        {/* Row 5 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/dancoKnives.jpeg"
              className="img-fluid"
              alt="Custom Laser Engraved Knives"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/buddyMemorialBox.jpg"
              className="img-fluid"
              alt="Custom Pet Memorial Box"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/watchYourHeadSign.jpg"
              className="img-fluid"
              alt="Custom Watch Your Head Sign"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/his&hersMasonJars.jpg"
              className="img-fluid"
              alt="Custom His And Hers Mason Jars"
              style={roundedImageStyle}
            />
          </div>
        </div>
        {/* Row 6 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/dancoYetiRambler.jpeg"
              className="img-fluid"
              alt="Custom Yeti Rambler Mug"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/japaneseBoxLantern.jpg"
              className="img-fluid"
              alt="Custom Japanese Box Lantern"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/seikoWatchEngraving.jpeg"
              className="img-fluid"
              alt="Custom Seiko Watch Engraving"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/mustangLightSign.jpg"
              className="img-fluid"
              alt="Custom Reno Air Races Mustang Light Sign"
              style={roundedImageStyle}
            />
          </div>
        </div>
        {/* Row 7 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/2ndAmendmentWoodEngraving.jpg"
              className="img-fluid"
              alt="Custom 2nd Amendment Wood Engraving"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/32ozWaterBottle.jpg"
              className="img-fluid"
              alt="Custom 32oz Laser Engraved Water Bottle"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/boxEngraving.jpg"
              className="img-fluid"
              alt="Custom Engraved Boxes"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/customBeerMug.jpg"
              className="img-fluid"
              alt="Custom Laser Engraved Mug"
              style={roundedImageStyle}
            />
          </div>
        </div>
        {/* Row 8 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/fedexMug.jpeg"
              className="img-fluid"
              alt="Custom Engraved To Go Mug"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/woodRodeoCoin.jpg"
              className="img-fluid"
              alt="Custom Wooden Engraved Rodeo Logo"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/yetiMugRambler.jpg"
              className="img-fluid"
              alt="Custom Engraved Yeti Rambler Mug"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/standoffSign.jpg"
              className="img-fluid"
              alt="Custom Standoff Sign"
              style={roundedImageStyle}
            />
          </div>
        </div>
        {/* Row 9 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/shastaMasonJarGlass.jpg"
              className="img-fluid"
              alt="Custom Engraved Mason Jar Glass"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/renoAirRacesChallengeCoin.jpg"
              className="img-fluid"
              alt="Custom Engraved Wooden Challenge Coin"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/remadePlacard.PNG"
              className="img-fluid"
              alt="Custom Engraved Redone Placard"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/customLaserGrampaMug.jpeg"
              className="img-fluid"
              alt="Custom Engraved Grampa Mug"
              style={roundedImageStyle}
            />
          </div>
        </div>
        {/* Row 10 */}
        <div className="row" style={rowSpacing}>
          <div className="col-3">
            <img
              src="/images/customMachiningMug.jpg"
              className="img-fluid"
              alt="Custom Engraved Machining Mug"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/huckleberryGlass.jpg"
              className="img-fluid"
              alt="Custom Tombstone HuckleBerry Glass"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/japanTourMugs.jpg"
              className="img-fluid"
              alt="Custom Engraved Japan Tour Mugs"
              style={roundedImageStyle}
            />
          </div>
          <div className="col-3">
            <img
              src="/images/leatherBook.jpg"
              className="img-fluid"
              alt="Custom Engraved Leather Book"
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
