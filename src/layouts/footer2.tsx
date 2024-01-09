import React, { CSSProperties, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const footerStyle: CSSProperties = {
  backgroundColor: '#909090',
  textAlign: 'center',
  color: 'black',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,
  transform: 'translateY(100%)', // Initially off-screen
  transition: 'transform 0.25s ease-out', // Add transition for smooth movement
};

const footerItems: CSSProperties = {
  marginTop: '10px',
  padding: '5px',
};

const customerServiceLinks: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  height: '110px',
};

const columnStyle: CSSProperties = {
  textAlign: 'center', // Center text within each column
  margin: '0 20px', // Add margin for separation between columns
};

const verticalLineStyle: CSSProperties = {
  borderLeft: '1px solid #666', // Adjust color as needed
  height: '100%',
  marginRight: '5px', // Adjust as needed
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer" style={{ ...footerStyle, transform: visible ? 'translateY(0)' : 'translateY(100%)' }}>
      <div className="container" style={footerItems}>
        <div className="row">
          <div className="column col-md-6 col-sm-12">
            <h3>Customer Service</h3>
            <div style={customerServiceLinks}>
              <div className="column" style={columnStyle}>
                <p>
                  <i className="far fa-envelope"></i>&nbsp;
                  <a href="mailto:allisonsobol13@gmail.com" target="_blank" className="footer-item">
                    Email
                  </a>
                </p>
                <p>Request a Quote</p>
                <p>Return Policy</p>
              </div>
              <div style={verticalLineStyle}></div>
              <div className="column" style={columnStyle}>
                <p>Give Feedback</p>
                <p>FAQ's</p>
                <p>
                  <a href="/contactUs" target="_blank" className="nav-link">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="column col-md-6 col-sm-12">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3>Follow Us</h3>
              <p>
                <i className="fab fa-instagram"></i>&nbsp;
                <a
                  href="https://www.instagram.com/your_instagram_account/"
                  target="_blank"
                  className="footer-item"
                >
                  Instagram
                </a>
              </p>
              <p>Sign up for our newsletter</p>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
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
