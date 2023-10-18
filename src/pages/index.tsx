import React from 'react';
// import styles from '../assets/index.css';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';

// interface HomeProps {

// }

function Home () {
    return (
        <div className="entire-container" >
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1>Welcome to the Laser Site</h1>
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
            {/* <div className="footer">
                <Footer />
            </div> */}
        </div>
    );
}

export default Home;