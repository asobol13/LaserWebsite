import React from 'react';
// import styles from '../assets/index.css';
import Navigation from '../layouts/navigation';

// TODO: Immersive photo slide experience along with good story telling aspect

function About () {
    return (
        <div className="entire-container" style={{ textAlign: 'center' }}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>About Page</h1>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default About;