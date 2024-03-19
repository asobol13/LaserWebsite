import React, { CSSProperties, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const navStyle: CSSProperties = {
    height: '80px',
    fontSize: '24px',
    transition: 'top 0.6s',
    top: visible ? '0' : '-80px', // Set the height of your navbar
    position: 'fixed',
    width: '100%',
    zIndex: '1000', // Adjust the z-index as needed
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
        <div className="container-fluid">
            {/* Add logo here */}
            <a className="navbar-brand" href="#">
                LOGO HERE
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="/">
                    Home
                    </a>
                    <a className="nav-link" href="/gallery">
                    Gallery
                    </a>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navigation;
