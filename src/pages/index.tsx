import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO:
// 1) Fix the photo carousel
// 2) Fix the functionality of the delete button
// 3) Add more content 

const photoCarousel = {
    maxHeight: '400px',
    overflow: 'hidden',
    alignItems: 'center',
};

function Home () {
    return (
        <div className="entire-container" style={{ backgroundColor: '#b9e2fa' }}>
            <div className="alert alert-primary d-flex align-items-center" role="alert">
                {/* <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg> */}
                <div>
                    An example alert with an icon
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" style={{ marginLeft: '85%' }}></button>
            </div>
            <div className="container">
                <Navigation />
            </div>
            <div className="container" style={{ textAlign: 'center' }}>
                <h1>Laser Website Name Here</h1>
            </div>
            <div className="container" style={photoCarousel}>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="d-block w-100" alt="goat"/>
                        </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <div className="container" style={{ textAlign: 'center' }}>
                <h3>Welcome to the Laser Co</h3>
                <h4>Content...</h4>
            </div>
            <Footer />
        </div>
    );
}

export default Home;