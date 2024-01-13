import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const banner: CSSProperties = {
  position: 'relative',
  height: '100vh', // Adjust the height as needed
};

const video: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

function VideoBanner() {
  return (
    <div className="entire-container">
      <div className="banner" style={banner}>
        <video autoPlay loop muted style={video}>
          <source src='public/images/laservideoexample.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoBanner;
