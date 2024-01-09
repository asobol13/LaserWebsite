import React, {CSSProperties} from 'react';
import Navigation from '../layouts/navigation';
import VideoBanner from '../layouts/videoBanner';
// import Footer from '../layouts/footer';
// import Footer2 from '../layouts/footer2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer2 from '../layouts/footer2';

// TODO:
// 1) Fix the photo carousel
// 2) Fix the functionality of the delete button
// 3) Add more content
// 4) Create color palette

const pageStyle: CSSProperties = {
    backgroundColor: '#909090',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
};

const panel1Style = {
    backgroundColor: '#FAD02E', // Yellow
    width: '100%',
    height: '75vh',
    padding: '20px',
};

const panel2Style = {
    backgroundColor: '#66BB6A', // Green
    width: '100%',
    height: '250vh',
    padding: '20px',
};

function Home () {
    return (
        <div className="entire-container" style={pageStyle}>
        <div className="container">
            <Navigation />
        </div>
            <div className="about-panel panel-1" style={panel1Style}>
                <h2>Video/Photo display of the new stuff</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                    a pharetra augue. Vestibulum id ligula porta felis euismod semper. Praesent commodo
                    cursus magna, vel scelerisque nisl consectetur et.
                </p>
            </div>

            <div className="about-panel panel-2" style={panel2Style}>
                <h2>Meet the Team</h2>
                <p>
                    Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus,
                    nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
                </p>
            </div>
        <Footer2 />
    </div>
    );
}

export default Home;