import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../layouts/navigation';
import Footer2 from '../layouts/footer2';

const aboutContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const aboutPanelStyle = {
    width: '80%',
    padding: '20px',
    margin: '20px 0',
    border: '1px solid #ddd',
    borderRadius: '8px',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s, transform 0.5s',
};

const panel1Style = {
    backgroundColor: '#FAD02E', // Yellow
};

const panel2Style = {
    backgroundColor: '#66BB6A', // Green
};

const panel3Style = {
    backgroundColor: '#4FC3F7', // Blue
};

const AboutPage = () => {
  return (
    <div className="entire-container">
        <div className="container">
            <Navigation />
        </div>
        <div className="aboutContainer" style={aboutPanelStyle}>
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
        </div>
        <Footer2 />
    </div>
  );
};

export default AboutPage;
