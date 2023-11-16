// Footer.tsx
import React, { CSSProperties, useState, useEffect } from 'react';

function Footer() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const FooterMainStyle: CSSProperties = {
    //     backgroundColor: 'beige',
    //     height: '150px',
    //     zIndex: 2,
    //     position: 'relative',
    // };

    const WrapperStyle: CSSProperties = {
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        paddingBottom: '20px',
        paddingTop: '50px',
        backgroundColor: isScrolled ? 'beige' : 'transparent',
        boxShadow: '0 3px 3px rgba(0,0,0,0.2)',
        transition: 'background-color 0.3s ease-out',
        zIndex: 100,
    };

    const FooterItemStyle: CSSProperties = {
        color: isScrolled ? '#000000' : 'transparent',
        textDecoration: 'none',
    };

    return (
        <div className="entire-container">
            <footer className="footer">
                <div className="wrapper" style={WrapperStyle}>
                    <h3 style={{ color: isScrolled ? '#000000' : 'transparent' }}>Contact Us!</h3>
                    <p style={{ color: isScrolled ? '#000000' : 'transparent' }}>
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
}

export default Footer;
