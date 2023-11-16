import React, {CSSProperties} from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO:
// 1) Fix the photo carousel
// 2) Fix the functionality of the delete button
// 3) Add more content
// 4) Create color palette 

const photoCarousel = {
    maxHeight: '600px',
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
};

const containerStyle: CSSProperties = {
    backgroundColor: '#b9e2fa',  // Blue background
    position: 'relative',
    zIndex: 1,  // Set this to a lower value than the Footer z-index
    boxShadow: '0 3px 3px rgba(0,0,0,0.2)',
    marginBottom: '150px',
};

function Home () {
    return (
        <div className="entire-container" style={containerStyle}>
            <div className="alert alert-primary d-flex align-items-center" role="alert" style={{ height: '20px' }}>
                {/* <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg> */}
                <div>
                    An example alert with an icon
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" style={{ marginLeft: '85%' }}></button>
            </div>
            <div className="container">
                <Navigation />
            </div>
            {/* <div className="container" style={{ textAlign: 'center' }}>
                <h1>Laser Website Name Here</h1>
            </div> */}
            <div className="container" style={photoCarousel}>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg" className="d-block w-100" alt="goat photo"/>
                        </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvN0Kck5LMKLbLjOUfhT44yIK7Huduy7XFvtY3ZoIYNQ&s" className="d-block w-100" alt="squirrel photo"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.womansworld.com/wp-content/uploads/2019/09/cute-bunny-in-a-field-of-grass-and-white-flowers.jpg?w=953" className="d-block w-100" alt="bunny photo"/>
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
            <div className="container" style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Welcome to the Laser Co</h1>
                <h2>Content...</h2>
            </div>
            <Footer />
        </div>
    );
}

export default Home;