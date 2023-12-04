import React, {CSSProperties} from 'react';
import Navigation from '../layouts/navigation';
import VideoBanner from '../layouts/videoBanner';
// import Footer from '../layouts/footer';
// import Footer2 from '../layouts/footer2';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO:
// 1) Fix the photo carousel
// 2) Fix the functionality of the delete button
// 3) Add more content
// 4) Create color palette 

// const photoCarousel = {
//     maxHeight: '600px',
//     width: '100%',
//     alignItems: 'center',
// };

const containerStyle: CSSProperties = {
    backgroundColor: '#BFCBE0',  // Blue background
    position: 'relative',
    zIndex: 1,  // Set this to a lower value than the Footer z-index
    boxShadow: '0 3px 3px rgba(0,0,0,0.2)',
    marginBottom: '149px',
};
// const imageStyle: CSSProperties = {
//     maxHeight: '600px',  // Adjust the height as needed
//     width: '100%',
//     objectFit: 'cover',  // Ensure the entire image is covered
// };


function Home () {
    return (
        <div className="entire-container" style={containerStyle}>
            {/* <div className="alert alert-primary d-flex align-items-center" role="alert" style={{ height: '20px' }}>
                    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
                <div>
                    An example alert with an icon
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" style={{ marginLeft: '85%' }}></button>
            </div> */}
            <div className="container">
                <Navigation />
            </div>
            {/* <div className="container" style={{ textAlign: 'center' }}>
                <h1>Laser Website Name Here</h1>
            </div> */}
            <div className="container">
                <VideoBanner />
            </div>
            <div className="container" style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Welcome to the Laser Co</h1>
                <h2>Content...</h2>
            </div>
            <div className="container" style={{ textAlign: 'center', marginTop: '20px' }}>
                <h2>Another Container</h2>
            </div>
            <div className="container" style={{ textAlign: 'center', marginTop: '20px' }}>
                <h2>Another Container</h2>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;