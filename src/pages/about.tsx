import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: Immersive photo slide experience along with good story telling aspect

function About () {
    return (
        <div className="entire-container" style={{ backgroundColor: '#b9e2fa' }}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Who We Are</h1>
            </div>
            <div className="container">
                <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/>
            </div>
            <Footer />
        </div>
    );
}

export default About;