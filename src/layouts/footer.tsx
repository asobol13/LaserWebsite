import React, { CSSProperties, useState, useEffect } from 'react';

// TODO:
// 1) Work on mobile responsiveness
// 2) Add in links and information

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

    const WrapperStyle: CSSProperties = {
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        paddingBottom: '50px',
        paddingTop: '20px',
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
                    <div className="container text-center" style={{ color: isScrolled ? '#000000' : 'transparent', maxHeight: '80px' }}>
                        <div className="row">
                            <div className="col">
                                <h4>Column 1</h4>
                                <hr/>
                            </div>
                            <div className="col">
                                <h4>Column 2</h4>
                                <hr/>
                            </div>
                            <div className="col">
                                <h4>Contact Us!</h4>
                                <hr/>
                                <p>
                                <a
                                    href="mailto:allisonsobol13@gmail.com"
                                    className="footer-item"
                                    style={FooterItemStyle}>Email
                                </a>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <p>@ 2023 Laser</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
