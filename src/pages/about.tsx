import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../layouts/navigation';
import Footer2 from '../layouts/footer2';

// const aboutContainerStyle: CSSProperties = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//     padding: '20px',
//     margin: '20px 0',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
// };
const pageStyle: CSSProperties = {
    backgroundColor: '#BFCBE0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
};

const panel1Style = {
    backgroundColor: '#FAD02E', // Yellow
    width: '100%',
    height: '100vh',
    padding: '20px',
};

const panel2Style = {
    backgroundColor: '#66BB6A', // Green
    width: '100%',
    height: '100vh',
    padding: '20px',
};

const panel3Style = {
    backgroundColor: '#4FC3F7', // Blue
    width: '100%',
    height: '100vh',
    padding: '20px',
};

const AboutPage = () => {
  return (
    <div className="entire-container" style={pageStyle}>
        <div className="container">
            <Navigation />
        </div>
            <div className="about-panel panel-1" style={panel1Style}>
                <h2>Our Story</h2>
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

            <div className="about-panel panel-3" style={panel3Style}>
                <h2>Our Values</h2>
                <p>
                    Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
            </div>
        <Footer2 />
    </div>
  );
};

export default AboutPage;
