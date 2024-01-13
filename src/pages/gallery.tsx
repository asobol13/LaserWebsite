import React, { CSSProperties } from 'react';
import Navigation from '../layouts/navigation';
import Footer2 from '../layouts/footer2';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO:
// 1) Add in the photos for the gallery

const pageStyle: CSSProperties = {
    backgroundColor: '#CCCCCC',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '270px',
};

const photoGalleryStyle = {
    marginTop: '10px',
    marginBottom: '100px',
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
};

function Gallery () {
    return (
        <div className="entire-container" style={pageStyle}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ margin: '20px', textAlign: 'center' }}>Gallery</h1>
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
            <Footer2 />
        </div>
    );
}

export default Gallery;