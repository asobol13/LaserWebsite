import React, { CSSProperties, useState } from 'react';
import Navigation from '../layouts/navigation';
import Footer2 from '../layouts/footer2';
import 'bootstrap/dist/css/bootstrap.min.css';

const pageStyle: CSSProperties = {
  backgroundColor: '#CCCCCC',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '220px',
};

const photoGalleryStyle = {
  marginTop: '10px',
  marginBottom: '140px',
  marginLeft: '5%',
  marginRight: '5%',
  alignItems: 'center',
  justifyContent: 'center',
};

function Shop() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const imageStyle = (index) => ({
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <div className="entire-container" style={pageStyle}>
      <div className="container">
        <Navigation />
      </div>
      <div className="container">
        <h1 style={{ margin: '20px', textAlign: 'center' }}>Shop our Products</h1>
        <h3 style={{ margin: '20px', textAlign: 'right' }}>Filter and Sort</h3>
      </div>
      <div className="gridContainer" style={photoGalleryStyle}>
        <div className="row" style={{ marginTop: '20px' }}>
          {[0, 1, 2, 3].map((index) => (
            <div className="col" key={index}>
              <img
                src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg"
                className="img-fluid"
                alt={`Responsive image ${index}`}
                style={imageStyle(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
        <div className="row" style={{ marginTop: '20px' }}>
          {[0, 1, 2, 3].map((index) => (
            <div className="col" key={index}>
              <img
                src="https://m.media-amazon.com/images/I/61VcdmN8qbL._AC_UF894,1000_QL80_.jpg"
                className="img-fluid"
                alt={`Responsive image ${index}`}
                style={imageStyle(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Shop;
