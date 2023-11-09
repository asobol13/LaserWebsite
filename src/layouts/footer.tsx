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
        // transition: 'text-decoration 0.2s',
    };
    // const galleryContent: CSSProperties = {
    //     width: '960px',
    //     position: 'fixed',
    //     left: '50%',
    //     bottom: 0,
    //     marginLeft: '-480px',
    //     zIndex: -1,
    //     paddingBottom: '20px',
    //     paddingTop: '20px',
    // };
    return (
        <div className="container-fluid">
        <footer className="footer" style={FooterMainStyle}>
            <div className="py-3" style={FooterStyle}>
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