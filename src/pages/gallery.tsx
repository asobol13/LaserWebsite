import React from 'react';
// import styles from '../assets/index.css';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';

// TODO: A nice looking responsive grid for the photo gallery

const photoGalleryStyle = {
    margin: '20px',
    alignItems: 'center',
    justifyContent: 'center',
};

function Gallery () {
    return (
        <div className="entire-container" style={{ textAlign: 'center' }}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ margin: '20px' }}>Gallery Page</h1>
            </div>
            <div className="gridContainer" style={photoGalleryStyle}>
                <div className="row">
                    <div className="col">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col">
                    <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col"><img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/></div>
                    <div className="col"><img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/></div>
                </div>
                <div className="row">
                    <div className="col-8"><img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/></div>
                    <div className="col-4"><img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;