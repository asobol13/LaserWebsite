import React, { CSSProperties, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const footerStyle: CSSProperties = {
  backgroundColor: "#457d4c",
  textAlign: "center",
  color: "black",
  position: "fixed",
  paddingTop: '20px',
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  transform: "translateY(100%)", // Initially off-screen
  transition: "transform 0.25s ease-out", // Add transition for smooth movement
};

const footerColumnStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const customerServiceLinks: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
  height: "110px",
};

const columnStyle: CSSProperties = {
  textAlign: "center", // Center text within each column
  margin: "0 20px", // Add margin for separation between columns
  color: "black",
};

const verticalLineStyle: CSSProperties = {
  borderLeft: "1px solid black",
  height: "100%",
  marginRight: "5px",
};

const Footer2 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      // Check if user is at the very bottom of the page
      setVisible(scrollPosition + windowHeight >= documentHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const FooterItem = ({ href, text }: { href: string; text: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const footerItemStyle: CSSProperties = {
      marginTop: "10px",
      padding: "5px",
      textDecoration: isHovered ? "underline" : "none",
      color: "black",
    };

    return (
      <a
        href={href}
        target="_blank"
        className="footer-item"
        style={footerItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
    );
  };

  return (
    <footer
      className="footer"
      style={{
        ...footerStyle,
        transform: visible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="column col-md-6 col-sm-12">
            <h3>Customer Service</h3>
            <div style={customerServiceLinks}>
              <div className="column" style={columnStyle}>
                <p>
                  <i className="far fa-envelope"></i>&nbsp;
                  <FooterItem href="mailto:allisonsobol13@gmail.com" text="Email" />
                </p>
                <p>
                  <FooterItem href="/infoHub#ReturnPolicy" text="Return Policy" />
                </p>
              </div>
              <div style={verticalLineStyle}></div>
              <div className="column" style={columnStyle}>
                <p>
                  <FooterItem href="/infoHub#FAQs" text="FAQ's" />
                </p>
                <p>
                  <FooterItem href="/infoHub#ContactUs" text="Contact Us" />
                </p>
              </div>
            </div>
          </div>
          {/* <div className="column col-md-6 col-sm-12">
            <div
              style={footerColumnStyle}
            >
              <h3>Follow Us</h3>
              <p>
                <i className="fab fa-instagram"></i>&nbsp;
                <FooterItem
                  href="https://www.instagram.com/your_instagram_account/"
                  text="Instagram"
                />
              </p>
              <div className="container">
                <form>
                  <div className="form-group col-sm-6 mx-auto">
                    <p>Sign up for our newsletter</p>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" className="btn btn-danger mt-3">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div> */}
        </div>
        <hr />
        <div className="row">
          <p>Copyright @ Laser Co. 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
