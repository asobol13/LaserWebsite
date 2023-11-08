import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {
    const FooterMainStyle = {
        Position: 'relative',
        zIndex: 1,
        boxShadow: '0 3px 3px rgba(0,0,0,0.2)',
        // backgroundColor: 'black',
    };
    const FooterStyle = {
        backgroundColor: '#CFAAE6',
        height: '50px',
        Position: 'relative',
        zIndex: -2,
    };
    const FooterItemStyle = {
        color: '#000000',
    };
    // const FooterItemHover = {
    //     textDecoration: 'underline',
    // };
    return (
        <div className="container" style={FooterMainStyle}>
            <footer className="footer" style={FooterStyle}>
                <div className="content has-text-centered">
                    <h3>Contact Me!</h3>
                    <p><a href="mailto:allisonsobol13@gmail.com" className="footer-item" style={FooterItemStyle}>Email</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;