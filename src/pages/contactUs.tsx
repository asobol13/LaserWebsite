import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';

function ContactUs() {
    return (
        <div className="entire-container" style={{ textAlign: 'center' }}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Contact Page</h1>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;