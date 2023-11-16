import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO:
// 1) Add in the laser photos
// 2) Look for ways to host the images

const photoGalleryStyle = {
    marginTop: '40px',
    marginBottom: '100px',
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
};

// const containerStyle: CSSProperties = {
//     backgroundColor: '#b9e2fa',
//     position: 'relative',
//     zIndex: 1,
//     boxShadow: '0 3px 3px rgba(0,0,0,0.2)',
// };

function Gallery () {
    return (
        <div className="entire-container" style={{ backgroundColor: '#b9e2fa' }}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ margin: '20px', textAlign: 'center' }}>Our Projects</h1>
            </div>
            <div className="gridContainer" style={photoGalleryStyle}>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col"><img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/></div>
                    <div className="col"><img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/></div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-8"><img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/></div>
                    <div className="col-4"><img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image"/></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;