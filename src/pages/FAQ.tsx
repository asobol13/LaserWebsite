import React, { CSSProperties } from 'react';
import Navigation from '../layouts/navigation';
import Footer2 from '../layouts/footer2';
import 'bootstrap/dist/css/bootstrap.min.css';

const pageStyle: CSSProperties = {
    backgroundColor: '#edf5ee',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    paddingBottom: '270px',
};

const faqsStyle: CSSProperties = {
    marginTop: '40px',
    marginBottom: '100px',
    textAlign: 'center',

};

function FAQ() {
    return (
        <div className="entire-container" style={pageStyle}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Frequently Asked Questions</h1>
            </div>
            <div className="container" style={faqsStyle}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>
            <Footer2 />
        </div>
    );
}

export default FAQ;