import React, { CSSProperties } from 'react';
import Navigation from '../layouts/navigation';
import Footer2 from '../layouts/footer2';
import 'bootstrap/dist/css/bootstrap.min.css';

const photoGalleryStyle = {
    marginTop: '10px',
    marginBottom: '100px',
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
};

const pageStyle: CSSProperties = {
    backgroundColor: '#BFCBE0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
};

function Shop() {
    return (
        <div className="entire-container" style={pageStyle}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ margin: '20px', textAlign: 'center' }}>Shop Our Products</h1>
            </div>
            <div className="container">
                <h3 style={{ margin: '10px', textAlign: 'right' }}>Filter & sort button here</h3>
            </div>
            <div className="gridContainer" style={photoGalleryStyle}>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-3">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    );
}

export default Shop;
