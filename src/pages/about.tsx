import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';

// TODO: Immersive photo slide experience along with good story telling aspect

function About () {
    return (
        <div className="entire-container" style={{ textAlign: 'center', backgroundColor: '#b9e2fa' }}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Who We Are</h1>
            </div>
            <Footer />
        </div>
    );
}

export default About;