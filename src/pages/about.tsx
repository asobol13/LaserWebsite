import React, { CSSProperties, useState } from 'react';
import Navigation from '../layouts/navigation';
import { useSpring, animated } from 'react-spring';
import Footer from '../layouts/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO:
// 1) Add Immersive photo slide experience
// 2) Add a good story telling aspect

const pageStyle: CSSProperties = {
    backgroundColor: '#b9e2fa',
    minHeight: '100vh', // Ensure the page takes up at least the height of the viewport
    display: 'flex',
    flexDirection: 'column',
};

function About () {
    const [isVisible, setIsVisible] = useState(false);

    const slideIn = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
    });

    // Function to handle image onLoad event and trigger the slide-up animation
    const handleImageLoad = () => {
        setIsVisible(true);
    };

    return (
        <div className="entire-container" style={pageStyle}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Who We Are</h1>
            </div>
            <animated.div style={slideIn}>
                <div className="container" style={{ minHeight: '400px' }}>
                    <img
                        src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg"
                        className="img-fluid"
                        alt="Responsive image"
                        onLoad={handleImageLoad}
                        style={{ width: '100%' }}
                    />
                </div>
                <div className="container" style={{ minHeight: '400px' }}>
                    <img
                        src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg"
                        className="img-fluid"
                        alt="Responsive image"
                        onLoad={handleImageLoad}
                        style={{ width: '100%' }}
                    />
                </div>
                <div className="container" style={{ minHeight: '400px' }}>
                    <img
                        src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg"
                        className="img-fluid"
                        alt="Responsive image"
                        onLoad={handleImageLoad}
                        style={{ width: '100%' }}
                    />
                </div>
            </animated.div>
            {/* <Footer /> */}
        </div>
    );
}

export default About;