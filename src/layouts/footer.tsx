import React, { CSSProperties } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// TODO:
// 1) Fix the z index issue
// 2) Add in all of the links and information below in grid

function Footer () {
    const FooterMainStyle: CSSProperties = {
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'beige',
        height: '150px',
    };
    const ContentStyle: CSSProperties = {
        width: '960px',
        position: 'fixed',
        marginLeft: '25%',
        bottom: 0,
        zIndex: 1,
        paddingBottom: '20px',
        paddingTop: '50px',
    };
    const FooterItemStyle: CSSProperties = {
        color: '#000000',
        textDecoration: 'none',
    };
    const containerStyle: CSSProperties = {
        backgroundColor: '#b9e2fa',
        position: 'relative',
        zIndex: 0,
        boxShadow: '0 3px 3px rgba(0,0,0,0.2)',
    };

    return (
        <div className="entire-container" style={containerStyle}>
        <footer className="footer" style={FooterMainStyle}>
            <div className="content" style={ContentStyle}>
                <h3>Contact Us!</h3>
                <p>
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