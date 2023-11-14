import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';

// TODO: Need to figure out the styling and look you want for the brand

// interface HomeProps {

// }

const photoCarousel = {
    height: '300px',
    alignItems: 'center',
};

function Home () {
    return (
        <div className="entire-container" style={{ textAlign: 'center', backgroundColor: '#b9e2fa' }}>
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
                            <img src="..." className="d-block w-100" alt="..."/>
                        </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
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