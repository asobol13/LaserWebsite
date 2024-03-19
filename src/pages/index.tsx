import React, {CSSProperties} from 'react';
import Navigation from '../layouts/navigation';
import VideoBanner from '../layouts/videoBanner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer2 from '../layouts/footer2';

// TODO:
// 1) Fix the photo carousel

const pageStyle: CSSProperties = {
    backgroundColor: '#66BB6A',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    paddingBottom: '270px',
};

const panel1Style = {
    backgroundColor: 'yellow',
    width: '100%',
    height: '75vh',
    padding: '20px',
};

const panel2Style = {
    backgroundColor: '#66BB6A', // Green
    width: '100%',
    height: '250vh',
    padding: '20px',
    marginBottom: '260px',
};

const photoGalleryStyle = {
    marginTop: '10px',
    marginBottom: '100px',
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
};

function Home () {
    return (
        <div className="entire-container" style={pageStyle}>
        <div className="container">
            <Navigation />
        </div>
            <div className="about-panel panel-1" style={panel1Style}>
                <VideoBanner />
                {/* <h2>Video/Photo display of the new stuff</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                    a pharetra augue. Vestibulum id ligula porta felis euismod semper. Praesent commodo
                    cursus magna, vel scelerisque nisl consectetur et.
                </p> */}
            </div>

            <div className="about-panel panel-2" style={panel2Style}>
                <h2>Additional Information</h2>
                <p>
                    Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus,
                    nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
                </p>
            </div>

            <div className="container">
                <h1 style={{ margin: '20px', textAlign: 'center' }}>Gallery</h1>
            </div>
            <div className="gridContainer" style={photoGalleryStyle}>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-4">
                        <img src="/images/japanTourMugs.jpg" className="img-fluid" alt="Japan Tour Mugs"/>
                    </div>
                    <div className="col-4">
                        <img src="/images/yetiMugRambler.jpg" className="img-fluid" alt="Yeti Rambler Mug"/>
                    </div>
                    <div 
                        className="col-4"><img src="/images/masonJarGlass.jpg" className="img-fluid" alt="Mason Jar Glass"/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                <div
                    className="col-3"><img src="/images/lightSign.jpg" className="img-fluid" alt="Aviation Light Up Sign"/>
                </div>
                <div
                    className="col-4"><img src="/images/laserCutDieBox1.jpg" className="img-fluid" alt="Laser Cut Die Box"/>
                </div>
                <div
                    className="col-4"><img src="/images/laserCutDieBox2.jpg" className="img-fluid" alt="Laser Cut Die Box"/>
                </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div
                        className="col-4"><img src="/images/leatherWallet1.jpg" className="img-fluid" alt="Leather Wallet Engraving"/>
                    </div>
                    <div
                        className="col-4"><img src="/images/leatherWallet2.jpg" className="img-fluid" alt="Leather Wallet Engraving"/>
                    </div>
                    <div
                        className="col-4"><img src="/images/leatherBook.jpg" className="img-fluid" alt="Leather Book Engraving"/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div
                        className="col-4"><img src="/images/huckleberryGlass.jpg" className="img-fluid" alt="Pint Glass"/>
                    </div>
                    <div
                        className="col-4"><img src="/images/buddyMemorialBox.jpg" className="img-fluid" alt="Laser Cut Memorial Box"/>
                    </div>
                    <div
                        className="col-4"><img src="/images/32ozWaterBottle.jpg" className="img-fluid" alt="32oz Water Bottle"/>
                    </div>
                </div>
            </div>
        <Footer2 />
    </div>
    );
}

export default Home;