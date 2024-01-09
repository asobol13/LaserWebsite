import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../layouts/navigation';
import Footer2 from '../layouts/footer2';

const pageStyle: CSSProperties = {
    backgroundColor: '#66BB6A',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '270px',
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

const AboutPage = () => {
  return (
    <div className="entire-container" style={pageStyle}>
        <div className="container">
            <Navigation />
        </div>
        <div className="panel-container" style={panelContainerStyle}>
            <div className="panel panel-2" style={{ ...panelStyle, ...panelTextStyle }}>
                <h2>Our Story</h2>
                <p>
                    Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus,
                    nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
                </p>
                {/* Add content for panel 2 */}
            </div>
            <div className="panel panel-1" style={{ ...panelStyle, ...panel1Style }}>
                {/* Add content for panel 1 */}
            </div>
            </div>
        <div className="panel-container" style={panelContainerStyle}>
            <div className="panel panel-1" style={{ ...panelStyle, ...panel3Style }}>
                {/* Add content for panel 1 */}
            </div>
            <div className="panel panel-2" style={{ ...panelStyle, ...panelTextStyle }}>
                <h2>Meet the Team</h2>
                <p>
                    Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus,
                    nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
                </p>
                {/* Add content for panel 2 */}
            </div>
        </div>
        <div className="panel-container" style={panelContainerStyle}>
            <div className="panel panel-2" style={{ ...panelStyle, ...panelTextStyle }}>
                <h2>Our Values</h2>
                <p>
                    Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus,
                    nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
                </p>
                {/* Add content for panel 2 */}
            </div>
            <div className="panel panel-1" style={{ ...panelStyle, ...panel1Style }}>
                {/* Add content for panel 1 */}
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
