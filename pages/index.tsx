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
            </div>
            {/* <div className="footer">
                <Footer />
            </div> */}
        </div>
    );
}

export default Home;