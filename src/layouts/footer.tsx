import React, { CSSProperties } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {
    const FooterMainStyle: CSSProperties = {
        position: 'relative',
        zIndex: -2,
        backgroundColor: 'beige',
        height: '150px',
    };
    const ContentStyle: CSSProperties = {
        width: '960px',
        position: 'fixed',
        marginLeft: '25%',
        bottom: 0,
        zIndex: -2,
        paddingBottom: '20px',
        paddingTop: '50px',
    };
    const FooterItemStyle: CSSProperties = {
        color: '#000000',
        textDecoration: 'none',
    };

    return (
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
    );
};

export default Footer;