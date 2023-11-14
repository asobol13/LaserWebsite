import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {
    const FooterMainStyle: CSSProperties = {
        position: 'relative',
        zIndex: 2,
        boxShadow: '0 3px 3px rgba(0,0,0,0.2)',
        backgroundColor: 'beige',
        height: '150px',
    };
    const ContentStyle: CSSProperties = {
        width: '960px',
        position: 'fixed',
        left: '50%',
        bottom: 0,
        marginLeft: '-480px',
        zIndex: 2,
        paddingBottom: '20px',
        paddingTop: '20px',
    };
    const FooterItemStyle = {
        color: '#000000',
        textDecoration: 'none',
        zIndex: 1,
    };

    return (
        <div className="container-fluid p-0">
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