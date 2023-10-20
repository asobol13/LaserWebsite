import React from 'react';
// import styles from '../assets/index.css';
import Navigation from '../layouts/navigation';

// TODO: A nice looking responsive grid for the photo gallery

function Gallery () {
    return (
        <div className="entire-container">
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Gallery Page</h1>
            </div>
        </div>
    );
}

export default Gallery;