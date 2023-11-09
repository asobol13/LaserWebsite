import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {
    const FooterMainStyle: CSSProperties = {
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 3px 3px rgba(0,0,0,0.2)',
        backgroundColor: 'beige',
    };
    const FooterStyle: CSSProperties = {
        backgroundColor: 'beige',
        height: '100px',
        position: 'relative',
        zIndex: -1,
    };
    const FooterItemStyle = {
        color: '#000000',
        backgroundColor: 'transparent',
        textDecoration: 'none',
    };
    return (
        <div className="container-fluid p-0">
        <footer className="footer" style={FooterMainStyle}>
            <div className="py-3" style={FooterStyle}>
                {/* Make a grid for icons and more information */}
                <h3 style={{ backgroundColor: 'transparent' }}>Contact Us!</h3>
                <p style={{ backgroundColor: 'transparent' }}>
                    <a
                        href="mailto:allisonsobol13@gmail.com"
                        className="footer-item"
                        style={FooterItemStyle}>Email
                    </a>
                </p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;