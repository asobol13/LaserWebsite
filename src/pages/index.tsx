import React from 'react';
// import styles from '../assets/index.css';
import Navigation from '../layouts/navigation';
// import Footer from '../layouts/footer';

// TODO: Need to figure out the styling and look you want for the brand

// interface HomeProps {

// }

function Home () {
    return (
        <div className="entire-container" >
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                {/* I want this carousel to take up the whole beginning part of page */}
                <h1 style={{ textAlign: 'center' }}>Welcome to the Laser Site</h1>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="Image of..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/300x100" className="d-block w-100" alt="Image of..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/300x300" className="d-block w-100" alt="Image of..."/>
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