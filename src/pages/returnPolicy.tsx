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
  paddingBottom: "240px",
};

const cardStyle: CSSProperties = {
  backgroundColor: "#f5f5f5",
  textAlign: "center",
  alignItems: "center",
  margin: "auto",
  width: "800px",
  height: "450px",
};

function ReturnPolicy() {
  return (
    <div className="entire-container" style={pageStyle}>
      <div className="container">
        <Navigation />
      </div>
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          Return Policy
        </h1>
      </div>
      <div
        className="container"
        style={{ marginTop: "40px", marginBottom: "100px" }}
      >
        <div className="card" style={cardStyle}>
          <div className="card-body" style={{ backgroundColor: "transparent" }}>
            <p>
              Vestibulum id ligula porta felis euismod semper. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Donec sed odio dui. Vestibulum id ligula porta felis
              euismod semper. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio
              dui. Vestibulum id ligula porta felis euismod semper. Duis mollis,
              est non commodo luctus, nisi erat porttitor ligula, eget lacinia
              odio sem nec elit. Donec sed odio dui. Vestibulum id ligula porta
              felis euismod semper. Duis mollis, est non commodo luctus, nisi
              erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed
              odio dui. Vestibulum id ligula porta felis euismod semper. Duis
              mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Donec sed odio dui. Vestibulum id
              ligula porta felis euismod semper. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Donec sed odio dui.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default ReturnPolicy;
