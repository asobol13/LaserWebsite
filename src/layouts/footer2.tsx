import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const footerStyle: CSSProperties = {
  backgroundColor: '#A9B7CC',
  textAlign: 'center',
};

const footerItems: CSSProperties = {
  marginTop: '15px',
};

const Footer2 = () => {
  return (
    <footer className="footer" style={footerStyle}>
      <div className="container" style={footerItems}>
        <div className="row">
          <div className="column col-md-6 col-sm-12">
            <h3>Customer Service</h3>
            <p>
              <i className="far fa-envelope"></i>&nbsp;
              <a 
                href="mailto:allisonsobol13@gmail.com"
                target="_blank"
                className="footer-item"
              >
                Email
              </a>
            </p>
          </div>
          <div className="column col-md-6 col-sm-12">
            <h3>Our Company</h3>
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
            <p>Sign up for our newsletter <a 
              href="https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI="
              target="_blank"
              className="footer-item"
              >here</a>
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <p>Copyright @ Laser Co. 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
