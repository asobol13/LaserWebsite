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
        zIndex: -2,
    };
    const FooterItemStyle = {
        color: '#000000',
        textDecoration: 'none',
        transition: 'text-decoration 0.2s',
    };
    //  const content: CSSProperties = {
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
        <div className="container" style={{ textAlign: 'center' }}>
            <footer className="footer" style={FooterMainStyle}>
                <div className="content has-text-centered" style={FooterStyle}>
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