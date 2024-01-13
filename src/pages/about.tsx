import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../layouts/navigation';
import Footer2 from '../layouts/footer2';

// TODO:
// 1) Get proper photos on panels
// 2) Get a banner photo
// 3) Finish the writing segments

const pageStyle: CSSProperties = {
    backgroundColor: '#66BB6A',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '350px',
};

const panelStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
};

const panel1Style = {
    backgroundImage: `url('/images/lasermain.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

const panelTextStyle = {
    backgroundColor: '#66BB6A', // Green
    width: '100%',
    height: '100vh',
    padding: '20px',
};

const panel3Style = {
    backgroundColor: '#4FC3F7', // Blue
    backgroundImage: `url('/images/product.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: '100%',
    height: '100vh',
    padding: '20px',
};

const panelContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
};

const bannerContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    height: '50vh',
};

function AboutPage () {
  return (
    <div className="entire-container" style={pageStyle}>
        <div className="container">
            <Navigation />
        </div>
        <div className="panel-container" style={panelContainerStyle}>
            <div className="panel panel-2" style={{ ...panelStyle, ...panelTextStyle }}>
                <h2>Our Story</h2>
                <h5>
                    The Laser Business started when Eric.... After selling his products to his
                    clients from his other business as a pilot, he began getting more interest
                    in his engraving work. Eventually he.... His daughter Allison started working
                    the laser and helping to create graphics..
                </h5>
            </div>
            <div className="panel panel-1" style={{ ...panelStyle, ...panel1Style }}>
                {/* Panel 1 photo */}
            </div>
            </div>
        <div className="panel-container" style={panelContainerStyle}>
            <div className="panel panel-1" style={{ ...panelStyle, ...panel3Style }}>
                {/* Panel 2 photo */}
            </div>
            <div className="panel panel-2" style={{ ...panelStyle, ...panelTextStyle }}>
                <h2>Meet the Team</h2>
                <h5>
                    Our team consists of Eric, Allison,... Eric is the Owner and CEO of
                    the business. Allison is the President....
                </h5>
            </div>
        </div>
        <div className="panel-container" style={panelContainerStyle}>
            <div className="panel panel-2" style={{ ...panelStyle, ...panelTextStyle }}>
                <h2>Our Values</h2>
                <h5>
                    Here at ... we value quality work. We take and make sure that each graphic
                    we engrave onto our products are crisp and ....
                </h5>
            </div>
            <div className="panel panel-1" style={{ ...panelStyle, ...panel1Style }}>
                {/* Panel 3 photo */}
            </div>
        </div>
        <div className="panel-container" style={bannerContainerStyle}>
            <div className="panel panel-2" style={{ ...panelStyle, ...panelTextStyle }}>
                <h2>This will have a banner image</h2>
            </div>
        </div>
        <Footer2 />
    </div>
  );
};

export default AboutPage;
