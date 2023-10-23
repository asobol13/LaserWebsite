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
                {/* <h1 style={{ textAlign: 'center' }}>Welcome to the Laser Site</h1>
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
                </div> */}
                <div
                    id="carouselBasicExample"
                    className="carousel slide carousel-fade"
                    data-mdb-ride="carousel"
                >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                        ></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
                            className="d-block w-100"
                            alt="Sunset Over the City"
                        />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                            <p>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                        className="d-block w-100"
                        alt="Canyon at Nigh"
                    />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>

            <div className="carousel-item">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                    className="d-block w-100"
                    alt="Cliff Above a Stormy Sea"
                />
            <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </div>
        </div>
    </div>

    <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="prev"
    >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>
    <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="next"
    >
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